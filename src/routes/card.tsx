import { createFileRoute } from "@tanstack/react-router";
import { QRCodeSVG } from "qrcode.react";

import { StakAvatar, Wordmark } from "@/components/jurni/Wordmark";
import { usePracticeName } from "@/lib/use-practice-name";

const TITLE = "Referral card | Jurni GLP";
const DESC = "Printable Jurni GLP referral card for practices.";

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
    links: [{ rel: "canonical", href: "https://jurniglp.com/card" }],
  }),
  component: CardPage,
});

const face =
  "card-face relative flex h-[2in] w-[3.5in] flex-col bg-paper p-[0.18in] text-ink border border-hairline";

function CardPage() {
  const practice = usePracticeName("Your practice", undefined, false);
  return (
    <div className="min-h-screen bg-paper">
      <div className="card-sheet flex flex-col items-center gap-8 px-4 py-10">
        <button
          type="button"
          onClick={() => window.print()}
          className="no-print press-spring inline-flex h-[60px] items-center justify-center rounded-full border-2 border-ink px-8 font-display text-[20px] font-bold"
        >
          Print or save as PDF
        </button>

        <div className={face}>
          <Wordmark className="h-4" />
          <div className="flex flex-1 items-center justify-center">
            <p className="text-center font-display text-[22px] font-extrabold leading-[0.95] tracking-[-0.03em]">
              Your provider gave you a number.
            </p>
          </div>
          <p className="text-[14px] font-bold">{practice}</p>
        </div>

        <div className={`${face} flex-row items-center justify-between gap-3`}>
          <div className="flex flex-col gap-1.5">
            <StakAvatar size={28} />
            <p className="text-[16px] font-bold leading-[1.2]">Text or call Stak at (562) 554-4571</p>
            <p className="text-[14px]">Two weeks free. No app.</p>
            <p className="label-over text-[14px] text-ink">jurniglp.com</p>
          </div>
          <QRCodeSVG value="sms:+15625544571" size={92} bgColor="#FAF7F1" fgColor="#141414" level="M" />
        </div>
      </div>
    </div>
  );
}
