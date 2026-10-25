import type { DrugContent } from "./types";

/* Facts below: Mounjaro Prescribing Information (Rev. 8/2026) and Medication Guide (Rev. 4/2026). */
export const mounjaro: DrugContent = {
  slug: "mounjaro",
  name: "Mounjaro",
  generic: "tirzepatide",
  maker: "Eli Lilly",
  form: "once-weekly injection",

  seo: {
    title: "Mounjaro support by text: dose weeks, side effects, missed doses | Jurni GLP",
    description:
      "On Mounjaro? Jurni GLP is an AI agent that texts you through the dose ladder, the nausea weeks, missed-dose rules, low blood sugar signs and refills. Built on the FDA label. Two weeks free.",
  },

  hero: {
    label: "JURNI GLP FOR PEOPLE ON MOUNJARO",
    headline: "On Mounjaro? Here is what the next few months actually look like.",
    sub: "A shot once a week, a dose ladder your prescriber climbs with you, and a stomach that needs a different dinner on step-up nights. Jurni GLP texts you through it, tracks what you eat and how you feel, and knows the Mounjaro label cold.",
    convo: [
      { from: "user", text: "started 7.5 sunday. appetite is just gone" },
      {
        from: "jurni",
        text: "That's the medicine working, and it's also the week people under-eat without noticing. Today's plan is three small meals with protein first, even if you're not hungry. I'll check what you actually managed tonight.",
      },
      { from: "user", text: "felt shaky and sweaty around 4 yesterday" },
      {
        from: "jurni",
        text: "Since you're on glipizide too, that's worth telling your prescriber about today, not next visit. The label flags lows with that combination. Eat something now, and text me what they say.",
      },
    ],
  },

  how: {
    heading: "What Mounjaro is doing in there.",
    paragraphs: [
      "Mounjaro is tirzepatide, a once-weekly injection from Eli Lilly. It acts on two gut hormone signals at once, GLP-1 and GIP, which helps the body release insulin when blood sugar is high, turns down the noise about food, and ends meals sooner because fullness arrives sooner.",
      "It also slows how fast your stomach empties. That is the mechanism behind most of what you'll notice in the first months: early fullness, nausea in the days after a dose step, and why a large dinner on shot night tends to go badly.",
      "The FDA approves Mounjaro, with diet and exercise, to improve blood sugar in adults and children 10 and older with type 2 diabetes, and to lower the risk of heart attack and stroke in adults with type 2 diabetes at high risk. Zepbound is the same molecule approved for weight management and sleep apnea. Jurni GLP supports people on either; it is not involved in why you were prescribed it.",
    ],
  },

  ladder: {
    heading: "The dose ladder, and where the hard days hide.",
    intro:
      "Mounjaro starts at 2.5 mg and can climb in 2.5 mg steps, with at least four weeks on each. Unlike Zepbound, the label doesn't name maintenance doses: your prescriber stops wherever your blood sugar and your stomach agree. The rough patches cluster in the two or three days after a step.",
    steps: [
      { mg: "2.5", tag: "start" },
      { mg: "5" },
      { mg: "7.5" },
      { mg: "10" },
      { mg: "12.5" },
      { mg: "15" },
    ],
    note: "Milligrams, once a week. Start at 2.5 mg; increase in 2.5 mg steps after at least four weeks on the current dose. Maximum 15 mg a week in adults, 10 mg in children 10 and older. Any step can be where you stay.",
    whoDecides:
      "Your prescriber decides when to step up and where to stop, based on your blood sugar and what you tolerate. Jurni GLP never changes your dose or tells you to. What it does is know which week you're in, plan lighter meals around a step, watch for the signs the label says to report, and check in on the days that tend to be rough.",
  },

  sideEffects: {
    heading: "What people actually feel, and how often.",
    intro:
      "From the Mounjaro label's adult trials. The label lists nausea, diarrhea, decreased appetite, vomiting, constipation, indigestion and stomach pain as the most common effects; the two it quantifies at 15 mg are below.",
    rows: [
      { name: "Nausea", howOften: "about 1 in 6 at 15 mg", jurniDoes: "Smaller, plainer dinners the night of a step-up; a morning check-in the next two days." },
      { name: "Diarrhea", howOften: "about 1 in 6 at 15 mg", jurniDoes: "Fluids on a schedule, and a flag to your prescriber if it won't settle." },
      { name: "Decreased appetite", howOften: "common", jurniDoes: "Makes sure 'not hungry' doesn't turn into 'didn't eat': protein first, three small meals." },
      { name: "Vomiting", howOften: "common", jurniDoes: "Tells you when it has crossed from 'rough day' into 'call your practice'." },
      { name: "Constipation", howOften: "common", jurniDoes: "Fiber and water nudges before it becomes a problem, not after." },
      { name: "Indigestion and stomach pain", howOften: "common", jurniDoes: "Knows the difference between ordinary and the kind the label says to call about." },
    ],
    note: "At 15 mg in the adult placebo-controlled trials: nausea 18% versus 4% on placebo, diarrhea 17% versus 9%. 'Common' means the label lists it at 5% or more without a single headline number. Low blood sugar is mainly a risk when Mounjaro is combined with insulin or a sulfonylurea.",
  },

  doesForYou: {
    heading: "What Jurni GLP does for you on Mounjaro.",
    items: [
      {
        title: "Plans around your dose week",
        body: "It knows the date of your next step. The two days around it, your plan gets lighter: smaller meals, protein first, fluids on a timer, nothing ambitious for dinner.",
      },
      {
        title: "Watches for lows if you're on insulin or a sulfonylurea",
        body: "Shaky, sweaty, confused, heart racing: Jurni GLP knows the label's list and knows the combination that raises the risk. It tells you to eat and to tell your prescriber, in that order.",
      },
      {
        title: "Knows the missed-dose rule so you don't have to",
        body: "Forgot your day? The label says take it within four days, otherwise skip to the next one. Jurni GLP tells you which side of that line you're on, and tells you to call your prescriber if you've missed more than one.",
      },
      {
        title: "Keeps protein and water from quietly collapsing",
        body: "When appetite drops, meals get skipped. Jurni GLP tracks protein and fluids from what you text it and photos of your plate, and says something when they drift.",
      },
      {
        title: "Handles refills, travel and the fridge",
        body: "It texts before your refill window. It knows an unopened pen or vial can be out of the fridge for 21 days under 86°F, and the KwikPen for 30 days once started, so a trip is a text, not a search.",
      },
      {
        title: "Tells you when it's a call, not a text",
        body: "Severe stomach pain that won't stop, vomiting you can't get ahead of, a vision change, a neck lump. Jurni GLP knows the label's warning signs and says 'call your prescriber' plainly, every time.",
      },
    ],
  },

  callIf: {
    heading: "When Jurni GLP will tell you to call your prescriber.",
    intro: "These come from the Mounjaro Medication Guide. Jurni GLP recognizes them and sends you to a person; it never tries to handle them itself.",
    items: [
      "Severe stomach-area pain that won't go away, with or without vomiting, sometimes spreading to your back. Stop Mounjaro and call right away.",
      "Pain in the upper stomach, fever, yellowing of the skin or eyes, or clay-colored stools.",
      "Nausea, vomiting or diarrhea that does not let up. Dehydration is how kidney problems start.",
      "Shakiness, sweating, confusion, blurred vision or a fast heartbeat, especially if you also take insulin or a sulfonylurea. Repeated lows mean your other diabetes medicines may need adjusting.",
      "Any change in your vision. Fast improvement in blood sugar can temporarily worsen diabetic eye disease.",
      "A lump or swelling in the neck, hoarseness that lingers, trouble swallowing, or shortness of breath.",
      "You are pregnant, think you might be, or are planning to be.",
      "Before any surgery or procedure with anesthesia or sedation. Tell every provider you're on Mounjaro.",
    ],
    emergency:
      "Swelling of the face, lips, tongue or throat, trouble breathing or swallowing, severe rash, or fainting: stop Mounjaro and get emergency help right away.",
  },

  faq: [
    {
      q: "I missed my Mounjaro dose. What do I do?",
      a: "The label says: take it as soon as you can, as long as it's within four days (96 hours) of when it was due. If more than four days have passed, skip it and take the next dose on your usual day. Don't double up. If you've missed more than one in a row, call your prescriber about how to restart. Text Jurni GLP the day you missed and it tells you which rule applies.",
    },
    {
      q: "Can I change my injection day?",
      a: "Yes. The label allows it as long as there are at least three days (72 hours) between the two doses. Tell Jurni GLP the new day and your reminders move with it.",
    },
    {
      q: "I'm on insulin or a sulfonylurea too. What should I watch for?",
      a: "Low blood sugar. Mounjaro rarely causes it alone, but the risk rises with insulin or sulfonylureas like glipizide, glyburide or glimepiride. The label lists the signs: dizziness, blurred vision, sweating, shakiness, hunger, headache, fast heartbeat, confusion, slurred speech, feeling jittery. Prescribers often lower the other medicine when starting Mounjaro. Report lows to your prescriber; adjusting those doses is their decision.",
    },
    {
      q: "Does Mounjaro have to be taken with food, or at a certain time?",
      a: "No. Any time of day, with or without a meal. Most people pick a day and time they'll remember, and Jurni GLP holds them to it.",
    },
    {
      q: "Why do I feel worst a couple of days after a dose increase?",
      a: "Each step up slows your stomach a little more than you're used to, and your body takes a few days to adjust. Jurni GLP plans lighter meals for those days and checks in each morning.",
    },
    {
      q: "Can I drink alcohol on Mounjaro?",
      a: "The Mounjaro label doesn't set a rule about alcohol. What it does say: Mounjaro slows your stomach, and the risk of low blood sugar rises with insulin or a sulfonylurea. Alcohol can push both further, often sooner and harder, on less. That's a conversation for your prescriber. Jurni GLP will remind you to eat something first and drink water alongside.",
    },
    {
      q: "What's the difference between Mounjaro and Zepbound?",
      a: "Same medicine, tirzepatide, from the same company. Mounjaro is approved for type 2 diabetes and heart-risk reduction in people with type 2 diabetes; Zepbound is approved for weight management and obstructive sleep apnea. The label says not to take them together or with any other GLP-1 medicine.",
    },
    {
      q: "How do I store it, and can I travel with it?",
      a: "In the fridge at 36 to 46°F, in the carton, away from light. An unopened single-dose pen or vial can be out of the fridge for up to 21 days total as long as it stays under 86°F; throw it away after that. The KwikPen and multi-dose vial have a 30-day limit once started, or four weekly doses, whichever comes first. Never freeze it, and don't use it if it has. Tell Jurni GLP your trip dates and it tells you how to pack.",
    },
    {
      q: "I'm on the pill. Does Mounjaro affect it?",
      a: "It can. Because Mounjaro slows your stomach, birth control pills may be absorbed less well, mostly after starting and after each dose increase. The label advises switching to a non-pill method, or adding a backup like condoms for four weeks after starting and four weeks after every step up. Confirm the plan with your prescriber; Jurni GLP will remind you of the windows.",
    },
    {
      q: "Can Jurni GLP change my dose or tell me to skip one?",
      a: "No. Dosing is your prescriber's decision, always. Jurni GLP tells you what the label says, plans your week around the dose you're on, and tells you when something is worth a call.",
    },
    {
      q: "Who should not take Mounjaro?",
      a: "The label says people with a personal or family history of medullary thyroid carcinoma, or with MEN 2, must not use it, and neither should anyone who has had a serious allergic reaction to tirzepatide. It isn't recommended with other tirzepatide products or GLP-1 medicines, or for people with severe gastroparesis. That screening is your prescriber's job; Jurni GLP assumes it has happened.",
    },
  ],

  sources: [
    { label: "Mounjaro Prescribing Information (Eli Lilly, revised August 2026)", href: "https://uspl.lilly.com/mounjaro/mounjaro.html" },
    { label: "Mounjaro Medication Guide (revised April 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/medguide.cfm?setid=d2d7da5d-ad07-4228-955f-cf7e355c8cc0" },
  ],
  labelDate: "August 2026",
};
