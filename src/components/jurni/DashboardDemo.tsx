import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { trackCta } from "@/lib/analytics";
import { DashboardArtwork } from "./DashboardArtwork";
import { StakAvatar } from "./Wordmark";
import { STAK_PHONE_DISPLAY, STAK_SMS_HREF } from "./StakCTA";

const tabs = ["Today", "Meals", "Workouts", "Shots", "You"] as const;
type Tab = typeof tabs[number];

function Stats() {
  return <div className="mt-6 grid grid-cols-3 gap-2.5">
    <div className="dashboard-stat"><DashboardArtwork scene="water" className="h-16 w-full" /><p className="dashboard-number">2</p><p className="text-muted">glasses<br />today</p></div>
    <div className="dashboard-stat"><div className="flex h-16 items-center justify-center"><span className="h-10 w-10 rounded-full border-2 border-muted" /></div><p className="dashboard-number">28g</p><p className="text-muted">protein<br />of 140g</p></div>
    <div className="dashboard-stat"><DashboardArtwork scene="shot" className="h-16 w-full" /><p className="dashboard-number">Sun</p><p className="text-muted">shot<br />day</p></div>
  </div>;
}

export function DashboardDemo({ practice }: { practice: string }) {
  const [tab, setTab] = useState<Tab>("Today");
  return (
    <div className="dashboard-demo mx-auto w-full max-w-[480px] overflow-hidden rounded-[var(--radius-sheet)] border border-hairline bg-paper text-ink">
      <div className="dashboard-body px-4 pb-6 pt-6 sm:px-6" role="tabpanel" id="dashboard-panel" aria-labelledby={`dashboard-tab-${tab}`} tabIndex={0}>
        <div className="flex min-h-16 items-center justify-between gap-4">
          <p className="max-w-[65%] text-[17px] font-semibold">{practice}</p>
          <div className="flex shrink-0 items-center gap-1" aria-label="Stak">
            <span className="dashboard-vertical-mark font-display text-[14px] font-extrabold">STAK</span><StakAvatar size={58} />
          </div>
        </div>

        {tab === "Today" && <>
          <DashboardArtwork scene="strength" className="mx-auto my-7 h-[150px] w-[220px]" />
          <p className="text-[16px] text-muted">Wednesday 21 October</p>
          <h3 className="dashboard-title mt-1">Strength day</h3>
          <p className="mt-3 text-[18px]">3 moves · 20 min · week 3 of 4</p>
          <Button className="dashboard-action mt-4" onClick={() => setTab("Workouts")}>See today&apos;s workout</Button>
          <Stats />
          <div className="mt-5 rounded-card bg-surface p-4">
            <div className="flex items-center justify-between gap-3"><p className="text-[20px] font-semibold">This week with Stak</p><p className="shrink-0 text-[17px] font-bold">Week 3</p></div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {([{ scene: "shot", title: "Shot", detail: "Sun, R thigh" }, { scene: "lunch", title: "Eating", detail: "Protein first" }, { scene: "strength", title: "Moving", detail: "3 days" }] as const).map(item => <div key={item.title} className="min-w-0"><DashboardArtwork scene={item.scene} className="h-14 w-full" /><p className="mt-2 font-semibold">{item.title}</p><p className="text-[14px] text-muted">{item.detail}</p></div>)}
            </div>
          </div>
        </>}

        {tab === "Meals" && <>
          <DashboardArtwork scene="lunch" className="mx-auto my-7 h-[150px] w-[220px]" />
          <h3 className="dashboard-title">Meals</h3>
          <p className="mt-3 text-[18px]">Protein first</p>
          <div className="mt-6 rounded-card bg-surface p-5"><p className="font-semibold">Lunch · salmon grain bowl</p><p className="mt-3 text-muted">You hit your protein goal 4 of 7 days this week. Aim for 6. Protein protects your muscle while the weight comes off.</p></div>
          <Stats />
        </>}

        {tab === "Workouts" && <>
          <DashboardArtwork scene="strength" className="mx-auto my-7 h-[150px] w-[220px]" />
          <p className="text-muted">Wednesday 21 October</p><h3 className="dashboard-title mt-1">Strength day</h3>
          <p className="mt-3 text-[18px]">3 moves · 20 min · week 3 of 4</p>
          <div className="mt-6 divide-y divide-hairline rounded-card bg-surface px-5">
            {["Strength · 3 sets of 10", "25-minute walk · 3,100 steps", "Moving · 3 days"].map(line => <p key={line} className="py-5">{line}</p>)}
          </div>
        </>}

        {tab === "Shots" && <>
          <p className="mt-6 text-muted">Stak keeps your plan here. Anything you text him shows up on these tabs.</p>
          <DashboardArtwork scene="rest" className="mx-auto my-6 h-[145px] w-[180px]" />
          <p className="text-muted">Your next shot</p><h3 className="dashboard-title mt-1">Tomorrow, 9am</h3>
          <p className="mt-4 text-[18px]">On your shot day I&apos;ll text you that morning. Reply DONE when you take your shot and I&apos;ll record it on your record.</p>
          <Button asChild className="dashboard-action mt-5"><a href={STAK_SMS_HREF} onClick={() => trackCta("cta_text", "your-page")}>Change my shot day</a></Button>
          <p className="mt-5 text-muted">Your first workout is Monday. Your meals start Sunday.</p>
        </>}

        {tab === "You" && <>
          <h3 className="dashboard-title mt-6">You</h3><p className="mt-4 text-[18px]">This week with Stak</p>
          <div className="my-4 w-16"><DashboardArtwork scene="welcome" className="h-16 w-16" /><p className="text-center text-[14px] text-muted">Now</p></div>
          <p className="text-[18px]">No week closed yet. This one needs a meal on plan and a walk or a workout to close.</p>
          <div className="mt-5 rounded-card bg-surface p-5"><p className="text-[23px] font-semibold">Why</p><p className="mt-3 text-[23px] font-medium leading-snug">&quot;For my daughter&apos;s wedding in June.&quot;</p><p className="mt-2 text-muted">You · Oct 3</p><Button asChild variant="ghost" className="mt-4 h-auto w-full justify-between rounded-none border-t border-hairline px-0 pt-4 text-[17px] hover:bg-transparent hover:text-primary"><a href={STAK_SMS_HREF} onClick={() => trackCta("cta_text", "your-page")}>Give Stak a rule<ChevronRight /></a></Button></div>
          <div className="mt-4 flex items-center justify-between rounded-card bg-surface p-5"><p>Weight</p><p className="font-display text-[23px] font-extrabold">212 lb</p></div>
          <div className="mt-4 rounded-card bg-surface p-5"><div className="flex flex-wrap justify-between gap-2"><p>Stak</p><p className="text-muted">{STAK_PHONE_DISPLAY}</p></div><Button asChild variant="ghost" className="mt-4 h-auto w-full justify-between rounded-none border-t border-hairline px-0 pt-4 text-[17px] hover:bg-transparent hover:text-primary"><a href={STAK_SMS_HREF} onClick={() => trackCta("cta_text", "your-page")}>Text Stak<ChevronRight /></a></Button></div>
        </>}
      </div>
      <div className="dashboard-tabs grid grid-cols-5 border-t border-hairline" role="tablist" aria-label="Dashboard example">
        {tabs.map((name, index) => <Button key={name} id={`dashboard-tab-${name}`} role="tab" aria-controls="dashboard-panel" aria-selected={tab === name} tabIndex={tab === name ? 0 : -1} variant="ghost" className={cn("dashboard-tab h-16 min-w-0 rounded-none px-0 text-[14px] hover:bg-transparent hover:text-ink", tab === name ? "text-ink" : "text-muted")} onClick={() => setTab(name)} onKeyDown={event => {
          const next = event.key === "ArrowRight" ? (index + 1) % tabs.length : event.key === "ArrowLeft" ? (index + tabs.length - 1) % tabs.length : event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : undefined;
          if (next === undefined) return;
          event.preventDefault(); const target = tabs[next]; if (target) { setTab(target); document.getElementById(`dashboard-tab-${target}`)?.focus(); }
        }}>{name}</Button>)}
      </div>
    </div>
  );
}