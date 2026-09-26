import type { ReactNode } from "react";

import { usePracticeName } from "@/lib/use-practice-name";
import { SectionLabel } from "./SectionPlaceholder";
import { StakAvatar, Wordmark } from "./Wordmark";

const white = { background: "var(--grad-white)", boxShadow: "var(--shadow-white)" };

function Tile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="rounded-[16px] p-4" style={white}>
      <p className="label-over text-[14px]">{label}</p>
      <div className="mt-2 text-[17px] leading-[1.35]">{children}</div>
    </div>
  );
}

export function YourPage({ referralSlug }: { referralSlug?: string | undefined }) {
  const practice = usePracticeName("Riverside Health", referralSlug);
  return (
    <section id="the-page" className="section-y">
      <div className="content-column">
        <SectionLabel>YOUR PAGE</SectionLabel>
        <h2 className="display-section mt-4 max-w-[800px]">Everything you told Stak, organized without you.</h2>
        <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
          Every text, photo and call becomes one private page with your provider&apos;s name on it. Weight
          trend, protein, next dose, what&apos;s coming up. Nothing to fill in, ever.
        </p>

        <figure className="mt-12">
          <div className="overflow-hidden rounded-[var(--radius-card)] bg-paper" style={white}>
            <div className="flex flex-wrap items-center gap-3 border-b border-hairline px-4 py-3">
              <div className="flex gap-1.5" aria-hidden="true">
                {[0, 1, 2].map((i) => (
                  <span key={i} className="h-3 w-3 rounded-full bg-frame" />
                ))}
              </div>
              <div className="order-last min-w-0 basis-full rounded-full bg-paper px-3 py-1 text-[15px] text-muted sm:order-none sm:flex-1 sm:basis-auto">jurniglp.com/you</div>
              <div className="ml-auto flex items-center gap-2">
                <Wordmark className="h-4" />
                <span className="text-[15px] font-bold">{practice}</span>
              </div>
            </div>
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <Tile label="Weight">
                  <p className="font-bold">down 14 lb</p>
                  <p className="text-[15px] text-muted">May to Aug</p>
                  <svg viewBox="0 0 100 30" className="mt-2 h-8 w-full" aria-hidden="true">
                    <polyline points="0,4 18,8 34,11 50,15 66,19 82,23 100,26" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Tile>
                <Tile label="Protein target">
                  <p className="font-bold">hit 4 of 7 days</p>
                  <div className="mt-2 flex gap-1.5" aria-hidden="true">
                    {Array.from({ length: 7 }, (_, i) => (
                      <span key={i} className="h-3 w-3 rounded-full border-2" style={{ borderColor: "var(--cyan)", background: i < 4 ? "var(--cyan)" : "transparent" }} />
                    ))}
                  </div>
                </Tile>
                <Tile label="Next dose">
                  <p className="font-bold">Friday</p>
                  <span className="mt-2 inline-block rounded-[var(--radius-chip)] bg-paper px-2 py-0.5 text-[14px] font-bold text-text-cyan">On track</span>
                </Tile>
                <Tile label="Up next">
                  <p>Thursday evening, refill reminder</p>
                  <p className="mt-1">Friday, dose day</p>
                </Tile>
              </div>

              <div className="mt-5 max-w-[520px]">
                <StakAvatar size={20} />
                <div className="mt-1.5 rounded-[18px] rounded-bl-[6px] border-l-[3px] border-magenta p-3.5 text-[17px] leading-[1.35]" style={white}>
                  Week 12: walked past the office bagels without wanting one.
                </div>
              </div>

              <div className="mt-5 rounded-[16px] p-4 text-ink" style={{ background: "var(--grad-yellow)", boxShadow: "var(--shadow-yellow)" }}>
                <p className="label-over text-[14px] text-ink">INSIGHT</p>
                <p className="mt-2 text-[17px] leading-[1.45]">
                  You hit your protein goal 4 of 7 days this week. Aim for 6. Protein protects your muscle while the weight comes off.
                </p>
              </div>
            </div>
          </div>
          <figcaption className="mt-4 text-center text-[15px] text-muted">
            Built by the thread above. Updated after every message.
          </figcaption>
        </figure>
        <p className="mt-6 text-center text-[18px]">Show it to your provider before a visit, or don&apos;t. It&apos;s yours.</p>
      </div>
    </section>
  );
}
