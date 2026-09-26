/**
 * Analytics for Jurni GLP. Every CTA tap logs to the console, and also goes to
 * Google Analytics 4 when a measurement ID is configured.
 */

export type CtaSection =
  | "hero"
  | "thread"
  | "pricing"
  | "faq"
  | "footer"
  | "practices"
  | "404";

export type CtaEventName = "cta_text" | "cta_call";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA4_MEASUREMENT_ID: string =
  (import.meta.env["VITE_GA4_MEASUREMENT_ID"] as string | undefined) ?? "";

let gaLoaded = false;

export function initAnalytics() {
  if (typeof window === "undefined" || gaLoaded || !GA4_MEASUREMENT_ID) return;
  gaLoaded = true;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_MEASUREMENT_ID);
}

export function trackCta(event: CtaEventName, section: CtaSection) {
  // eslint-disable-next-line no-console
  console.log(`[analytics] ${event}`, { section });
  if (typeof window !== "undefined" && window.gtag && GA4_MEASUREMENT_ID) {
    window.gtag("event", event, { section });
  }
}
