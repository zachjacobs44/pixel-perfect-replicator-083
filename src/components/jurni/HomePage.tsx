import { AskAnything } from "./AskAnything";
import { HomeHero } from "./HomeHero";
import { HowYouTalk, WhatStakIsnt, YouGetAPlan } from "./HomeSections";
import { Journey } from "./Journey";
import { Pricing } from "./Pricing";
import { Questions } from "./Questions";
import { YourPage } from "./YourPage";
import { ClosingCTA } from "./StakCTA";

export function HomePage({ referralSlug }: { referralSlug?: string | undefined }) {
  return (
    <>
      <HomeHero referralSlug={referralSlug} />
      <YouGetAPlan />
      <Journey />
      <HowYouTalk />
      <AskAnything />
      <YourPage />
      <WhatStakIsnt />
      <Pricing />
      <Questions />
      <ClosingCTA />
    </>
  );
}
