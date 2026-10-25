import type { DrugContent } from "./types";

/* Facts below: Zepbound Prescribing Information (Rev. 8/2026) and Medication Guide (Rev. 08/2026). */
export const zepbound: DrugContent = {
  slug: "zepbound",
  name: "Zepbound",
  generic: "tirzepatide",
  maker: "Eli Lilly",
  form: "once-weekly injection",

  seo: {
    title: "Zepbound support by text: dose weeks, side effects, missed doses | Jurni GLP",
    description:
      "On Zepbound? Jurni GLP is an AI agent that texts you through the dose ladder, the nausea weeks, missed-dose rules, and refills. Built on the FDA label. Two weeks free.",
  },

  hero: {
    label: "JURNI GLP FOR PEOPLE ON ZEPBOUND",
    headline: "Zepbound quiets the hunger. The weeks still happen.",
    sub: "A shot once a week, a dose ladder that climbs for months, and two or three days after each step that nobody warns you about. Jurni GLP texts you through all of it, and knows the Zepbound label better than most of the internet.",
    convo: [
      { from: "user", text: "went up to 5 today. feel kinda off" },
      {
        from: "jurni",
        text: "That's the most common week for it. Tonight, keep dinner small and plain: eggs and toast, or soup. Water through the evening. I'll check on you tomorrow morning.",
      },
      { from: "user", text: "can i still lift tmrw" },
      {
        from: "jurni",
        text: "Yes, lighter than usual. If your stomach is unsure, walk instead. And if you can't keep fluids down by tomorrow afternoon, that's a call to your prescriber. I'll remind you.",
      },
    ],
  },

  how: {
    heading: "What Zepbound is doing in there.",
    paragraphs: [
      "Zepbound is tirzepatide, a once-weekly injection from Eli Lilly. It works on two gut hormone signals at once, GLP-1 and GIP, which is why people often describe the quiet as deeper than they expected: the noise about food turns down, and meals end sooner because fullness arrives sooner.",
      "It also slows how fast your stomach empties. That is the mechanism behind most of what you'll notice in the first months: the early fullness, the nausea around dose changes, the reason a big dinner the night of a step-up tends to go badly.",
      "The FDA approves Zepbound for long-term weight management in adults with obesity, or with overweight plus a weight-related condition, and for moderate to severe obstructive sleep apnea in adults with obesity. Mounjaro is the same molecule approved for type 2 diabetes.",
    ],
  },

  ladder: {
    heading: "The dose ladder, and where the hard days hide.",
    intro:
      "Zepbound starts low and climbs. Each step is at least four weeks, so reaching the top takes five months or more. Most of the rough patches cluster in the two or three days after a step up.",
    steps: [
      { mg: "2.5", tag: "start" },
      { mg: "5", tag: "maintenance" },
      { mg: "7.5" },
      { mg: "10", tag: "maintenance" },
      { mg: "12.5" },
      { mg: "15", tag: "maintenance" },
    ],
    note: "Milligrams, once a week. 2.5 mg is a starting dose only. Maintenance doses for weight are 5, 10 or 15 mg; for sleep apnea, 10 or 15 mg. At least four weeks on each step before moving up. Maximum 15 mg.",
    whoDecides:
      "Your prescriber chooses the pace and where you stop, based on how you respond and what you tolerate. Jurni GLP never changes your dose or tells you to. What it does is know which week you're in, plan your meals lighter around a step, and check in on the days that tend to be rough.",
  },

  sideEffects: {
    heading: "What people actually feel, and how often.",
    intro:
      "From the Zepbound label's weight trials. Most nausea, vomiting and diarrhea happened while the dose was going up and eased with time.",
    rows: [
      { name: "Nausea", howOften: "about 1 in 4", jurniDoes: "Smaller, plainer dinners the night of a step-up; a morning check-in the next two days." },
      { name: "Diarrhea", howOften: "about 1 in 5", jurniDoes: "Fluids on a schedule, and a flag to your prescriber if it won't settle." },
      { name: "Constipation", howOften: "about 1 in 7", jurniDoes: "Fiber and water nudges before it becomes a problem, not after." },
      { name: "Vomiting", howOften: "about 1 in 10", jurniDoes: "Tells you when it has crossed from 'rough day' into 'call your practice'." },
      { name: "Injection-site reactions", howOften: "about 1 in 14", jurniDoes: "Reminds you to rotate sites each week, two inches from the last spot." },
      { name: "Tiredness", howOften: "about 1 in 17", jurniDoes: "Moves the lift to a walk, and protein back to the front of the plate." },
    ],
    note: "Rates are for the 5 to 15 mg doses versus placebo in the label's pooled weight trials. About 56% of people on Zepbound had some stomach or gut side effect, versus 30% on placebo.",
  },

  doesForYou: {
    heading: "What Jurni GLP does for you on Zepbound.",
    items: [
      {
        title: "Plans around your dose week",
        body: "It knows the date of your next step. The two days around it, your plan gets lighter: smaller meals, protein first, fluids on a timer, nothing ambitious for dinner.",
      },
      {
        title: "Knows the missed-dose rule so you don't have to",
        body: "Forgot Thursday? The label says take it within four days, otherwise skip to the next one. Jurni GLP tells you which side of that line you're on, and tells you to call your prescriber if you've missed more than one.",
      },
      {
        title: "Keeps protein and water from quietly collapsing",
        body: "When hunger goes quiet, so does eating. Jurni GLP tracks protein and fluids from what you text it and photos of your plate, and says something when they drift.",
      },
      {
        title: "Handles refills, travel and the fridge",
        body: "It texts before your refill window. It knows an unopened pen can be out of the fridge for 21 days under 86°F, so it tells you how to pack for a trip instead of making you guess.",
      },
      {
        title: "Tells you when it's a call, not a text",
        body: "Severe stomach pain that won't stop, vomiting you can't get ahead of, a neck lump, a vision change. Jurni GLP knows the label's warning signs and says 'call your prescriber' plainly, every time.",
      },
      {
        title: "Shows up on the boring weeks too",
        body: "Month four is when people drift. The plan keeps arriving at 5:30, the weigh-in reminder still comes, and someone still asks how the week went.",
      },
    ],
  },

  callIf: {
    heading: "When Jurni GLP will tell you to call your prescriber.",
    intro: "These come from the Zepbound Medication Guide. Jurni GLP recognizes them and sends you to a person; it never tries to handle them itself.",
    items: [
      "Severe stomach-area pain that won't go away, with or without vomiting, sometimes spreading to your back. Stop Zepbound and call right away.",
      "Pain in the upper stomach, fever, yellowing of the skin or eyes, or clay-colored stools.",
      "Nausea, vomiting or diarrhea that does not let up. Dehydration is how kidney problems start.",
      "A lump or swelling in the neck, hoarseness that lingers, trouble swallowing, or shortness of breath.",
      "Any change in your vision, if you have type 2 diabetes.",
      "Shakiness, sweating, confusion or a racing heart, especially if you also take insulin or a sulfonylurea.",
      "You are pregnant, think you might be, or are planning to be.",
      "Before any surgery or procedure with anesthesia or sedation. Tell every provider you're on Zepbound.",
    ],
    emergency:
      "Swelling of the face, lips, tongue or throat, trouble breathing, or fainting: stop Zepbound and get emergency help right away.",
  },

  faq: [
    {
      q: "I missed my Zepbound dose. What do I do?",
      a: "The label says: take it as soon as you can, as long as it's within four days (96 hours) of when it was due. If more than four days have passed, skip it and take the next dose on your usual day. Don't double up. If you've missed more than one in a row, call your prescriber about how to restart. Text Jurni GLP the day you missed and it will tell you which rule applies.",
    },
    {
      q: "Can I change my injection day?",
      a: "Yes. The label allows it as long as there are at least three days (72 hours) between the two doses. Tell Jurni GLP the new day and your reminders move with it.",
    },
    {
      q: "Does Zepbound have to be taken with food, or at a certain time?",
      a: "No. Any time of day, with or without a meal. Most people pick a day and time they'll remember, and Jurni GLP holds them to it.",
    },
    {
      q: "Why do I feel worst a couple of days after a dose increase?",
      a: "Each step up slows your stomach a little more than you're used to, and your body takes a few days to adjust. That's why the label's nausea and vomiting numbers are highest during escalation and ease afterward. Jurni GLP plans lighter meals for those days and checks in each morning.",
    },
    {
      q: "Can I drink alcohol on Zepbound?",
      a: "The Zepbound label doesn't set a rule about alcohol. What it does say: Zepbound slows your stomach, and it can lower blood sugar further if you take insulin or a sulfonylurea. Both change how alcohol feels, often sooner and harder, on less. That's a conversation for your prescriber. Jurni GLP will remind you to eat something first and drink water alongside.",
    },
    {
      q: "What's the difference between Zepbound and Mounjaro?",
      a: "Same medicine, tirzepatide, from the same company. Zepbound is approved for weight management and obstructive sleep apnea; Mounjaro is approved for type 2 diabetes. The label says not to take them together or with any other GLP-1 medicine.",
    },
    {
      q: "How do I store it, and can I travel with it?",
      a: "In the fridge at 36 to 46°F, in the carton. An unopened single-dose pen or vial can be out of the fridge for up to 21 days total as long as it stays under 86°F; throw it away after that. The KwikPen and multi-dose vial have a 30-day room-temperature limit. Never freeze it, and don't use it if it has. Jurni GLP will tell you how to pack for a trip when you tell it the dates.",
    },
    {
      q: "I'm on the pill. Does Zepbound affect it?",
      a: "It can. Because Zepbound slows your stomach, birth control pills may be absorbed less well, mostly right after starting and after each dose increase. The label advises switching to a non-pill method, or adding a backup like condoms for four weeks after starting and four weeks after every step up. Confirm the plan with your prescriber; Jurni GLP will remind you of the four-week windows.",
    },
    {
      q: "Can Jurni GLP change my dose or tell me to skip one?",
      a: "No. Dosing is your prescriber's decision, always. Jurni GLP tells you what the label says, plans your week around the dose you're on, and tells you when something is worth a call.",
    },
    {
      q: "Who should not take Zepbound?",
      a: "The label says people with a personal or family history of medullary thyroid carcinoma, or with MEN 2, must not use it, and neither should anyone who has had a serious allergic reaction to tirzepatide. It isn't recommended with other GLP-1 medicines or for people with severe gastroparesis. That screening is your prescriber's job; Jurni GLP assumes it has happened.",
    },
    {
      q: "Does Jurni GLP work with the vial, the KwikPen, and the single-dose pen?",
      a: "Yes. Tell it which one you have and it uses the right instructions: the KwikPen primes before every injection and needs a new needle each time; the single-dose pen doesn't need to warm up; the vial needs a syringe that measures 0.5 mL.",
    },
  ],

  sources: [
    { label: "Zepbound Prescribing Information (Eli Lilly, revised August 2026)", href: "https://pi.lilly.com/us/zepbound-uspi.pdf" },
    { label: "Zepbound Medication Guide (revised August 2026)", href: "https://pi.lilly.com/us/zepbound-us-mg.pdf" },
  ],
  labelDate: "August 2026",
};
