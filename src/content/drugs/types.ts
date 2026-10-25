/**
 * Content model for the medication pages (/zepbound, /mounjaro, /wegovy, /ozempic).
 * Everything medical on these pages is sourced from the FDA-approved label and cited
 * at the bottom of the page. Jurni GLP never gives dosing advice; the page says so.
 */

export type DoseStep = {
  mg: string;
  /** Short tag shown under the step, e.g. "start" or "maintenance". */
  tag?: string;
};

export type SideEffectRow = {
  name: string;
  /** Plain-language frequency, e.g. "about 1 in 4". */
  howOften: string;
  /** What Jurni GLP does about it, one sentence. */
  jurniDoes: string;
};

export type ConvoLine = { from: "user" | "jurni"; text: string };

export type FaqItem = { q: string; a: string };

export type DrugContent = {
  slug: string;
  /** Brand name as people type it, e.g. "Zepbound". */
  name: string;
  /** Generic name, e.g. "tirzepatide". */
  generic: string;
  /** Maker, e.g. "Eli Lilly". */
  maker: string;
  /** "once-weekly injection" | "once-daily pill" */
  form: string;

  seo: { title: string; description: string };

  hero: {
    label: string;
    headline: string;
    sub: string;
    convo: ConvoLine[];
  };

  /** What the drug does, in a few short paragraphs. */
  how: { heading: string; paragraphs: string[] };

  ladder: {
    heading: string;
    intro: string;
    steps: DoseStep[];
    /** Caption under the ladder. */
    note: string;
    /** The sentence that says who decides. */
    whoDecides: string;
  };

  sideEffects: {
    heading: string;
    intro: string;
    rows: SideEffectRow[];
    note: string;
  };

  /** What Jurni GLP does for someone on this drug, as cards. */
  doesForYou: { heading: string; items: { title: string; body: string }[] };

  /** When to contact the prescriber, from the Medication Guide. */
  callIf: { heading: string; intro: string; items: string[]; emergency: string };

  faq: FaqItem[];

  sources: { label: string; href: string }[];
  /** Month/year of the label revision these facts come from. */
  labelDate: string;
};
