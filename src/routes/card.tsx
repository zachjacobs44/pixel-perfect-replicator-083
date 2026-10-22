import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";
import { useEffect, useState, type ReactNode } from "react";

import { STAK_PHONE, STAK_PHONE_DISPLAY } from "@/components/jurni/StakCTA";
import { StakAvatar, Wordmark } from "@/components/jurni/Wordmark";
import { SectionLabel } from "@/components/jurni/SectionPlaceholder";
import { usePracticeName } from "@/lib/use-practice-name";
import { SITE_URL } from "@/lib/site";

const TITLE = "Practice kit | Jurni GLP";
const DESC = "Printable cards, a front-desk flyer, and ready-to-send messages for practices introducing Jurni GLP to their GLP-1 patients.";

export const Route = createFileRoute("/card")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/card` }],
  }),
  component: KitPage,
});

type Track = "aesthetic" | "clinical";
type PrintMode = "card" | "flyer" | null;

const NAME_KEY = "jurni.kit.practice";
const TRACK_KEY = "jurni.practices.track";
const SMS_LINK = `sms:${STAK_PHONE}`;

function priceLine(track: Track, practice: string) {
  return track === "clinical" ? `Free for patients of ${practice || "our practice"}.` : "Two weeks free, then $29.99 a month.";
}

/* ---------- printable pieces ---------- */

function CardFront({ practice, track }: { practice: string; track: Track }) {
  return (
    <div className="kit-card print-theme flex h-[2in] w-[3.5in] flex-col justify-between border border-hairline bg-white p-[0.17in] text-ink">
      <Wordmark tone="ink" className="h-[0.17in] self-start" />
      <div>
        <p className="font-display text-[15px] font-extrabold leading-[1.05]">On a GLP-1? Text this number.</p>
        <p className="font-display mt-[0.05in] text-[23px] font-extrabold leading-none tracking-tight">{STAK_PHONE_DISPLAY}</p>
      </div>
      <div className="flex items-end justify-between gap-2">
        <p className="text-[9.5px] leading-[1.25]">
          <span className="font-bold">{practice || "Your practice"}</span>
          <br />
          GLP-1 support line · {priceLine(track, practice).replace(/\.$/, "")}
        </p>
      </div>
    </div>
  );
}

function CardBack({ practice }: { practice: string }) {
  return (
    <div className="kit-card print-theme flex h-[2in] w-[3.5in] items-center justify-between gap-[0.15in] border border-hairline bg-white p-[0.17in] text-ink">
      <div className="flex min-w-0 flex-1 flex-col gap-[0.06in]">
        <StakAvatar size={22} />
        <p className="font-display text-[12.5px] font-extrabold leading-[1.1]">Jurni GLP has {practice ? `${practice}'s` : "our"} plan for you.</p>
        <ul className="space-y-[0.02in] text-[9.5px] leading-[1.3]">
          <li>Answers your questions, any hour.</li>
          <li>Reminds you on dose and refill days.</li>
          <li>Tells you when to call us.</li>
        </ul>
        <p className="text-[8.5px] font-semibold uppercase tracking-[.08em]">jurniglp.com · No app needed</p>
      </div>
      <QRCodeSVG value={SMS_LINK} size={104} bgColor="#ffffff" fgColor="#0B1417" level="M" />
    </div>
  );
}

function Flyer({ practice, track }: { practice: string; track: Track }) {
  const who = practice || "Our practice";
  return (
    <div className="kit-flyer print-theme flex h-[11in] w-[8.5in] flex-col border border-hairline bg-white p-[0.75in] text-ink">
      <div className="flex items-center justify-between">
        <Wordmark tone="ink" className="h-[0.32in]" />
        <p className="text-[12px] font-semibold uppercase tracking-[.1em]">{who} · GLP-1 support</p>
      </div>
      <h1 className="font-display mt-[0.8in] text-[44px] font-extrabold leading-[1.0]">
        Starting a GLP-1?
        <br />
        You don&apos;t have to figure it out alone.
      </h1>
      <p className="mt-[0.35in] max-w-[6in] text-[16px] leading-[1.5]">
        {who} gives every patient on a GLP-1 a support line you can text or call from your own phone, any hour. It has our plan for you. It answers the questions you&apos;d otherwise wait until your next visit to ask, reminds you on dose and refill days, and tells you when to call us.
      </p>
      <div className="mt-[0.5in] flex items-center gap-[0.5in] rounded-[14px] border border-hairline p-[0.4in]">
        <div className="flex-1">
          <p className="text-[12px] font-semibold uppercase tracking-[.1em]">Text to start</p>
          <p className="font-display mt-1 text-[40px] font-extrabold leading-none tracking-tight">{STAK_PHONE_DISPLAY}</p>
          <p className="mt-3 text-[15px] leading-[1.5]">{priceLine(track, practice)} No app, no account. Your plan is ready before you leave the parking lot.</p>
        </div>
        <QRCodeSVG value={SMS_LINK} size={140} bgColor="#ffffff" fgColor="#0B1417" level="M" />
      </div>
      <div className="mt-[0.5in] grid grid-cols-3 gap-[0.3in]">
        {[
          ["1", "Text the number", "Or scan the code. It greets you by name."],
          ["2", "Answer a few questions", "Your medication, your goals, what you like to eat."],
          ["3", "Your plan is ready", "Meals, movement, dose days, and someone to ask at 9 p.m."],
        ].map(([n, t, b]) => (
          <div key={n}>
            <p className="font-display text-[26px] font-extrabold leading-none">{n}</p>
            <p className="mt-2 text-[14px] font-bold">{t}</p>
            <p className="mt-1 text-[12.5px] leading-[1.4]">{b}</p>
          </div>
        ))}
      </div>
      <p className="mt-auto text-[10px] leading-[1.45]" style={{ color: "rgba(11,20,23,.65)" }}>
        Jurni GLP provides behavioral support and does not provide medical advice. It does not diagnose, prescribe, or change a dose. Decisions about your treatment stay with your provider. Message frequency varies. Message and data rates may apply. Reply STOP to end, HELP for help. Jurni GLP is a service of Jurni Health, Inc. and is not associated with Novo Nordisk or Eli Lilly.
      </p>
    </div>
  );
}

/* ---------- screen pieces ---------- */

function CopyBlock({ title, text, hint }: { title: string; text: string; hint?: string }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  }
  return (
    <div className="rounded-[var(--radius-card)] border border-hairline bg-white p-5 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-[20px] font-extrabold leading-[1.1]">{title}</h3>
          {hint ? <p className="mt-1 text-[14px] text-muted">{hint}</p> : null}
        </div>
        <button type="button" onClick={copy} className="press-spring shrink-0 rounded-full border-2 border-ink px-4 py-2 text-[14px] font-semibold">
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="mt-4 whitespace-pre-wrap font-body text-[15px] leading-[1.55] text-ink">{text}</pre>
    </div>
  );
}

function Step({ n, t, b }: { n: string; t: string; b: ReactNode }) {
  return (
    <div className="border-t pt-4" style={{ borderColor: "var(--hairline)" }}>
      <p className="font-display text-[28px] font-extrabold leading-none text-[var(--stak-amber-deep)]">{n}</p>
      <p className="mt-2 text-[18px] font-bold">{t}</p>
      <p className="mt-1 text-[15px] leading-[1.5] text-muted">{b}</p>
    </div>
  );
}

function KitPage() {
  const remembered = usePracticeName("", undefined, false);
  const [practice, setPractice] = useState("");
  const [track, setTrack] = useState<Track>("aesthetic");
  const [printMode, setPrintMode] = useState<PrintMode>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(NAME_KEY);
      if (saved) setPractice(saved);
      else if (remembered) setPractice(remembered);
      const t = localStorage.getItem(TRACK_KEY);
      if (t === "aesthetic" || t === "clinical") setTrack(t);
    } catch {
      /* no storage */
    }
  }, [remembered]);

  function updateName(v: string) {
    setPractice(v);
    try {
      localStorage.setItem(NAME_KEY, v);
    } catch {
      /* no storage */
    }
  }

  function print(mode: Exclude<PrintMode, null>) {
    setPrintMode(mode);
    setTimeout(() => {
      window.print();
      setPrintMode(null);
    }, 80);
  }

  const who = practice || "[Practice name]";
  const price = priceLine(track, practice);

  const sentence = `Before you go, text this number: ${STAK_PHONE_DISPLAY}. It's our GLP-1 support line. It has our plan for you, it answers questions any hour, and it'll tell you when to call us. It'll be ready by the time you're in the car.`;

  const sms = `Hi, it's ${who}. If you're on a GLP-1 (Wegovy, Zepbound, Mounjaro, Ozempic, or the pill), we now give every patient a support line you can text any hour: Jurni GLP. It has our plan for you, reminds you on dose days, and tells you when to call us. ${price} Text ${STAK_PHONE_DISPLAY} to start.`;

  const email = `Subject: A support line for your GLP-1, from ${who}

Hi,

If you're taking a GLP-1 medication (Wegovy, Zepbound, Mounjaro, Ozempic, or the new pill), we want you to have more than a prescription and a pamphlet.

Every GLP-1 patient at ${who} now has access to Jurni GLP: a support line you text or call from your own phone, any hour. It has our plan for you. It answers the questions you'd otherwise wait for your next visit to ask, reminds you on dose and refill days, builds your meals and movement around what you actually eat, and tells you when something needs a call to our office.

To start, text ${STAK_PHONE_DISPLAY}. ${price} No app, no account. Your plan is ready in about a minute.

It doesn't replace us. It doesn't change your dose or make medical decisions. It keeps you company between visits, which is where most of this happens.

${who}`;

  return (
    <div className="min-h-screen bg-paper" data-print={printMode ?? undefined}>
      {printMode ? (
        <style>{printMode === "card" ? "@page { size: 3.5in 2in; margin: 0; }" : "@page { size: letter; margin: 0; }"}</style>
      ) : null}

      {/* Print surfaces. Hidden on screen; shown by print mode. */}
      <div className="kit-print-only kit-print-card">
        <CardFront practice={practice} track={track} />
        <CardBack practice={practice} />
      </div>
      <div className="kit-print-only kit-print-flyer">
        <Flyer practice={practice} track={track} />
      </div>

      <section className="no-print section-y">
        <div className="content-column max-w-[920px]">
          <SectionLabel>PRACTICE KIT</SectionLabel>
          <h1 className="display-section mt-4 max-w-[820px]">Everything you need to hand Jurni GLP to a patient.</h1>
          <p className="mt-5 max-w-[680px] text-[18px] leading-[1.5] text-muted">
            A wallet card for checkout, a flyer for the exam room or front desk, the sentence to say, and messages you can send to the GLP-1 patients you already have. Type your practice name once and it appears on all of it.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
            <label className="block">
              <span className="label-over">Your practice name, as patients know it</span>
              <input
                value={practice}
                onChange={(e) => updateName(e.target.value)}
                placeholder="e.g. Westside Dermatology"
                className="mt-2 w-full rounded-[var(--radius-chip)] border bg-white px-4 py-3 text-[17px] outline-none focus:border-ink"
                style={{ borderColor: "var(--hairline)" }}
              />
            </label>
            <div>
              <span className="label-over">Your patients</span>
              <div className="mt-2 inline-flex rounded-full border bg-white p-1 text-[14px] font-semibold" style={{ borderColor: "var(--hairline)" }}>
                {(["aesthetic", "clinical"] as Track[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTrack(t)}
                    className="rounded-full px-4 py-2"
                    style={track === t ? { background: "#0B1417", color: "#F3EEE8" } : { color: "var(--text-muted)" }}
                  >
                    {t === "aesthetic" ? "Pay after two weeks" : "Get it free"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-16">
            <SectionLabel>THE CARD</SectionLabel>
            <h2 className="display-section mt-4 max-w-[700px]">Hand it over with the prescription.</h2>
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.5] text-muted">
              Standard business-card size, 3.5 by 2 inches, front and back. Prints on card stock from any office printer, or send the PDF to the shop that does your cards.
            </p>
            <div className="mt-8 flex flex-wrap items-start gap-6">
              <div className="shadow-[var(--shadow-phone)]"><CardFront practice={practice} track={track} /></div>
              <div className="shadow-[var(--shadow-phone)]"><CardBack practice={practice} /></div>
            </div>
            <button type="button" onClick={() => print("card")} className="press-spring mt-6 inline-flex h-[56px] items-center justify-center rounded-[var(--radius-chip)] px-7 text-[17px] font-semibold text-primary-foreground" style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}>
              Print the card, or save as PDF
            </button>
          </div>

          {/* Flyer */}
          <div className="mt-16">
            <SectionLabel>THE FLYER</SectionLabel>
            <h2 className="display-section mt-4 max-w-[700px]">For the exam room, the front desk, or the checkout counter.</h2>
            <p className="mt-4 max-w-[620px] text-[17px] leading-[1.5] text-muted">Letter size. Frame it, tape it, or leave a stack. The QR code opens a text to Jurni GLP.</p>
            <div className="kit-flyer-frame mt-8 overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-white shadow-[var(--shadow-phone)]">
              <div className="kit-flyer-preview">
                <Flyer practice={practice} track={track} />
              </div>
            </div>
            <button type="button" onClick={() => print("flyer")} className="press-spring mt-6 inline-flex h-[56px] items-center justify-center rounded-[var(--radius-chip)] px-7 text-[17px] font-semibold text-primary-foreground" style={{ background: "var(--grad-button)", boxShadow: "var(--shadow-button)" }}>
              Print the flyer, or save as PDF
            </button>
          </div>

          {/* Scripts */}
          <div className="mt-16">
            <SectionLabel>WHAT TO SAY AND SEND</SectionLabel>
            <h2 className="display-section mt-4 max-w-[760px]">One sentence in the room. One message to the patients you already have.</h2>
            <div className="mt-8 grid gap-4">
              <CopyBlock title="The sentence" hint="Said at the end of the GLP-1 conversation, by whoever is in the room." text={sentence} />
              <CopyBlock title="Text message to your existing GLP-1 patients" hint="Send from your practice's own messaging system. Under 320 characters." text={sms} />
              <CopyBlock title="Email to your existing GLP-1 patients" hint="Subject line included. Edit freely." text={email} />
            </div>
          </div>

          {/* How to use */}
          <div className="mt-16">
            <SectionLabel>HOW TO USE THIS</SectionLabel>
            <div className="mt-6 grid gap-6 md:grid-cols-4">
              <Step n="1" t="Print the cards" b="Fifty to start. Keep them where prescriptions are handed over." />
              <Step n="2" t="Put up the flyer" b="Exam rooms and checkout. Patients scan it while they wait." />
              <Step n="3" t="Send the message" b="One text or email to every patient on a GLP-1, whoever prescribed it." />
              <Step n="4" t="Say the sentence" b={<>At every GLP-1 prescription from now on. That&apos;s the whole workflow.</>} />
            </div>
            <p className="mt-10 text-[15px] leading-[1.5] text-muted">
              Need something else, like a version in Spanish, your logo on the card, or a stack of printed cards mailed to you? Email <a className="underline" href="mailto:practices@jurniglp.com">practices@jurniglp.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
