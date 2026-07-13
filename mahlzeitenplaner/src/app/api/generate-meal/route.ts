import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface RequestBody {
  apiKey: string;
  dayLabel: string;
  preferences: {
    servings: number;
    dietary: string;
    cuisine: string;
    avoidIngredients: string;
  };
  avoidTitles: string[];
}

const MODEL = "claude-haiku-4-5";

function buildPrompt(body: RequestBody): string {
  const { dayLabel, preferences, avoidTitles } = body;

  const avoidText = avoidTitles.length
    ? `Vermeide diese Gerichte, sie sind diese Woche bereits eingeplant: ${avoidTitles.join(", ")}.`
    : "";

  return `Du bist ein Ernährungsassistent für die private Essensplanung. Suche im Web nach einer aktuellen, gut bewerteten Rezeptidee für die Hauptmahlzeit am ${dayLabel}.

Vorgaben:
- Portionen: ${preferences.servings}
- Ernährungsform: ${preferences.dietary || "keine Einschränkungen"}
- Küche / Stil: ${preferences.cuisine || "keine Präferenz"}
- Zutaten vermeiden: ${preferences.avoidIngredients || "keine"}
${avoidText}

Nutze die Websuche, um ein konkretes, existierendes Rezept von einer echten Rezeptseite zu finden (keine Erfindung). Antworte danach AUSSCHLIESSLICH mit einem einzigen JSON-Objekt — kein Markdown, kein Codeblock, kein einleitender oder abschließender Text — in genau diesem Format:

{
  "title": "Name des Gerichts",
  "description": "Kurze Beschreibung in 1-2 Sätzen",
  "ingredients": ["Zutat 1 mit Menge", "Zutat 2 mit Menge"],
  "steps": ["Schritt 1", "Schritt 2"],
  "sources": [{"title": "Name der Quelle", "url": "https://..."}]
}`;
}

function extractJson(text: string): unknown | null {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) return null;
  try {
    return JSON.parse(match[0]);
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültiger Request-Body." },
      { status: 400 },
    );
  }

  if (!body.apiKey || typeof body.apiKey !== "string") {
    return NextResponse.json(
      { error: "Kein Anthropic API-Key übermittelt. Bitte in den Einstellungen hinterlegen." },
      { status: 400 },
    );
  }

  const client = new Anthropic({ apiKey: body.apiKey });

  try {
    let messages: Anthropic.MessageParam[] = [
      { role: "user", content: buildPrompt(body) },
    ];

    const tools: Anthropic.ToolUnion[] = [
      {
        type: "web_search_20250305",
        name: "web_search",
        max_uses: 3,
      },
    ];

    let response = await client.messages.create({
      model: MODEL,
      max_tokens: 2048,
      tools,
      messages,
    });

    // Server-side tool loop can pause after its internal iteration limit;
    // resend the trailing assistant turn as-is so the API resumes it.
    let resumeAttempts = 0;
    while (response.stop_reason === "pause_turn" && resumeAttempts < 2) {
      messages = [...messages, { role: "assistant", content: response.content }];
      response = await client.messages.create({
        model: MODEL,
        max_tokens: 2048,
        tools,
        messages,
      });
      resumeAttempts += 1;
    }

    if (response.stop_reason === "refusal") {
      return NextResponse.json(
        {
          error:
            "Die Anfrage wurde von Claude abgelehnt. Bitte versuche es mit anderen Vorgaben erneut.",
        },
        { status: 422 },
      );
    }

    const textBlock = response.content.find(
      (block): block is Anthropic.TextBlock => block.type === "text",
    );

    if (!textBlock) {
      return NextResponse.json(
        { error: "Claude hat keine Textantwort geliefert." },
        { status: 502 },
      );
    }

    const parsed = extractJson(textBlock.text) as
      | {
          title?: unknown;
          description?: unknown;
          ingredients?: unknown;
          steps?: unknown;
          sources?: unknown;
        }
      | null;

    if (!parsed) {
      return NextResponse.json(
        {
          error: "Die Antwort konnte nicht als Rezept gelesen werden.",
          raw: textBlock.text,
        },
        { status: 502 },
      );
    }

    const sources = Array.isArray(parsed.sources)
      ? parsed.sources
          .filter(
            (s): s is { title?: unknown; url?: unknown } =>
              !!s && typeof s === "object" && typeof (s as { url?: unknown }).url === "string",
          )
          .map((s) => ({
            title: typeof s.title === "string" ? s.title : String(s.url),
            url: String(s.url),
          }))
      : [];

    const meal = {
      title: typeof parsed.title === "string" ? parsed.title : "Unbenanntes Gericht",
      description: typeof parsed.description === "string" ? parsed.description : "",
      ingredients: Array.isArray(parsed.ingredients)
        ? parsed.ingredients.map((i) => String(i))
        : [],
      steps: Array.isArray(parsed.steps) ? parsed.steps.map((s) => String(s)) : [],
      servings: body.preferences.servings,
      sources,
      generatedAt: new Date().toISOString(),
    };

    return NextResponse.json({ meal });
  } catch (err) {
    const apiErr = err as { status?: number; message?: string };
    const status = apiErr.status ?? 500;
    let message = apiErr.message || "Unbekannter Fehler bei der Anfrage an Claude.";
    if (status === 401) {
      message = "API-Key ungültig oder abgelehnt. Bitte in den Einstellungen prüfen.";
    } else if (status === 429) {
      message = "Rate-Limit erreicht. Bitte kurz warten und erneut versuchen.";
    }
    return NextResponse.json({ error: message }, { status });
  }
}
