import { usePracticeName } from "@/lib/use-practice-name";
import { SectionLabel } from "./SectionPlaceholder";
import { DashboardDemo } from "./DashboardDemo";

export function YourPage({ referralSlug }: { referralSlug?: string | undefined }) {
  const practice = usePracticeName("Riverside Health", referralSlug);
  return (
    <section id="the-page" className="section-y">
      <div className="content-column">
        <SectionLabel>YOUR PAGE</SectionLabel>
        <h2 className="display-section mt-4 max-w-[800px]">Everything you told Stak, organized without you.</h2>
        <p className="mt-6 max-w-[600px] text-[20px] leading-[1.5]">
          Every text, photo and call becomes one private page with your provider&apos;s name on it. Weight
          trend, protein, next dose, what&apos;s coming up. Nothing to fill in, ever.
        </p>

        <figure className="mt-12">
          <DashboardDemo practice={practice} />
          <figcaption className="mt-4 text-center text-[15px] text-muted">
            Built by the thread above. Updated after every message.
          </figcaption>
        </figure>
        <p className="mt-6 text-center text-[18px]">Show it to your provider before a visit, or don&apos;t. It&apos;s yours.</p>
      </div>
    </section>
  );
}
