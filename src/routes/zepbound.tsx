import { createFileRoute } from "@tanstack/react-router";

import { DrugPage } from "@/components/jurni/DrugPage";
import { zepbound } from "@/content/drugs/zepbound";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/site";

const URL = `${SITE_URL}/zepbound`;

export const Route = createFileRoute("/zepbound")({
  head: () => ({
    meta: [
      { title: zepbound.seo.title },
      { name: "description", content: zepbound.seo.description },
      { property: "og:title", content: zepbound.seo.title },
      { property: "og:description", content: zepbound.seo.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: SOCIAL_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: zepbound.seo.title },
      { name: "twitter:description", content: zepbound.seo.description },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: zepbound.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: () => <DrugPage d={zepbound} />,
});
