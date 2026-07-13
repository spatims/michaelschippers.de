# Mahlzeitenplaner

Eine einfache App zur Planung der wöchentlichen **Hauptmahlzeiten** (Mo–So), mit KI-gestützten Rezeptvorschlägen. Die KI (Claude Haiku) durchsucht dabei live das Web nach passenden, echten Rezepten inklusive Quellenangabe.

## Features

- Wochenplan mit genau einer Hauptmahlzeit pro Tag
- KI-Rezeptvorschlag per Knopfdruck (Websuche inklusive Quellenlinks) oder manueller Eintrag
- Berücksichtigt Präferenzen: Portionen, Ernährungsform, Küche/Stil, zu vermeidende Zutaten
- Vermeidet automatisch Wiederholungen innerhalb derselben Woche
- Automatisch generierte Einkaufsliste aus allen geplanten Zutaten
- "Ganze Woche planen"-Button für alle offenen Tage auf einmal

## Setup

```bash
npm install
npm run dev
```

App läuft danach unter [http://localhost:3000](http://localhost:3000).

### Anthropic API-Key

Die App braucht einen eigenen Anthropic API-Key, um KI-Vorschläge zu generieren:

1. Key erstellen unter [console.anthropic.com](https://console.anthropic.com/settings/keys)
2. In der App oben rechts auf **Einstellungen** klicken
3. Key eintragen und speichern

Der Key wird **nur lokal im Browser** (`localStorage`) gespeichert und bei jeder Anfrage an die eigene Server-Route (`/api/generate-meal`) mitgeschickt, die ihn direkt an die Anthropic API weiterreicht. Der Key landet nie im Code oder Repository.

Die Server-Route nutzt das Modell `claude-haiku-4-5` mit dem serverseitigen `web_search`-Tool, um aktuelle Rezepte im Web zu finden.

## Tech-Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- `@anthropic-ai/sdk`
- Datenhaltung (Wochenplan, Präferenzen, API-Key) im Browser-`localStorage` — keine Datenbank nötig
