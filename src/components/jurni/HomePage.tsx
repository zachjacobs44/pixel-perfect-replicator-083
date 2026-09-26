import { HomeHero } from "./HomeHero";
import { MeetStak } from "./MeetStak";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";
import { TheThread } from "./TheThread";
import { WhatStakDoes } from "./WhatStakDoes";
import { YourPage } from "./YourPage";
import { ClosingCTA } from "./StakCTA";

export function HomePage({ referralSlug }: { referralSlug?: string | undefined }) {
  return (
    <>
      <HomeHero referralSlug={referralSlug} />
      <MeetStak />
      <TheThread />
      <WhatStakDoes />
      <YourPage referralSlug={referralSlug} />
      <Pricing />
      <Questions />
      <ClosingCTA />
    </>
  );
}
