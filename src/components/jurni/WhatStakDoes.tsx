import { CyanCard, DarkCard, MagentaCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import shopDay from "@/assets/stak-shop-day.png.asset.json";

const JOBS = [
  { C: MagentaCard, t: "The friend", b: "Vent about the plateau. Tell it your jeans fit. It's the one contact who never gets tired of hearing about it." },
  { C: CyanCard, t: "The dietitian", b: "Photo of your plate, it logs the protein. Link to a menu, it picks your order. Ask what to eat when nothing sounds good, and it has answers that fit a small appetite." },
  { C: YellowCard, t: "The trainer", b: "Workouts sized to your energy this week, not a program written for someone who isn't on a GLP-1. Short lifts, long walks, and a reason to keep your muscle while the weight goes." },
  { C: DarkCard, t: "The assistant", b: "Logs doses, side effects, meals and workouts from a sentence. Builds meal plans and grocery lists. You never open a spreadsheet." },
  { C: WhiteCard, t: "The scheduler", b: "Reminders for doses, refills, lifts, and the lunch you skip, on the calendar you already use." },
  { C: MagentaCard, t: "The personal shopper", b: "Grocery lists built from what you'll actually cook. Restaurant picks before you sit down. Snacks that work when you're not hungry." },
];

const MEDS = ["Wegovy", "Ozempic", "Zepbound", "Mounjaro", "Wegovy pill", "Foundayo", "Rybelsus", "Saxenda", "Victoza", "Trulicity"];

function MedRow({ hidden }: { hidden?: boolean }) {
  return (
    <span aria-hidden={hidden} className="med-row label-over text-[14px] text-ink">
      {MEDS.map((m, i) => (
        <span key={m} className="whitespace-nowrap">
          {m}
          {i < MEDS.length - 1 ? <span className="px-3">·</span> : <span className="med-tail px-3">·</span>}
        </span>
      ))}
    </span>
  );
}

export function WhatStakDoes() {
  return (
    <section id="what-stak-does" className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT STAK DOES</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">One number. Six jobs.</h2>
        <p className="mt-6 max-w-[620px] text-[20px] leading-[1.5]">
          Text it, call it, send it a photo or a link. It does whatever the moment needs.
        </p>
        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2 lg:grid-cols-3">
          {JOBS.map(({ C, t, b }) => (
            <C key={t} {...(C === DarkCard ? { className: "text-ink" } : {})}>
              {t === "The personal shopper" && (
                <div className="mb-5 h-32 overflow-hidden rounded-[var(--radius-chip)]" aria-hidden="true">
                  <img src={shopDay.url} alt="" loading="lazy" className="mx-auto -mt-6 w-[150px] max-w-none" />
                </div>
              )}
              <h3 className="font-display text-[26px] font-extrabold leading-[1.05]">{t}</h3>
              <p className="mt-6 text-[17px] leading-[1.5]">{b}</p>
            </C>
          ))}
        </div>
        <p className="mt-12 text-[17px] font-bold">Works with every GLP-1. Injection or pill.</p>
        <div className="med-marquee mt-4 overflow-hidden">
          <div className="med-track">
            <MedRow />
            <MedRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
