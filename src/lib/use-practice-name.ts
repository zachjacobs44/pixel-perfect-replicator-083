import { useEffect, useState } from "react";

import { findPractice, readRememberedPractice } from "./referring-practices";

/** Practice name from ?from=, /<slug>, or the remembered attribution. Hydration-safe. */
export function usePracticeName(fallback: string, slug?: string, useRemembered = true) {
  const [name, setName] = useState(fallback);
  useEffect(() => {
    const supplied = slug ?? new URLSearchParams(window.location.search).get("from") ?? undefined;
    const direct = findPractice(supplied);
    if (direct) return setName(direct.name);
    if (supplied || !useRemembered) return setName(fallback);
    setName(readRememberedPractice()?.name ?? fallback);
  }, [slug, fallback, useRemembered]);
  return name;
}
