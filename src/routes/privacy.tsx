import { createFileRoute } from "@tanstack/react-router";

import { YellowCard } from "@/components/jurni/Card";

const TITLE = "Privacy — Jurni GLP";
const DESCRIPTION =
  "How Jurni GLP handles your information, including mobile phone numbers and SMS consent.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://jurniglp.com/privacy" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://jurniglp.com/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <section className="section-y">
      <div className="content-column max-w-[760px]">
        <YellowCard className="mb-10">
          <div className="label-over" style={{ color: "var(--ink)", opacity: 0.8 }}>
            Placeholder
          </div>
          <p className="text-[17px] font-semibold md:text-[18px]">
            PLACEHOLDER FROM COUNSEL. Mobile phone numbers and SMS opt-in consent are never shared
            with third parties or affiliates for marketing or promotional purposes.
          </p>
        </YellowCard>

        <h1 className="display-section">Privacy</h1>
        <p className="mt-4" style={{ color: "var(--muted-soft)" }}>
          Copy arrives in the next pass.
        </p>
      </div>
    </section>
  );
}
