import { HomeHero } from "./HomeHero";
import { MeetStak } from "./MeetStak";
import { SectionPlaceholder } from "./SectionPlaceholder";
import { TheThread } from "./TheThread";
import { ClosingCTA, PricingCTA } from "./StakCTA";

export function HomePage({ referralSlug }: { referralSlug?: string | undefined }) {
  return (
    <>
      <HomeHero referralSlug={referralSlug} />
      <MeetStak />

      <TheThread />

      <SectionPlaceholder label="What Stak Does" id="what-stak-does" />

      <SectionPlaceholder label="The Page" id="the-page" />

      <SectionPlaceholder label="Pricing" id="pricing">
        <PricingCTA />
      </SectionPlaceholder>

      <SectionPlaceholder label="Questions" id="questions" />

      <ClosingCTA />
    </>
  );
}