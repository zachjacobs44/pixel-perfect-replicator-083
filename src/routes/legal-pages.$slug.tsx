import { createFileRoute, redirect } from "@tanstack/react-router";

/* The previous (Framer) site served the legal pages under /legal-pages/. Send old links to the new pages. */
const TARGETS: Record<string, string> = {
  "privacy-policy": "/privacy",
  "privacy-policy-backup": "/privacy",
  "terms-and-conditions": "/terms",
  "terms-and-conditions-backup": "/terms",
};

export const Route = createFileRoute("/legal-pages/$slug")({
  beforeLoad: ({ params }) => {
    throw redirect({ href: TARGETS[params.slug] ?? "/", statusCode: 301 });
  },
  component: () => null,
});
