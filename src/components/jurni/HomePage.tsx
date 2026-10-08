import { AskAnything } from "./AskAnything";
import { HomeHero } from "./HomeHero";
import { HowYouTalk, KeepsWorking, WhatStakIsnt, YouGetAPlan } from "./HomeSections";
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
      <KeepsWorking />
      <WhatStakIsnt />
      <Pricing />
      <Questions />
      <ClosingCTA />
    </>
  );
}
