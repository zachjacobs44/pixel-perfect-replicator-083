import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/jurni/HomePage";

const TITLE = "Jurni GLP | GLP-1 support by text and call.";
const DESCRIPTION =
  "Text or call Stak, your GLP-1 support from Jurni GLP. A plan, answers, check-ins, meals and workouts. No app. Two weeks free.";

export const Route = createFileRoute("/")({
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
  return <HomePage />;
}
