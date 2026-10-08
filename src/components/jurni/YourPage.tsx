import { SectionLabel } from "./SectionPlaceholder";
import { StakBubble } from "./Bubbles";
import { YellowCard } from "./Card";
import { Wordmark } from "./Wordmark";

function Tile({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2 rounded-[16px] border border-hairline bg-surface p-4">
      <span className="label-over text-[14px]">{label}</span>
      <span className="font-display text-[20px] font-extrabold leading-tight">{value}</span>
      <div className="mt-auto pt-2">{children}</div>
    </div>
  );
}

export function YourPage() {
  return (
    <section id="the-page" className="section-y">
      <div className="content-column">
        <SectionLabel>YOUR PAGE</SectionLabel>
        <h2 className="display-section mt-4 max-w-[800px]">Everything you told Stak, organized without you.</h2>
        <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
          Every text, photo and call becomes one private page. Your meals for the week, a shopping list you check off, your food log, your workouts, your shot log and side effects, and what Stak knows about you. Nothing to fill in, ever.
        </p>

        <figure className="mt-12">
          <div className="overflow-hidden rounded-[var(--radius-card)] text-ink" style={{ background: "var(--grad-white)", boxShadow: "var(--shadow-white)" }}>
            <div className="flex items-center gap-3 border-b border-hairline px-4 py-3">
              <span aria-hidden="true" className="flex gap-1.5">
                <i className="h-3 w-3 rounded-full bg-hairline" />
                <i className="h-3 w-3 rounded-full bg-hairline" />
                <i className="h-3 w-3 rounded-full bg-hairline" />
              </span>
              <span className="min-w-0 flex-1 truncate rounded-full bg-frame px-4 py-1.5 text-[14px] text-muted">jurniglp.com/you</span>
            </div>
            <div className="p-5 md:p-8">
              <Wordmark className="h-5" />
              <nav aria-hidden="true" className="label-over mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
                <span className="border-b-2 border-magenta pb-1 text-ink">Today</span>
                <span>Meals</span>
                <span>Workouts</span>
                <span>Shots</span>
                <span>You</span>
              </nav>
              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                <Tile label="Weight" value="down 14 lb">
                  <svg viewBox="0 0 100 32" className="h-8 w-full" aria-hidden="true">
                    <polyline points="0,4 16,8 32,10 48,15 64,18 80,24 100,28" fill="none" stroke="var(--cyan)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[14px] text-muted">May to Aug</span>
                </Tile>
                <Tile label="Protein target" value="hit 4 of 7 days">
                  <div className="flex gap-1.5" aria-hidden="true">
                    {Array.from({ length: 7 }, (_, i) => (
                      <i key={i} className="h-3 w-3 rounded-full border-2 border-cyan" style={{ background: i < 4 ? "var(--cyan)" : "transparent" }} />
                    ))}
                  </div>
                </Tile>
                <Tile label="Next dose" value="Friday">
                  <span className="inline-block rounded-full border border-hairline px-3 py-1 text-[14px] font-bold text-text-cyan">On track</span>
                </Tile>
                <Tile label="Shopping list" value="4 of 11 checked">
                  <div className="flex flex-wrap gap-1.5" aria-hidden="true">
                    {Array.from({ length: 11 }, (_, i) => (
                      <svg key={i} viewBox="0 0 14 14" className="h-3.5 w-3.5">
                        <rect x="1" y="1" width="12" height="12" rx="3" fill="none" stroke="var(--cyan)" strokeWidth="1.6" />
                        {i < 4 ? <path d="M4 7.2l2 2 4-4.4" fill="none" stroke="var(--cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> : null}
                      </svg>
                    ))}
                  </div>
                </Tile>
              </div>
              <StakBubble className="mt-6">Week 12: walked past the office bagels without wanting one.</StakBubble>
              <YellowCard className="mt-5 min-h-0">
                <div>
                  <span className="label-over text-[14px]">INSIGHT</span>
                  <p className="mt-2 text-[17px] leading-[1.5]">
                    You hit your protein goal 4 of 7 days this week. Aim for 6. Protein protects your muscle while the weight comes off.
                  </p>
                </div>
              </YellowCard>
            </div>
          </div>
          <figcaption className="mt-4 text-center text-[15px] text-muted">Built by your conversations. Updated after every one.</figcaption>
        </figure>
      </div>
    </section>
  );
}
