import { CyanCard, DarkCard, MagentaCard, WhiteCard, YellowCard } from "./Card";
import { SectionLabel } from "./SectionPlaceholder";

function FeatureContent({
  number,
  headline,
  children,
}: {
  number: string;
  headline: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <p className="label-over text-[14px] text-inherit">{number}</p>
        <h3 className="mt-5 font-display text-[30px] font-extrabold leading-[1.05]">{headline}</h3>
      </div>
      <p className="mt-8 text-[17px] leading-[1.5]">{children}</p>
    </>
  );
}

export function MeetStak() {
  return (
    <section id="meet-stak" className="section-y [&_.label-over]:text-[14px]">
      <div className="content-column">
        <SectionLabel>MEET STAK</SectionLabel>
        <h2 className="display-section mt-4 max-w-[760px]">Built for one thing. People on a GLP-1.</h2>
        <p className="mt-6 max-w-[620px] text-[20px] leading-[1.5]">
          Stak knows the dose you&apos;re on and the week you&apos;re in. It knows which weeks are rough, why
          the food noise fades, and what to order at your sister&apos;s birthday dinner. Talk to it like a
          friend who has read everything and has nowhere else to be.
        </p>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2">
          <MagentaCard>
            <FeatureContent number="01" headline="It answers at 2am.">
              Questions don&apos;t keep office hours. Side effects, what to order, whether the scale sitting
              still means anything. Ask at the hour you&apos;re actually wondering.
            </FeatureContent>
          </MagentaCard>
          <CyanCard>
            <FeatureContent number="02" headline="It remembers.">
              The thing you said in week one. The thing you were embarrassed to say at all. You never
              start the conversation over.
            </FeatureContent>
          </CyanCard>
          <YellowCard>
            <FeatureContent number="03" headline="It texts first.">
              Dose days. Refill days. The flat weeks where most people quietly stop. On those days
              you&apos;re not the one who has to reach out.
            </FeatureContent>
          </YellowCard>
          <DarkCard className="text-ink">
            <FeatureContent number="04" headline="It doesn't lecture.">
              Tell it you ate the whole thing. Tell it you skipped a dose. Go quiet for two weeks and come
              back. Nothing you say gets a lecture, and nothing you don&apos;t say gets held against you.
            </FeatureContent>
          </DarkCard>
        </div>
        <WhiteCard className="mt-5 min-h-0">
          <div>
            <p className="label-over text-[14px]">WHAT STAK ISN&apos;T</p>
            <p className="mt-5 max-w-[880px] text-[17px] leading-[1.5]">
              Your provider. Stak won&apos;t change your dose, diagnose anything, or talk you through a
              symptom that needs a clinician. When something does, it says so, points you to your
              practice, and hands you the timeline so you can tell them exactly when it started.
            </p>
          </div>
        </WhiteCard>
      </div>
    </section>
  );
}
