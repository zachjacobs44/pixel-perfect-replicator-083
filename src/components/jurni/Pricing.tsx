import { CyanCard, WhiteCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";
import { PricingCTA } from "./StakCTA";

export function Pricing() {
  return (
    <section id="pricing" className="section-y">
      <div className="content-column">
        <SectionLabel>WHAT IT COSTS</SectionLabel>
        <h2 className="display-section mt-4 max-w-[800px]">Free for two weeks. Then less than a dollar a day.</h2>
        <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
          No card to start. No account to make. Text Stak and it begins. After two weeks it sends you a
          link. $29.99 a month, or $300 a year if you&apos;d rather pay once. Stop whenever you want by
          replying STOP.
        </p>
        <div className="mt-10 grid max-w-[600px] gap-5 sm:grid-cols-2">
          <WhiteCard className="min-h-0">
            <p className="font-display text-[40px] font-extrabold leading-none">$29.99</p>
            <p className="mt-3 text-[17px] text-muted">a month</p>
          </WhiteCard>
          <CyanCard className="min-h-0">
            <p className="font-display text-[40px] font-extrabold leading-none">$300</p>
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
