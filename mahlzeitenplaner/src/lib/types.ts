export type DayKey = "mo" | "di" | "mi" | "do" | "fr" | "sa" | "so";

export interface Day {
  key: DayKey;
  label: string;
}

export const DAYS: Day[] = [
  { key: "mo", label: "Montag" },
  { key: "di", label: "Dienstag" },
  { key: "mi", label: "Mittwoch" },
  { key: "do", label: "Donnerstag" },
  { key: "fr", label: "Freitag" },
  { key: "sa", label: "Samstag" },
  { key: "so", label: "Sonntag" },
];

export interface Source {
  title: string;
  url: string;
}

export type Rating = "like" | "dislike";

export interface MainMeal {
  title: string;
  description: string;
  ingredients: string[];
  steps: string[];
  servings: number;
  sources: Source[];
  generatedAt: string;
  manual?: boolean;
  rating?: Rating;
}

export interface FamilyMember {
  id: string;
  name: string;
  notes: string;
}

export interface MealFeedback {
  title: string;
  rating: Rating;
  note?: string;
  ratedAt: string;
}

export type WeeklyPlan = Record<DayKey, MainMeal | null>;

export interface Preferences {
  servings: number;
  dietary: string;
  cuisine: string;
  avoidIngredients: string;
}

export const DEFAULT_PREFERENCES: Preferences = {
  servings: 2,
  dietary: "",
  cuisine: "",
  avoidIngredients: "",
};

export function emptyPlan(): WeeklyPlan {
  return {
    mo: null,
    di: null,
    mi: null,
    do: null,
    fr: null,
    sa: null,
    so: null,
  };
}
