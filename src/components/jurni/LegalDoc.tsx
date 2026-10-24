import type { ReactNode } from "react";

/**
 * Shared layout for the Privacy Policy and Terms of Service.
 * Content lives in each route as plain strings so counsel's text can be swapped without touching markup.
 */
export type Block = { p: string } | { lead: string; p?: string } | { ul: string[] };
export type Section = { n: string; h: string; blocks: Block[] };

const EMAIL = "contact@jurniglp.com";

/* Turns the contact email into a mailto link wherever it appears. */
function withEmail(text: string): ReactNode {
  const parts = text.split(/(contact@jurniglp\.com)/);
  return parts.map((part, i) =>
    part === EMAIL ? (
      <a key={i} href={`mailto:${EMAIL}`} className="underline">
        {part}
      </a>
    ) : (
      part
    ),
  );
}

const para = "mt-4 text-[17px] leading-[1.6]";

function BlockView({ b }: { b: Block }) {
  if ("ul" in b) {
    return (
      <ul className="mt-4 list-disc space-y-2.5 pl-6 text-[17px] leading-[1.6]">
        {b.ul.map((item) => (
          <li key={item}>{withEmail(item)}</li>
        ))}
      </ul>
    );
  }
  if ("lead" in b) {
    return (
      <p className={para}>
        <span className="font-semibold">{b.lead}</span>
        {b.p ? <> {withEmail(b.p)}</> : null}
      </p>
    );
  }
  return <p className={para}>{withEmail(b.p)}</p>;
}

export function LegalDoc({
  title,
  lastUpdated,
  intro,
  summary,
  sections,
}: {
  title: string;
  lastUpdated: string;
  intro: string[];
  summary?: { label: string; text: string };
  sections: Section[];
}) {
  return (
    <section className="section-y">
      <div className="content-column max-w-[760px]">
        <p className="label-over">Jurni Health, Inc.</p>
        <h1 className="display-section mt-3">{title}</h1>
        <p className="mt-3 text-[15px] text-muted">Last updated: {lastUpdated}</p>

        {intro.map((t) => (
          <p key={t} className="mt-8 text-[18px] leading-[1.6]">
            {withEmail(t)}
          </p>
        ))}

        {summary ? (
          <div className="mt-8 rounded-[var(--radius-card)] border border-hairline bg-white p-6 md:p-7">
            <p className="label-over">{summary.label}</p>
            <p className="mt-3 text-[17px] leading-[1.6]">{withEmail(summary.text)}</p>
          </div>
        ) : null}

        <nav aria-label="Sections" className="mt-10 border-t pt-6" style={{ borderColor: "var(--hairline)" }}>
          <p className="label-over">Contents</p>
          <ol className="mt-3 grid gap-x-8 gap-y-1.5 text-[15px] sm:grid-cols-2">
            {sections.map((s) => (
              <li key={s.n}>
                <a href={`#s${s.n}`} className="text-muted underline-offset-2 hover:underline">
                  {s.n}. {s.h}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {sections.map((s) => (
          <div key={s.n} id={`s${s.n}`} className="mt-12 scroll-mt-24">
            <h2 className="font-display text-[26px] font-extrabold leading-[1.1]">
              {s.n}. {s.h}
            </h2>
            {s.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
