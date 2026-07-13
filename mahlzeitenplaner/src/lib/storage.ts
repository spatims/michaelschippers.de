import {
  DEFAULT_PREFERENCES,
  Preferences,
  WeeklyPlan,
  emptyPlan,
} from "./types";

const PLAN_KEY = "mahlzeitenplaner:plan";
const PREFS_KEY = "mahlzeitenplaner:preferences";
const API_KEY_STORAGE_KEY = "mahlzeitenplaner:apiKey";

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
