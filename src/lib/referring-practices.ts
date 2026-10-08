export type ReferringPractice = {
  slug: string;
  name: string;
};

export const REFERRING_PRACTICES: ReferringPractice[] = [];

const STORAGE_KEY = "jurni.referring-practice";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

type StoredPractice = {
  slug: string;
  expiresAt: number;
};

export function findPractice(slug: string | undefined) {
  if (!slug) return undefined;
  return REFERRING_PRACTICES.find((practice) => practice.slug === slug.toLowerCase());
}

export function rememberPractice(slug: string) {
  const practice = findPractice(slug);
  if (!practice) return;

  const value: StoredPractice = {
    slug: practice.slug,
    expiresAt: Date.now() + THIRTY_DAYS_MS,
  };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function readRememberedPractice() {
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return undefined;

  try {
    const stored = JSON.parse(raw) as Partial<StoredPractice>;
    if (typeof stored.slug !== "string" || typeof stored.expiresAt !== "number") {
      window.localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }
    if (stored.expiresAt <= Date.now()) {
      window.localStorage.removeItem(STORAGE_KEY);
      return undefined;
    }
    return findPractice(stored.slug);
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return undefined;
  }
}