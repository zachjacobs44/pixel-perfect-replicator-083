import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/jurni/HomePage";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/site";

const TITLE = "Jurni GLP | The medicine quiets the hunger. Stak handles everything else.";
const DESCRIPTION =
  "Stak is an AI agent for people on a GLP-1. Text it or call it, any time. It builds your plan, answers your questions, tracks your progress, and checks in before the hard days. Two weeks free.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Jurni GLP. The medicine quiets the hunger. Stak handles everything else." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
  }),
  component: Home,
});

function Home() {
  return <HomePage />;
}
