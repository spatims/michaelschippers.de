"use client";

import { useEffect, useState } from "react";
import DayCard from "@/components/DayCard";
import SettingsPanel from "@/components/SettingsPanel";
import {
  addMealFeedback,
  loadApiKey,
  loadFamilyMembers,
  loadMealFeedback,
  loadPlan,
  loadPreferences,
  saveApiKey,
  saveFamilyMembers,
  savePlan,
  savePreferences,
} from "@/lib/storage";
import {
  DAYS,
  DayKey,
  FamilyMember,
  MainMeal,
  MealFeedback,
  Preferences,
  Rating,
  WeeklyPlan,
  emptyPlan,
} from "@/lib/types";

const MAX_FEEDBACK_HINTS = 15;

export default function Home() {
  const [plan, setPlan] = useState<WeeklyPlan>(emptyPlan());
  const [preferences, setPreferences] = useState<Preferences>(
    loadPreferences(),
  );
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [mealFeedback, setMealFeedback] = useState<MealFeedback[]>([]);
  const [apiKey, setApiKey] = useState("");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [loadingDay, setLoadingDay] = useState<DayKey | null>(null);
  const [loadingAll, setLoadingAll] = useState(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setPlan(loadPlan());
    setPreferences(loadPreferences());
    setFamilyMembers(loadFamilyMembers());
    setMealFeedback(loadMealFeedback());
    setApiKey(loadApiKey());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) savePlan(plan);
  }, [plan, hydrated]);

  useEffect(() => {
    if (hydrated) savePreferences(preferences);
  }, [preferences, hydrated]);

  useEffect(() => {
    if (hydrated) saveFamilyMembers(familyMembers);
  }, [familyMembers, hydrated]);

  async function generateMeal(dayKey: DayKey) {
    if (!apiKey) {
      setSettingsOpen(true);
      return;
    }
    const day = DAYS.find((d) => d.key === dayKey)!;
    setErrors((e) => ({ ...e, [dayKey]: null }));
    setLoadingDay(dayKey);

    const avoidTitles = Object.values(plan)
      .filter((m): m is MainMeal => !!m)
      .map((m) => m.title);

    const likedMeals = mealFeedback
      .filter((f) => f.rating === "like")
      .slice(-MAX_FEEDBACK_HINTS)
      .map((f) => f.title);
    const dislikedMeals = mealFeedback
      .filter((f) => f.rating === "dislike")
      .slice(-MAX_FEEDBACK_HINTS)
      .map((f) => f.title);

    try {
      const res = await fetch("/api/generate-meal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          apiKey,
          dayLabel: day.label,
          preferences,
          avoidTitles,
          familyMembers: familyMembers.map((m) => ({
            name: m.name,
            notes: m.notes,
          })),
          likedMeals,
          dislikedMeals,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unbekannter Fehler.");
      }
      setPlan((p) => ({ ...p, [dayKey]: data.meal as MainMeal }));
    } catch (err) {
      setErrors((e) => ({
        ...e,
        [dayKey]: err instanceof Error ? err.message : "Unbekannter Fehler.",
      }));
    } finally {
      setLoadingDay(null);
    }
  }

  async function generateWeek() {
    if (!apiKey) {
      setSettingsOpen(true);
      return;
    }
    setLoadingAll(true);
    for (const day of DAYS) {
      if (!plan[day.key]) {
        await generateMeal(day.key);
      }
    }
    setLoadingAll(false);
  }

  function clearDay(dayKey: DayKey) {
    setPlan((p) => ({ ...p, [dayKey]: null }));
    setErrors((e) => ({ ...e, [dayKey]: null }));
  }

  function rateMeal(dayKey: DayKey, rating: Rating) {
    const meal = plan[dayKey];
    if (!meal) return;
    setPlan((p) => ({ ...p, [dayKey]: { ...meal, rating } }));
    const entry: MealFeedback = {
      title: meal.title,
      rating,
      ratedAt: new Date().toISOString(),
    };
    addMealFeedback(entry);
    setMealFeedback((prev) => [
      ...prev.filter((f) => f.title !== meal.title),
      entry,
    ]);
  }

  function saveManual(dayKey: DayKey, title: string) {
    const meal: MainMeal = {
      title,
      description: "",
      ingredients: [],
      steps: [],
      servings: preferences.servings,
      sources: [],
      generatedAt: new Date().toISOString(),
      manual: true,
    };
    setPlan((p) => ({ ...p, [dayKey]: meal }));
  }

  const shoppingList = Array.from(
    new Set(
      Object.values(plan)
        .filter((m): m is MainMeal => !!m)
        .flatMap((m) => m.ingredients),
    ),
  );

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="mx-auto flex max-w-5xl flex-col gap-4 px-6 pt-10 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Mahlzeitenplaner
          </h1>
          <p className="text-sm text-black/50 dark:text-white/50">
            Hauptmahlzeiten für die Woche — mit KI-Rezeptvorschlägen per
            Websuche
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={generateWeek}
            disabled={loadingAll}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
          >
            {loadingAll ? "Woche wird geplant…" : "Ganze Woche planen"}
          </button>
          <button
            onClick={() => setSettingsOpen(true)}
            className="rounded-lg border border-black/10 px-4 py-2 text-sm font-medium hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/10"
          >
            Einstellungen
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 pb-16">
        {!apiKey && hydrated && (
          <div className="mb-6 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200">
            Hinterlege zuerst deinen Anthropic API-Key in den{" "}
            <button
              onClick={() => setSettingsOpen(true)}
              className="underline"
            >
              Einstellungen
            </button>
            , um KI-Vorschläge zu erhalten.
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DAYS.map((day) => (
            <DayCard
              key={day.key}
              day={day}
              meal={plan[day.key]}
              loading={loadingDay === day.key}
              error={errors[day.key] ?? null}
              onGenerate={() => generateMeal(day.key)}
              onClear={() => clearDay(day.key)}
              onManualSave={(title) => saveManual(day.key, title)}
              onRate={(rating) => rateMeal(day.key, rating)}
            />
          ))}
        </div>

        {shoppingList.length > 0 && (
          <div className="mt-10 rounded-xl border border-black/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5">
            <h2 className="mb-3 text-lg font-semibold">Einkaufsliste</h2>
            <ul className="grid grid-cols-1 gap-x-6 gap-y-1 text-sm sm:grid-cols-2 lg:grid-cols-3">
              {shoppingList.map((item, i) => (
                <li key={i} className="list-inside list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>

      {settingsOpen && (
        <SettingsPanel
          apiKey={apiKey}
          onApiKeyChange={(key) => {
            setApiKey(key);
            saveApiKey(key);
          }}
          preferences={preferences}
          onPreferencesChange={setPreferences}
          familyMembers={familyMembers}
          onFamilyMembersChange={setFamilyMembers}
          onClose={() => setSettingsOpen(false)}
        />
      )}
    </div>
  );
}
