import { HomeHero } from "./HomeHero";
import { HowYouTalk } from "./HomeSections";
import { Journey } from "./Journey";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";
import { YourPage } from "./YourPage";
import { ClosingCTA } from "./StakCTA";
import { WhatStakIsnt } from "./HomeSections";

export function HomePage({ referralSlug }: { referralSlug?: string | undefined }) {
  return (
    <>
      <HomeHero referralSlug={referralSlug} />
      <YouGetAPlan />
      <Journey />
      <YourPage />
      <HowYouTalk />
      <WhatStakIsnt />
      <Pricing />
      <Questions />
      <ClosingCTA />
    </>
  );
}
