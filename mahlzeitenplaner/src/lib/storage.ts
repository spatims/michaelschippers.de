import {
  DEFAULT_PREFERENCES,
  FamilyMember,
  MealFeedback,
  Preferences,
  WeeklyPlan,
  emptyPlan,
} from "./types";

const PLAN_KEY = "mahlzeitenplaner:plan";
const PREFS_KEY = "mahlzeitenplaner:preferences";
const API_KEY_STORAGE_KEY = "mahlzeitenplaner:apiKey";
const FAMILY_KEY = "mahlzeitenplaner:family";
const FEEDBACK_KEY = "mahlzeitenplaner:feedback";

const MAX_FEEDBACK_ENTRIES = 200;

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadPlan(): WeeklyPlan {
  if (!isBrowser()) return emptyPlan();
  try {
    const raw = window.localStorage.getItem(PLAN_KEY);
    if (!raw) return emptyPlan();
    return { ...emptyPlan(), ...JSON.parse(raw) };
  } catch {
    return emptyPlan();
  }
}

export function savePlan(plan: WeeklyPlan) {
  if (!isBrowser()) return;
  window.localStorage.setItem(PLAN_KEY, JSON.stringify(plan));
}

export function loadPreferences(): Preferences {
  if (!isBrowser()) return DEFAULT_PREFERENCES;
  try {
    const raw = window.localStorage.getItem(PREFS_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

export function savePreferences(prefs: Preferences) {
  if (!isBrowser()) return;
  window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
}

export function loadApiKey(): string {
  if (!isBrowser()) return "";
  return window.localStorage.getItem(API_KEY_STORAGE_KEY) ?? "";
}

export function saveApiKey(key: string) {
  if (!isBrowser()) return;
  if (key) {
    window.localStorage.setItem(API_KEY_STORAGE_KEY, key);
  } else {
    window.localStorage.removeItem(API_KEY_STORAGE_KEY);
  }
}

export function loadFamilyMembers(): FamilyMember[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(FAMILY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveFamilyMembers(members: FamilyMember[]) {
  if (!isBrowser()) return;
  window.localStorage.setItem(FAMILY_KEY, JSON.stringify(members));
}

export function loadMealFeedback(): MealFeedback[] {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(FEEDBACK_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function addMealFeedback(entry: MealFeedback) {
  if (!isBrowser()) return;
  const current = loadMealFeedback();
  // Replace any earlier feedback for the same dish so the history reflects
  // the latest verdict per title, then cap the total size.
  const filtered = current.filter((f) => f.title !== entry.title);
  const next = [...filtered, entry].slice(-MAX_FEEDBACK_ENTRIES);
  window.localStorage.setItem(FEEDBACK_KEY, JSON.stringify(next));
}
