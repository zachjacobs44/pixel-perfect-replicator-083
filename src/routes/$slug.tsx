import { createFileRoute, notFound, redirect } from "@tanstack/react-router";

import { findPractice } from "@/lib/referring-practices";

import { HomePage } from "@/components/jurni/HomePage";
import { SITE_URL } from "@/lib/site";

const TITLE = "Jurni GLP | GLP-1 support by text and call.";
const DESCRIPTION =
  "Text or call Jurni GLP, the AI agent for people on a GLP-1. Answers, check-ins, meals and workouts. No app needed. Two weeks free.";

/* Addresses from the previous (Framer) site that Google may still list. Each lands somewhere real. */
const LEGACY_REDIRECTS: Record<string, string> = {
  faq: "/#questions",
  "zepbound-tracker": "/zepbound",
  "wegovy-tracker": "/",
  "ozempic-tracker": "/",
  "semaglutide-tracker": "/",
  "mounjaro-tracker": "/",
  "tirzepatide-tracker": "/zepbound",
};

export const Route = createFileRoute("/$slug")({
  beforeLoad: ({ params }) => {
    const legacy = LEGACY_REDIRECTS[params.slug];
    if (legacy) throw redirect({ href: legacy, statusCode: 301 });
    if (!findPractice(params.slug)) throw notFound();
  },
  head: ({ params }) => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex, follow" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/${params.slug}` }],
  }),
  component: PracticeHome,
});

function PracticeHome() {
  const { slug } = Route.useParams();
  return <HomePage referralSlug={slug} />;
}