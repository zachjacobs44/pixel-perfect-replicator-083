import { createFileRoute } from "@tanstack/react-router";

import { YellowCard } from "@/components/jurni/Card";

const TITLE = "Terms — Jurni GLP";
const DESCRIPTION = "The terms that apply when you use Jurni GLP support by text and call.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jurniglp.com/terms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <section className="section-y">
      <div className="content-column max-w-[760px]">
        <YellowCard className="mb-10">
          <div className="label-over" style={{ color: "var(--ink)", opacity: 0.8 }}>
            Placeholder
          </div>
          <p className="text-[17px] font-semibold md:text-[18px]">PLACEHOLDER FROM COUNSEL.</p>
        </YellowCard>

        <h1 className="display-section">Terms</h1>
        <p className="mt-4" style={{ color: "var(--muted-soft)" }}>
          Copy arrives in the next pass.
        </p>
      </div>
    </section>
  );
}
