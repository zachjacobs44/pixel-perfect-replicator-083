import { useState } from "react";
import { SectionLabel } from "./SectionPlaceholder";
import { IPhoneFrame } from "./IPhoneFrame";
import { DashboardArtwork } from "./DashboardArtwork";
import { STAK_PHONE_DISPLAY, STAK_SMS_HREF } from "./StakCTA";
import { trackCta } from "@/lib/analytics";
import stakSpine from "@/assets/stak-lockup-spine.svg.asset.json";

type Tab = "Today" | "Meals" | "Workouts" | "Meds" | "You";
const TABS = ["Today", "Meals", "Workouts", "Meds", "You"] as const;

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
      <p className="text-[14px] text-muted">Friday 17 October</p>
      <h3 className="font-display text-[22px] font-extrabold leading-none">Shot day</h3>
      <p className="mt-1.5 text-[14px]">Week 12 · down 14 lb · then a 20-minute lift</p>
      <span className="mt-3 inline-block rounded-[12px] bg-[var(--stak-amber)] px-4 py-2 text-[14px] font-semibold text-[var(--stak-ground)]">See today's workout</span>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <StatTile art={<DashboardArtwork scene="water" className="h-9 w-7" />} value="4 of 7" label="protein days" />
        <StatTile art={<span className="block h-8 w-8 rounded-full border-2 border-muted" />} value="14 lb" label="down since May" />
        <StatTile art={<DashboardArtwork scene="shot" className="h-9 w-12" />} value="Fri" label="shot day" />
      </div>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <div className="flex items-baseline justify-between">
          <span className="text-[15px] font-semibold">This week with Stak</span>
          <span className="font-display text-[14px] font-extrabold">week 12</span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1.5 text-[14px] leading-tight">
          <div><span className="font-semibold">Shot</span><br /><span className="text-muted">Fri, L thigh</span></div>
          <div><span className="font-semibold">Eating</span><br /><span className="text-muted">4 of 7 on protein</span></div>
          <div><span className="font-semibold">Moving</span><br /><span className="text-muted">3 days</span></div>
        </div>
      </div>
    </>
  );
}

function MealsView() {
  return (
    <>
      <h3 className="font-display text-[22px] font-extrabold leading-none">Meals</h3>
      <p className="mt-1 text-[14px] text-muted">Week of Oct 20 · protein first</p>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <p className="text-[15px] font-semibold">Shopping list</p>
        <div className="mt-2 space-y-1.5 text-[14px]">
          <div className="flex items-center justify-between"><span>Greek yogurt</span><span className="text-muted">got it</span></div>
          <div className="flex items-center justify-between"><span>Eggs</span><span className="text-muted">got it</span></div>
          <div className="flex items-center justify-between"><span>Chicken thighs</span><span className="text-muted">still need</span></div>
        </div>
      </div>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <p className="text-[15px] font-semibold">Yesterday's log</p>
        <Row left="Breakfast" right="Yogurt + berries" />
        <Row left="Lunch" right="Chicken wrap" />
        <Row left="Dinner" right="Salmon, rice" />
      </div>
    </>
  );
}

function WorkoutsView() {
  return (
    <>
      <h3 className="font-display text-[22px] font-extrabold leading-none">Workouts</h3>
      <p className="mt-1 text-[14px] text-muted">Week 12 · 3 days done</p>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <Row left="Mon" right="Walked 25 min" />
        <Row left="Wed" right="Strength · 20 min" chevron />
        <Row left="Fri" right="Rest day" />
      </div>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <p className="text-[15px] font-semibold">Today's strength</p>
        <p className="mt-1 text-[14px] text-muted">3 moves · about 20 min · no equipment</p>
        <Row left="Goblet squat" right="3 × 10" />
        <Row left="Wall push-up" right="3 × 12" />
        <Row left="Dead bug" right="3 × 8" />
      </div>
    </>
  );
}

function MedsView() {
  return (
    <>
      <h3 className="font-display text-[22px] font-extrabold leading-none">Meds</h3>
      <p className="mt-1 text-[14px] text-muted">Next dose · Friday, 9 AM</p>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <p className="text-[15px] font-semibold">Shot log</p>
        <Row left="Oct 10" right="Fri · L thigh" />
        <Row left="Oct 3" right="Fri · R thigh" />
        <Row left="Sep 26" right="Fri · L thigh" />
      </div>
      <div className="mt-2 rounded-[14px] bg-surface p-3">
        <p className="text-[15px] font-semibold">Side effects</p>
        <p className="mt-1 text-[14px] leading-snug">Mild nausea the day after your last two doses. Stak is watching for changes.</p>
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
      <h3 className="mt-2 font-display text-[26px] font-extrabold leading-none">You</h3>
      <p className="mt-2 text-[15px]">This week with Stak</p>
      <p className="mt-2 text-[14px] leading-snug">No week closed yet. This one needs a meal on plan and a walk or a workout to close.</p>
      <div className="mt-3 rounded-[14px] bg-surface px-3 py-2">
        <p className="pt-1 text-[15px] font-semibold">Why</p>
        <p className="mt-1 text-[16px] font-semibold leading-snug">"For my daughter's wedding in June."</p>
        <p className="text-[14px] text-muted">You · Oct 3</p>
        <div className="mt-2 border-t border-hairline"><Row left="Give Stak a rule" chevron /></div>
      </div>
      <div className="mt-2 rounded-[14px] bg-surface px-3"><Row left="Weight" right="212 lb · down 14" chevron /></div>
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
          <h2 className="display-section mt-4 max-w-[800px]">Everything you tell Stak, organized for you.</h2>
          <p className="mt-6 max-w-[520px] text-[19px] leading-[1.5] text-muted">
            Every text, photo and call becomes one private page: meals, shopping list, workouts, shot log, and what Stak knows about you. Nothing to fill in, ever.
          </p>
          <a href={STAK_SMS_HREF} onClick={() => trackCta("cta_text", "your-page")} className="mt-6 inline-block text-[17px] font-semibold text-[var(--stak-amber)] underline underline-offset-4">Text Stak to get your page</a>
        </div>

        <figure className="phone-glow mx-auto w-full max-w-[340px]">
          <IPhoneFrame>
            <div className="night-screen flex h-full flex-col">
              <div className="min-h-0 flex-1 overflow-hidden px-4 pt-[16%]">
                <div className="flex items-start justify-between">
                  <p className="max-w-[70%] text-[14px] leading-snug text-muted">
                    {""}
                  </p>
                  <img src={stakSpine.url} alt="Stak" className="h-10 w-auto" />
                </div>
                {tab === "Today" ? <TodayView /> : tab === "Meals" ? <MealsView /> : tab === "Workouts" ? <WorkoutsView /> : tab === "Meds" ? <MedsView /> : <YouView />}
              </div>
              <nav aria-label="Example page tabs" className="flex shrink-0 justify-between border-t border-hairline bg-[var(--stak-bar)] px-3 pb-4 pt-2 text-[14px]">
                {TABS.map((t) => {
                  const active = t === tab;
                  return (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setTab(t)}
                      className={`flex cursor-pointer flex-col items-center gap-1 ${active ? "font-semibold text-[var(--stak-ink)]" : "text-muted"}`}
                    >
                      {t}
                      <i aria-hidden="true" className={`h-0.5 w-5 rounded-full ${active ? "bg-[var(--stak-amber)]" : "bg-transparent"}`} />
                    </button>
                  );
                })}
              </nav>
            </div>
          </IPhoneFrame>
          <figcaption className="mt-4 text-center text-[15px] text-muted">An example page. Tap any tab.</figcaption>
        </figure>
      </div>
    </section>
  );
}
