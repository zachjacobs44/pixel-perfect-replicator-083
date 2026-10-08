import { useState } from "react";
import { SectionLabel } from "./SectionPlaceholder";
import { IPhoneFrame } from "./IPhoneFrame";
import { DashboardArtwork } from "./DashboardArtwork";
import { STAK_PHONE_DISPLAY, STAK_SMS_HREF } from "./StakCTA";
import { trackCta } from "@/lib/analytics";
import stakSpine from "@/assets/stak-lockup-spine.svg.asset.json";

type Tab = "Today" | "You";
const TABS = ["Today", "Meals", "Workouts", "Shots", "You"] as const;

function StatTile({ art, value, label }: { art: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col rounded-[14px] bg-surface p-2.5">
      <div className="flex h-9 items-center">{art}</div>
      <span className="mt-1.5 font-display text-[18px] font-extrabold leading-none">{value}</span>
      <span className="mt-1 text-[14px] leading-tight text-muted">{label}</span>
    </div>
  );
}

function TodayView() {
  return (
    <>
      <div className="flex justify-center py-2">
        <DashboardArtwork scene="strength" className="h-20 w-32" />
      </div>
      <p className="text-[14px] text-muted">Wednesday 21 October</p>
      <h3 className="font-display text-[22px] font-extrabold uppercase leading-none">Strength day</h3>
      <p className="mt-1.5 text-[14px]">3 moves · 20 min · week 3 of 4</p>
      <span className="mt-3 inline-block rounded-[12px] bg-amber px-4 py-2 text-[14px] font-semibold text-ground">See today's workout</span>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <StatTile art={<DashboardArtwork scene="water" className="h-9 w-7" />} value="2" label="glasses today" />
        <StatTile art={<span className="block h-8 w-8 rounded-full border-2 border-muted" />} value="28g" label="protein of 140g" />
        <StatTile art={<DashboardArtwork scene="shot" className="h-9 w-12" />} value="Sun" label="shot day" />
      </div>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-semibold">This week with Stak</span>
          <span className="font-display text-[14px] font-extrabold">week 3</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-[14px] leading-tight">
          <div><span className="font-semibold">Shot</span><br /><span className="text-muted">Sun, R thigh</span></div>
          <div><span className="font-semibold">Eating</span><br /><span className="text-muted">Protein first</span></div>
          <div><span className="font-semibold">Moving</span><br /><span className="text-muted">3 days</span></div>
        </div>
      </div>
    </>
  );
}

function Row({ left, right, chevron }: { left: string; right?: string; chevron?: boolean }) {
  return (
    <div className="flex items-center justify-between py-2 text-[15px]">
      <span>{left}</span>
      <span className="flex items-center gap-2">
        {right ? <span className={chevron ? "font-display font-extrabold" : "text-muted"}>{right}</span> : null}
        {chevron ? <span aria-hidden="true" className="text-muted">›</span> : null}
      </span>
    </div>
  );
}

function YouView() {
  return (
    <>
      <h3 className="mt-2 font-display text-[26px] font-extrabold uppercase leading-none">You</h3>
      <p className="mt-2 text-[15px]">This week with Stak</p>
      <p className="mt-2 text-[14px] leading-snug">No week closed yet. This one needs a meal on plan and a walk or a workout to close.</p>
      <div className="mt-3 rounded-[14px] bg-surface px-3 py-2">
        <p className="pt-1 text-[15px] font-semibold">Why</p>
        <p className="mt-1 text-[16px] font-semibold leading-snug">"For my daughter's wedding in June."</p>
        <p className="text-[14px] text-muted">You · Oct 3</p>
        <div className="mt-2 border-t border-hairline"><Row left="Give Stak a rule" chevron /></div>
      </div>
      <div className="mt-2 rounded-[14px] bg-surface px-3"><Row left="Weight" right="212 lb" chevron /></div>
      <div className="mt-2 rounded-[14px] bg-surface px-3">
        <Row left="Stak" right={STAK_PHONE_DISPLAY} />
        <div className="border-t border-hairline"><Row left="Text Stak" chevron /></div>
      </div>
    </>
  );
}

export function YourPage() {
  const [tab, setTab] = useState<Tab>("Today");
  return (
    <section id="the-page" className="section-y">
      <div className="content-column grid items-center gap-12 lg:grid-cols-[1fr_360px]">
        <div>
          <SectionLabel>YOUR PAGE</SectionLabel>
          <h2 className="display-section mt-4 max-w-[800px]">Everything you told Stak, organized without you.</h2>
          <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
            Every text, photo and call becomes one private page. Your meals for the week, a shopping list you check off, your food log, your workouts, your shot log and side effects, and what Stak knows about you. Nothing to fill in, ever.
          </p>
          <a href={STAK_SMS_HREF} onClick={() => trackCta("cta_text", "your-page")} className="mt-6 inline-block text-[17px] font-semibold text-amber underline underline-offset-4">Text Stak to get your page</a>
        </div>

        <figure className="mx-auto w-full max-w-[340px]">
          <IPhoneFrame>
            <div className="flex h-full flex-col bg-ground text-ink">
              <div className="min-h-0 flex-1 overflow-hidden px-4 pt-[16%]">
                <div className="flex items-start justify-between">
                  <p className="max-w-[70%] text-[14px] leading-snug text-muted">
                    {tab === "Today" ? "Stak keeps your plan here." : ""}
                  </p>
                  <img src={stakSpine.url} alt="Stak" className="h-10 w-auto" />
                </div>
                {tab === "Today" ? <TodayView /> : <YouView />}
              </div>
              <nav aria-label="Example page tabs" className="flex shrink-0 justify-between border-t border-hairline bg-bar px-3 pb-4 pt-2 text-[14px]">
                {TABS.map((t) => {
                  const live = t === "Today" || t === "You";
                  const active = t === tab;
                  return (
                    <button
                      key={t}
                      type="button"
                      disabled={!live}
                      aria-pressed={active}
                      onClick={() => live && setTab(t)}
                      className={`flex flex-col items-center gap-1 ${active ? "font-semibold text-ink" : "text-muted"} ${live ? "cursor-pointer" : "cursor-default"}`}
                    >
                      {t}
                      <i aria-hidden="true" className={`h-0.5 w-5 rounded-full ${active ? "bg-amber" : "bg-transparent"}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </IPhoneFrame>
          <figcaption className="mt-4 text-center text-[15px] text-muted">An example page. Tap Today or You.</figcaption>
        </figure>
      </div>
    </section>
  );
}
