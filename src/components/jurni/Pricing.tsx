import { CyanCard, WhiteCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { PricingCTA } from "./StakCTA";

export function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT IT COSTS</SectionLabel>
        <h2 className="display-section mt-4 max-w-[800px]">Two weeks free. Then $29.99 a month.</h2>
        <p className="mt-6 max-w-[560px] text-[19px] leading-[1.5] text-muted">
          No card to start. Text Stak and it begins. After two weeks it sends you a link. Stop any time by replying STOP.
        </p>
        <div className="mt-10 grid max-w-[600px] gap-5 sm:grid-cols-2">
          <WhiteCard className="min-h-0">
            <p className="font-display text-[44px] font-extrabold leading-none text-[var(--stak-amber-deep)]">$29.99</p>
            <p className="mt-3 text-[17px] text-muted">a month</p>
          </WhiteCard>
          <CyanCard className="min-h-0">
            <p className="font-display text-[44px] font-extrabold leading-none text-[var(--stak-amber-deep)]">$300</p>
            <p className="mt-3 text-[17px]">a year · two months free</p>
          </CyanCard>
        </div>
        <div className="mt-10">
          <PricingCTA />
        </div>
      </div>
    </section>
  );
}
