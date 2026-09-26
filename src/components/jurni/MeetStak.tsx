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
        <h2 className="display-section mt-4 max-w-[760px]">Stak is an AI. It will tell you that itself.</h2>
        <p className="mt-6 max-w-[620px] text-[20px] leading-[1.5]">
          It was built for one thing: people on a GLP-1. It knows the dose schedule you&apos;re on, which
          weeks tend to be rough, why the food noise goes quiet, and what to do with the menu at your
          sister&apos;s birthday dinner. Talk to it the way you&apos;d talk to a friend who happens to have read
          everything. Full sentences, half sentences, a photo of your plate, a phone call on the drive
          home.
        </p>

        <div className="mt-12 grid auto-rows-fr gap-5 md:grid-cols-2">
          <MagentaCard>
            <FeatureContent number="01" headline="It answers at 2am.">
              The questions don&apos;t keep office hours. Side effects, what to order, whether the scale
              sitting still this week means anything. Ask.
            </FeatureContent>
          </MagentaCard>
          <CyanCard>
            <FeatureContent number="02" headline="You never have to explain yourself twice.">
              Week one, week twelve, the thing you were embarrassed to say out loud. It remembers. You
              never start the conversation over.
            </FeatureContent>
          </CyanCard>
          <YellowCard>
            <FeatureContent number="03" headline="It reaches out first.">
              Dose days, refill days, and the flat stretches where most people quit. On those days you
              don&apos;t have to be the one who texts. Stak does.
            </FeatureContent>
          </YellowCard>
          <DarkCard>
            <FeatureContent number="04" headline="It won't make you feel bad.">
              Tell it you ate the whole thing. Tell it you skipped your shot. Go quiet for a week and
              come back. Nothing you say gets a lecture, and nothing you don&apos;t say gets held against
              you.
            </FeatureContent>
          </DarkCard>
          <WhiteCard className="min-h-0 md:col-span-2">
            <div>
              <p className="label-over text-[14px]">WHAT STAK ISN&apos;T</p>
              <p className="mt-5 max-w-[880px] text-[17px] leading-[1.5]">
                Your doctor. It won&apos;t change your dose, diagnose anything, or tell you what to do about
                a symptom that needs a clinician. When something does, it says so and points you back to
                your practice, with the timing already noted so you can tell them exactly when it started.
              </p>
            </div>
          </WhiteCard>
        </div>
      </div>
    </section>
  );
}