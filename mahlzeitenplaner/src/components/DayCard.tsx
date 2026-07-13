"use client";

import { useState } from "react";
import { Day, MainMeal } from "@/lib/types";

interface DayCardProps {
  day: Day;
  meal: MainMeal | null;
  loading: boolean;
  error: string | null;
  onGenerate: () => void;
  onClear: () => void;
  onManualSave: (title: string) => void;
}

export default function DayCard({
  day,
  meal,
  loading,
  error,
  onGenerate,
  onClear,
  onManualSave,
}: DayCardProps) {
  const [editing, setEditing] = useState(false);
  const [manualTitle, setManualTitle] = useState("");
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col rounded-xl border border-black/10 bg-white/60 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-black/50 dark:text-white/50">
          {day.label}
        </h3>
        {meal && (
          <button
            onClick={onClear}
            className="text-xs text-black/40 hover:text-red-600 dark:text-white/40 dark:hover:text-red-400"
            title="Eintrag löschen"
          >
            Entfernen
          </button>
        )}
      </div>

      {!meal && !editing && (
        <div className="flex flex-1 flex-col justify-between gap-3">
          <p className="text-sm text-black/40 dark:text-white/40">
            Noch keine Hauptmahlzeit geplant.
          </p>
          <div className="flex gap-2">
            <button
              onClick={onGenerate}
              disabled={loading}
              className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
            >
              {loading ? "Suche läuft…" : "KI-Vorschlag"}
            </button>
            <button
              onClick={() => setEditing(true)}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-black/70 hover:bg-black/5 dark:border-white/20 dark:text-white/70 dark:hover:bg-white/10"
            >
              Manuell
            </button>
          </div>
        </div>
      )}

      {editing && !meal && (
        <div className="flex flex-1 flex-col gap-2">
          <input
            autoFocus
            value={manualTitle}
            onChange={(e) => setManualTitle(e.target.value)}
            placeholder="z.B. Gemüsecurry mit Reis"
            className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                if (manualTitle.trim()) {
                  onManualSave(manualTitle.trim());
                  setManualTitle("");
                  setEditing(false);
                }
              }}
              className="flex-1 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
            >
              Speichern
            </button>
            <button
              onClick={() => setEditing(false)}
              className="rounded-lg border border-black/10 px-3 py-2 text-sm text-black/70 hover:bg-black/5 dark:border-white/20 dark:text-white/70 dark:hover:bg-white/10"
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}

      {meal && (
        <div className="flex flex-1 flex-col gap-2">
          <p className="font-medium leading-snug">{meal.title}</p>
          {meal.description && (
            <p className="text-sm text-black/60 dark:text-white/60">{meal.description}</p>
          )}

          {(meal.ingredients.length > 0 || meal.steps.length > 0) && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="self-start text-xs font-medium text-emerald-700 hover:underline dark:text-emerald-400"
            >
              {expanded ? "Details verbergen" : "Details anzeigen"}
            </button>
          )}

          {expanded && (
            <div className="flex flex-col gap-3 rounded-lg bg-black/[0.03] p-3 text-sm dark:bg-white/[0.05]">
              {meal.ingredients.length > 0 && (
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase text-black/50 dark:text-white/50">
                    Zutaten ({meal.servings} Portionen)
                  </p>
                  <ul className="list-inside list-disc space-y-0.5">
                    {meal.ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}
              {meal.steps.length > 0 && (
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase text-black/50 dark:text-white/50">
                    Zubereitung
                  </p>
                  <ol className="list-inside list-decimal space-y-0.5">
                    {meal.steps.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          {meal.sources.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-2">
              {meal.sources.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-black/5 px-2 py-1 text-xs text-black/60 hover:bg-black/10 dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20"
                >
                  {s.title}
                </a>
              ))}
            </div>
          )}

          <button
            onClick={onGenerate}
            disabled={loading}
            className="mt-2 self-start text-xs font-medium text-black/50 hover:text-emerald-700 disabled:opacity-50 dark:text-white/50 dark:hover:text-emerald-400"
          >
            {loading ? "Suche läuft…" : "Neuen Vorschlag holen"}
          </button>
        </div>
      )}

      {error && (
        <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
}
