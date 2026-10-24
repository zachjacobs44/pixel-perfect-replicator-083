import { createFileRoute } from "@tanstack/react-router";
import { LegalDoc, type Section } from "@/components/jurni/LegalDoc";
import { SITE_URL } from "@/lib/site";

const TITLE = "Privacy Policy | Jurni GLP";
const DESCRIPTION =
  "How Jurni Health, Inc. (Jurni GLP) collects, uses, shares, and protects your information, including health information, text messages, calls, and SMS consent.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/privacy` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/privacy` }],
  }),
  component: Privacy,
});

const LAST_UPDATED = "October 23, 2026";

/* Policy text, verbatim from counsel. Each section is a heading plus paragraphs ("p"), sub-headed paragraphs ("lead" + "p"), or bullet lists ("ul"). */

const INTRO: string[] = [
  "Jurni Health, Inc., doing business as Jurni GLP (“Jurni GLP,” “we,” “us,” or “our”), provides behavioral support to adults taking GLP-1 medications through text messages, phone calls, and a personal web page. Because of what we do, we handle information about your health. This policy explains what we collect, how we use it, who we share it with, and the choices you have. It applies to jurniglp.com and to every way you interact with the Jurni GLP assistant (the “assistant”).",
];

const SHORT_VERSION =
  "We collect what you tell the assistant and what you send it, including health information. We use it to run and improve the Service. We do not sell it. We do not share it with advertisers. We do not send it to your provider unless you choose to. We use trusted vendors to run the Service, and they are bound to protect it.";

const SECTIONS: Section[] = [
  {
    n: "1",
    h: "Information we collect",
    blocks: [
      { lead: "Information you give us." },
      {
        ul: [
          "Contact details: your mobile phone number, and your name and email address if you provide them.",
          "Health and wellness information you share with the assistant: the GLP-1 medication you take, your dose and dose changes, injection dates, side effects, weight, measurements, food and drink, exercise, sleep, mood, goals, and anything else you tell it about your health.",
          "Content you send: text messages, photos (for example, of meals, menus, or progress photos), links, and documents.",
          "Voice: recordings and transcripts of your calls with the assistant.",
          "Your provider: the name of the practice or provider that referred you, if you tell us.",
          "Payment information: handled by our payment processor. We receive your subscription status and the last four digits of your card, never your full card number.",
          "Support messages: anything you send to contact@jurniglp.com.",
        ],
      },
      { lead: "Information we create.", p: "The assistant’s notes, summaries, plans, and the personal web page it builds from your conversations." },
      {
        lead: "Information collected automatically.",
        p: "When you use the website or your personal page: IP address, device and browser type, pages viewed, time spent, and referring link. We use cookies and similar technologies for this (see Section 7). Message delivery data from our telephony provider, such as whether a text was delivered.",
      },
      { p: "We do not collect precise geolocation, and we do not access your contacts, camera, or health apps unless you send us something or connect them yourself." },
    ],
  },
  {
    n: "2",
    h: "How we use your information",
    blocks: [
      {
        ul: [
          "To provide the Service: respond to you, remember your history, build and update your plans and personal page, send reminders and check-ins, and personalize the assistant to you.",
          "To run your account: manage your trial, subscription, billing, and support.",
          "To improve the Service: understand how people use the assistant, fix problems, train and evaluate our own systems, and develop new features. Where we can, we do this with de-identified or aggregated data.",
          "For safety: detect misuse, protect users, and respond to situations that may involve risk to you or others.",
          "For research: study whether the Service helps people, using de-identified or aggregated data. We only use identifiable data for research with your separate written consent.",
          "To communicate with you about the Service, and, if you have consented, to send promotional messages.",
          "To comply with law and enforce our Terms.",
        ],
      },
      {
        lead: "Automated decisions.",
        p: "The assistant’s responses are generated automatically by software, including third-party artificial intelligence models. The assistant does not make medical decisions, and no automated decision we make has a legal or similarly significant effect on you.",
      },
    ],
  },
  {
    n: "3",
    h: "Text messages and calls",
    blocks: [
      {
        lead: "Text messages.",
        p: "By providing your mobile number and opting in, you consent to receive automated and non-automated text messages from Jurni GLP, including conversational replies, reminders, check-ins, account and billing notices, support messages, and, where you have consented, promotional messages. Message frequency varies. Message and data rates may apply. Reply STOP at any time to opt out; reply HELP for help or contact contact@jurniglp.com. Consent to receive text messages is not a condition of purchasing any goods or services.",
      },
      {
        p: "No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties, except to service providers acting on our behalf to deliver the messages and support the Service.",
      },
      {
        lead: "Calls.",
        p: "Calls with the assistant may be recorded and are transcribed into text so the assistant can respond and remember what you discussed. You are told this at the start of each call. Recordings and transcripts are kept with your conversation history and used to provide and improve the Service.",
      },
    ],
  },
  {
    n: "4",
    h: "How we share information",
    blocks: [
      { p: "We do not sell your personal information, and we do not share it for targeted advertising. We share information only in these cases:" },
      {
        ul: [
          "Service providers. Companies that help us run the Service and that process your information under contract and only on our instructions, including cloud hosting and databases, artificial intelligence model providers that generate the assistant’s responses, telephony providers that deliver texts and calls, our payment processor, analytics and monitoring tools, and customer support tools. We choose providers with strong security practices and require them to protect your information. Our AI model providers are contractually prohibited from using your conversations to train their models.",
          "Your provider, only when you choose. If you ask the assistant to prepare a progress summary and you send it to your provider, or you grant your provider access through a feature we offer, that is your choice and your action. We do not otherwise send your information to any practice or provider.",
          "Partner practice offers. If you tell us you are a patient of a partner practice, we may tell that practice that a patient has reached a milestone so it can send you an offer, only if you have agreed to receive those offers, and only with the minimum information needed. We do not share your health details with the practice for this purpose.",
          "Legal reasons. When required by law, subpoena, or court order; to protect the rights, safety, or property of Jurni GLP, our users, or others; or to respond to an emergency involving risk of serious harm.",
          "Business transfers. If Jurni Health, Inc. is involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction. We will notify you before your information becomes subject to a different privacy policy.",
          "With your consent. Any other sharing we ask you about and you agree to.",
        ],
      },
      { p: "We may share de-identified or aggregated information, which cannot reasonably be used to identify you, for any purpose, including research and publication." },
    ],
  },
  {
    n: "5",
    h: "Health information and HIPAA",
    blocks: [
      {
        p: "Jurni GLP works for you, not for your provider. Your provider does not send us your medical records, and we do not act as your provider’s vendor. For that reason, your information is generally not protected by the Health Insurance Portability and Accountability Act (HIPAA) when you use Jurni GLP directly. It is protected by this Privacy Policy, by our contracts with service providers, by state consumer health privacy laws where they apply, and by the Federal Trade Commission’s rules on health data. If we ever enter an agreement with your provider that makes us a HIPAA business associate for your information, we will tell you, and HIPAA’s protections will apply to that information in addition to this policy.",
      },
    ],
  },
  {
    n: "6",
    h: "Security",
    blocks: [
      {
        p: "We use administrative, technical, and physical safeguards designed to protect your information, including encryption in transit and at rest, access controls, and logging. No system is perfectly secure, and text messages and phone calls travel over carrier networks we do not control. If we learn of a breach affecting your information, we will notify you as required by law.",
      },
    ],
  },
  {
    n: "7",
    h: "Cookies and analytics",
    blocks: [
      {
        p: "Our website and your personal page use cookies and similar technologies to keep you signed in, remember your settings, and understand how the site is used. We use a privacy-focused analytics tool for this. We do not use advertising cookies or tracking pixels from social networks or ad platforms, and we do not share website data with advertisers. You can disable cookies in your browser; some features may stop working. We honor Global Privacy Control signals where required by law.",
      },
    ],
  },
  {
    n: "8",
    h: "How long we keep information",
    blocks: [
      {
        p: "We keep your information for as long as you have an account, so the assistant can remember your history. Call recordings and transcripts are kept with your conversation history. After you close your account, or after 24 months of inactivity, we delete or de-identify your personal information within 90 days, except where we need to keep it to comply with law, resolve disputes, enforce our agreements, or maintain security. Backups are purged on a rolling schedule. Information you asked us to send to your provider stays with your provider under their own policies.",
      },
    ],
  },
  {
    n: "9",
    h: "Your rights and choices",
    blocks: [
      { p: "You can:" },
      {
        ul: [
          "Access the information we hold about you, including your conversation history and personal page.",
          "Correct inaccurate information by telling the assistant or emailing us.",
          "Delete your account and information by texting DELETE to Jurni GLP or emailing contact@jurniglp.com. We will confirm your identity and complete deletion within 45 days.",
          "Export your data in a portable format on request.",
          "Opt out of text messages by replying STOP, of promotional messages by replying STOP to any promotional message or emailing us, and of call recording and transcription by using text instead of calls.",
          "Withdraw consent at any time; it does not affect processing that already happened.",
        ],
      },
      {
        p: "To exercise these rights, text Jurni GLP or email contact@jurniglp.com. We will not discriminate against you for exercising them. You may use an authorized agent to make a request; we will verify the agent’s authority.",
      },
    ],
  },
  {
    n: "10",
    h: "California residents",
    blocks: [
      {
        p: "If you live in California, the California Consumer Privacy Act (CCPA) gives you additional rights. In the last 12 months we have collected the categories of personal information listed in Section 1, including identifiers, commercial information, internet activity, audio recordings and call transcripts, and health information (which is sensitive personal information under California law). We use these categories for the purposes in Section 2 and share them with the categories of recipients in Section 4. We do not sell personal information and do not share it for cross-context behavioral advertising, and we have not done so in the past 12 months. We use your sensitive personal information only to provide the Service you asked for, and you may direct us to limit its use. You have the right to know, delete, correct, and port your information, and the right not to be discriminated against. California’s Confidentiality of Medical Information Act also applies to certain health information we hold. To make a request, email contact@jurniglp.com with “California request” in the subject line, or text Jurni GLP. We may ask for information to verify your identity.",
      },
    ],
  },
  {
    n: "11",
    h: "Other U.S. state privacy laws",
    blocks: [
      {
        p: "Residents of states with consumer health data or comprehensive privacy laws (including Washington, Nevada, Connecticut, Colorado, Virginia, Texas, Oregon, and others) have similar rights to access, correct, delete, and port their information and to opt out of certain processing. Washington’s My Health My Data Act and similar laws give you additional rights over consumer health data, including the right to a list of third parties with whom we have shared it. We honor these rights for all users regardless of where they live. If we deny a request, you may appeal by replying to our decision; we will respond within 45 days.",
      },
    ],
  },
  {
    n: "12",
    h: "Children",
    blocks: [
      {
        p: "The Service is for adults 18 and older. We do not knowingly collect information from anyone under 18. If you believe a minor has used the Service, email contact@jurniglp.com and we will delete the information.",
      },
    ],
  },
  {
    n: "13",
    h: "Where information is processed",
    blocks: [{ p: "We are based in the United States and process information there. The Service is intended for people in the United States." }],
  },
  {
    n: "14",
    h: "Changes to this policy",
    blocks: [
      {
        p: "We may update this policy. If we make a material change, we will notify you by text or email before it takes effect and update the date above. Continued use after that date means you accept the updated policy.",
      },
    ],
  },
  {
    n: "15",
    h: "Contact us",
    blocks: [{ lead: "Jurni Health, Inc. (d/b/a Jurni GLP)", p: "Email: contact@jurniglp.com" }],
  },
];

function Privacy() {
  return (
    <LegalDoc
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={INTRO}
      summary={{ label: "The short version", text: SHORT_VERSION }}
      sections={SECTIONS}
    />
  );
}
