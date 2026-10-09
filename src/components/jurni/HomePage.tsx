import { AskAnything } from "./AskAnything";
import { HomeHero } from "./HomeHero";
import { Moment } from "./Moment";
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
      <Moment />
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
