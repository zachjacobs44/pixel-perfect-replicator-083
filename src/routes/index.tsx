import { createFileRoute } from "@tanstack/react-router";

import { SectionPlaceholder } from "@/components/jurni/SectionPlaceholder";
import { StakCTA } from "@/components/jurni/StakCTA";

const TITLE = "Jurni GLP — GLP-1 support by text and call.";
const DESCRIPTION =
  "Text or call Stak, your GLP-1 support from Jurni GLP. Answers, check-ins, meals and workouts. No app. Two weeks free.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://jurniglp.com/" },
      { property: "og:image", content: "https://jurniglp.com/social-preview.png" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://jurniglp.com/social-preview.png" },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SectionPlaceholder label="Hero" id="hero">
        <StakCTA section="hero" />
      </SectionPlaceholder>

      <SectionPlaceholder label="Meet Stak" id="meet-stak" />

      <SectionPlaceholder label="The Thread" id="the-thread">
        <StakCTA section="thread" />
      </SectionPlaceholder>

      <SectionPlaceholder label="What Stak Does" id="what-stak-does" />

      <SectionPlaceholder label="The Page" id="the-page" />

      <SectionPlaceholder label="Pricing" id="pricing">
        <StakCTA section="pricing" />
      </SectionPlaceholder>

      <SectionPlaceholder label="Questions" id="questions">
        <StakCTA section="faq" />
      </SectionPlaceholder>
    </>
  );
}
