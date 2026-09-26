import { createFileRoute, notFound } from "@tanstack/react-router";

import { findPractice } from "@/lib/referring-practices";

import { HomePage } from "@/components/jurni/HomePage";

const TITLE = "Jurni GLP | GLP-1 support by text and call.";
const DESCRIPTION =
  "Text or call Stak, your GLP-1 support from Jurni GLP. Answers, check-ins, meals and workouts. No app. Two weeks free.";

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    if (!findPractice(params.slug)) throw notFound();
  },
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/" }],
  }),
  component: PracticeHome,
});

function PracticeHome() {
  const { slug } = Route.useParams();
  return <HomePage referralSlug={slug} />;
}