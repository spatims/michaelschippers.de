"use client";

import { useState } from "react";
import { Preferences } from "@/lib/types";

interface SettingsPanelProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
  preferences: Preferences;
  onPreferencesChange: (prefs: Preferences) => void;
  onClose: () => void;
}

export default function SettingsPanel({
  apiKey,
  onApiKeyChange,
  preferences,
  onPreferencesChange,
  onClose,
}: SettingsPanelProps) {
  const [localKey, setLocalKey] = useState(apiKey);
  const [showKey, setShowKey] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/40 p-4 pt-16">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Einstellungen</h2>
          <button
            onClick={onClose}
            className="text-black/40 hover:text-black/70 dark:text-white/40 dark:hover:text-white/70"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              Anthropic API-Key
            </label>
            <div className="flex gap-2">
              <input
                type={showKey ? "text" : "password"}
                value={localKey}
                onChange={(e) => setLocalKey(e.target.value)}
                placeholder="sk-ant-..."
                className="flex-1 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
              />
              <button
                onClick={() => setShowKey((v) => !v)}
                className="rounded-lg border border-black/10 px-3 text-sm dark:border-white/20"
              >
                {showKey ? "Verbergen" : "Zeigen"}
              </button>
            </div>
            <p className="mt-1 text-xs text-black/50 dark:text-white/50">
              Wird nur lokal in deinem Browser gespeichert (localStorage) und
              bei Anfragen an deine eigene Server-Route weitergereicht. Landet
              nie im Code oder Repository.
            </p>
          </div>

          <hr className="border-black/10 dark:border-white/10" />

          <div>
            <label className="mb-1 block text-sm font-medium">Portionen</label>
            <input
              type="number"
              min={1}
              max={12}
              value={preferences.servings}
              onChange={(e) =>
                onPreferencesChange({
                  ...preferences,
                  servings: Math.max(1, Number(e.target.value) || 1),
                })
              }
              className="w-24 rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Ernährungsform
            </label>
            <input
              value={preferences.dietary}
              onChange={(e) =>
                onPreferencesChange({ ...preferences, dietary: e.target.value })
              }
              placeholder="z.B. vegetarisch, vegan, low carb"
              className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Küche / Stil
            </label>
            <input
              value={preferences.cuisine}
              onChange={(e) =>
                onPreferencesChange({ ...preferences, cuisine: e.target.value })
              }
              placeholder="z.B. italienisch, asiatisch, schnell & einfach"
              className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">
              Zutaten vermeiden
            </label>
            <input
              value={preferences.avoidIngredients}
              onChange={(e) =>
                onPreferencesChange({
                  ...preferences,
                  avoidIngredients: e.target.value,
                })
              }
              placeholder="z.B. Nüsse, Meeresfrüchte"
              className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/20 dark:bg-black/20"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={() => {
              onApiKeyChange(localKey.trim());
              onClose();
            }}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
          >
            Speichern
          </button>
        </div>
      </div>
    </div>
  );
}
