import { createFileRoute } from "@tanstack/react-router";

import { HomeHero } from "@/components/jurni/HomeHero";
import { MeetStak } from "@/components/jurni/MeetStak";
import { SectionPlaceholder } from "@/components/jurni/SectionPlaceholder";
import {
  ClosingCTA,
  PricingCTA,
  ThreadCTA,
} from "@/components/jurni/StakCTA";

const TITLE = "Jurni GLP — GLP-1 support by text and call.";
const DESCRIPTION =
  "Text or call Stak, your GLP-1 support from Jurni GLP. Answers, check-ins, meals and workouts. No app. Two weeks free.";

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>) => ({
    from: typeof search.from === "string" ? search.from : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jurniglp.com/" },
      { property: "og:image", content: "https://jurniglp.com/social-preview.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://jurniglp.com/social-preview.png" },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/" }],
  }),
  component: Home,
});

function Home() {
  const { from } = Route.useSearch();
  return <HomePage referralSlug={from} />;
}

export function HomePage({ referralSlug }: { referralSlug?: string }) {
  return (
    <>
      <HomeHero referralSlug={referralSlug} />
      <MeetStak />

      <SectionPlaceholder label="The Thread" id="the-thread">
        <ThreadCTA />
      </SectionPlaceholder>

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
