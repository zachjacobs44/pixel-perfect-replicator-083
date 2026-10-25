import type { DrugContent } from "./types";

/* Facts below: Ozempic Prescribing Information (Rev. 05/2026) and Medication Guide (Rev. 01/2025). */
export const ozempic: DrugContent = {
  slug: "ozempic",
  name: "Ozempic",
  generic: "semaglutide",
  maker: "Novo Nordisk",
  form: "once-weekly injection",

  seo: {
    title: "Ozempic support by text: dose weeks, nausea, missed doses | Jurni GLP",
    description:
      "On Ozempic? Jurni GLP is an AI agent that texts you through the dose steps, the nausea weeks, missed-dose rules, low blood sugar signs and refills. Built on the FDA label. Two weeks free.",
  },

  hero: {
    label: "JURNI GLP FOR PEOPLE ON OZEMPIC",
    headline: "On Ozempic? Here is what the first months actually look like.",
    sub: "A click-pen once a week, three or four dose steps, and a stomach that quietly changes the rules about dinner. Jurni GLP texts you through it, tracks how you're eating and feeling, and knows the Ozempic label better than the comment section.",
    convo: [
      { from: "user", text: "moved to 1mg on sunday and i've been queasy since" },
      {
        from: "jurni",
        text: "That's the step people feel most. For the next two days: small meals, nothing greasy, water between them rather than with them. I'll check on you each morning until it settles.",
      },
      { from: "user", text: "my a1c appt is thursday. anything i should bring" },
      {
        from: "jurni",
        text: "I'll send you a one-page summary tomorrow: your doses by date, the nausea days, and what you've been eating. Bring that. And tell them about the queasiness; the label gives them room to slow the climb.",
      },
    ],
  },

  how: {
    heading: "What Ozempic is doing in there.",
    paragraphs: [
      "Ozempic is semaglutide, a once-weekly injection from Novo Nordisk. It copies a gut hormone called GLP-1: it helps your pancreas release insulin when blood sugar is high, tells your brain a meal is over sooner, and keeps the noise about food down between meals.",
      "It also slows how fast your stomach empties. That one effect explains most of the early months: fullness after a few bites, nausea in the days after a dose step, and why a big dinner on shot night tends to be regretted.",
      "The FDA approves Ozempic, with diet and exercise, to improve blood sugar in adults with type 2 diabetes, and to lower the risk of heart attack, stroke and kidney decline in adults with type 2 diabetes who also have heart or kidney disease. Wegovy is the same molecule at higher doses, approved for weight management. Jurni GLP supports people on either; it is not involved in why you were prescribed it.",
    ],
  },

  ladder: {
    heading: "The dose steps, and where the hard days hide.",
    intro:
      "Ozempic has a short ladder. Four weeks at a starter dose that exists only to let your stomach adjust, then 0.5 mg, with 1 mg and 2 mg available if your blood sugar needs more. Each move is at least four weeks apart. The rough patches cluster in the two or three days after a step.",
    steps: [
      { mg: "0.25", tag: "start" },
      { mg: "0.5", tag: "maintenance" },
      { mg: "1", tag: "maintenance" },
      { mg: "2", tag: "maintenance" },
    ],
    note: "Milligrams, once a week. Weeks 1–4: 0.25 mg (a starter dose, not meant to control blood sugar). Then 0.5 mg. If more control is needed: 1 mg after at least four weeks on 0.5, then 2 mg after at least four weeks on 1. Maintenance is 0.5, 1 or 2 mg. Maximum 2 mg a week.",
    whoDecides:
      "Your prescriber decides whether and when to step up, based on your blood sugar numbers and what you tolerate. Jurni GLP never changes your dose or tells you to. What it does is know which week you're in, plan lighter meals around a step, watch for the signs the label says to report, and check in on the days that tend to be rough.",
  },

  sideEffects: {
    heading: "What people actually feel, and how often.",
    intro:
      "From the Ozempic label's placebo-controlled trials. Rates below are for the 1 mg dose; the 0.5 mg dose runs a little lower. Most of it happened during the climb and eased.",
    rows: [
      { name: "Nausea", howOften: "about 1 in 5", jurniDoes: "Smaller, plainer dinners the night of a step-up; a morning check-in the next two days." },
      { name: "Vomiting", howOften: "about 1 in 11", jurniDoes: "Tells you when it has crossed from 'rough day' into 'call your practice'." },
      { name: "Diarrhea", howOften: "about 1 in 11", jurniDoes: "Fluids on a schedule, and a flag to your prescriber if it won't settle." },
      { name: "Stomach pain", howOften: "about 1 in 17", jurniDoes: "Knows the difference between ordinary and the kind the label says to call about." },
      { name: "Constipation", howOften: "about 1 in 30", jurniDoes: "Fiber and water nudges before it becomes a problem, not after." },
    ],
    note: "At 1 mg versus placebo: nausea 20% vs 6%, vomiting 9% vs 2%, diarrhea 9% vs 2%, stomach pain 6% vs 5%, constipation 3% vs 2%. Low blood sugar is mainly a risk when Ozempic is combined with insulin or a sulfonylurea.",
  },

  doesForYou: {
    heading: "What Jurni GLP does for you on Ozempic.",
    items: [
      {
        title: "Plans around your dose week",
        body: "It knows the date of your next step. The two days around it, your plan gets lighter: smaller meals, protein first, fluids on a timer, nothing ambitious for dinner.",
      },
      {
        title: "Watches for lows if you're on insulin or a sulfonylurea",
        body: "Shaky, sweaty, confused, heart racing: Jurni GLP knows the label's list and the combination that raises the risk. It tells you to eat and to tell your prescriber, in that order.",
      },
      {
        title: "Knows the missed-dose rule so you don't have to",
        body: "Forgot your day? The Ozempic label gives you five days to take it; after that, skip to the next one. Jurni GLP tells you which side of that line you're on. Miss more than one and it tells you to call your prescriber.",
      },
      {
        title: "Brings a summary to your A1c visit",
        body: "Doses by date, the rough days, what you've been eating and moving. One page, texted to you before the appointment, so the visit starts with facts instead of 'how's it going'.",
      },
      {
        title: "Handles refills, travel and the pen",
        body: "It texts before your refill window. It knows a pen in use is good for 56 days at room temperature, that you need a new needle every time, and what to do with the pen on a flight.",
      },
      {
        title: "Tells you when it's a call, not a text",
        body: "Severe stomach pain that won't stop, vomiting you can't get ahead of, a vision change, a neck lump. Jurni GLP knows the label's warning signs and says 'call your prescriber' plainly, every time.",
      },
    ],
  },

  callIf: {
    heading: "When Jurni GLP will tell you to call your prescriber.",
    intro: "These come from the Ozempic Medication Guide. Jurni GLP recognizes them and sends you to a person; it never tries to handle them itself.",
    items: [
      "Severe stomach-area pain that won't go away, with or without vomiting, sometimes spreading to your back. Stop Ozempic and call right away.",
      "Pain in the upper stomach, fever, yellowing of the skin or eyes, or clay-colored stools.",
      "Nausea, vomiting or diarrhea that does not let up. Dehydration is how kidney problems start, and the label is specific about this for people who already have kidney disease.",
      "Shakiness, sweating, confusion, blurred vision or a fast heartbeat, especially if you also take insulin or a sulfonylurea. Repeated lows mean your other diabetes medicines may need adjusting.",
      "Any change in your vision. Fast improvement in blood sugar can temporarily worsen diabetic eye disease.",
      "A lump or swelling in the neck, hoarseness that lingers, trouble swallowing, or shortness of breath.",
      "You are planning a pregnancy. The label says to stop Ozempic at least two months beforehand.",
      "Before any surgery or procedure with anesthesia or sedation. Tell every provider you're on Ozempic.",
    ],
    emergency:
      "Swelling of the face, lips, tongue or throat, trouble breathing or swallowing, severe rash, or fainting: stop Ozempic and get emergency help right away.",
  },

  faq: [
    {
      q: "I missed my Ozempic dose. What do I do?",
      a: "The label says: take it as soon as you can, as long as it's within five days of when it was due. If more than five days have passed, skip it and take the next dose on your usual day. Don't double up. If you've missed more than one in a row, call your prescriber about how to restart. Text Jurni GLP the day you missed and it tells you which rule applies.",
    },
    {
      q: "Can I change my injection day?",
      a: "Yes, as long as there are at least two days (more than 48 hours) between the two doses. Tell Jurni GLP the new day and your reminders move with it.",
    },
    {
      q: "I'm on insulin or a sulfonylurea too. What should I watch for?",
      a: "Low blood sugar. Ozempic rarely causes it alone, but the risk rises with insulin or sulfonylureas like glipizide, glyburide or glimepiride. The label lists the signs: dizziness, blurred vision, sweating, shakiness, hunger, headache, fast heartbeat, confusion, slurred speech, feeling jittery. Prescribers often lower the other medicine when starting Ozempic. Report lows to your prescriber; adjusting those doses is their decision.",
    },
    {
      q: "Does Ozempic have to be taken with food, or at a certain time?",
      a: "No. Any time of day, with or without a meal, same day each week. Most people pick a day and time they'll remember, and Jurni GLP holds them to it.",
    },
    {
      q: "Why do I feel worst a couple of days after a dose increase?",
      a: "Each step up slows your stomach a little more than you're used to, and your body takes a few days to adjust. The starter dose exists for exactly that reason. Jurni GLP plans lighter meals for those days and checks in each morning.",
    },
    {
      q: "Can I drink alcohol on Ozempic?",
      a: "The Ozempic label doesn't set a rule about alcohol. What it does say: Ozempic slows your stomach, and the risk of low blood sugar rises with insulin or a sulfonylurea. Alcohol can push both further, often sooner and harder, on less. That's a conversation for your prescriber. Jurni GLP will remind you to eat something first and drink water alongside.",
    },
    {
      q: "What's the difference between Ozempic and Wegovy?",
      a: "Same medicine, semaglutide, from the same company, at different doses. Ozempic is approved for type 2 diabetes with a maximum of 2 mg a week. Wegovy is approved for weight management, heart-risk reduction and MASH, with a usual maintenance dose of 2.4 mg. The label says not to take them together or with any other GLP-1 medicine. Ozempic also now comes as a daily tablet, which is a separate product from the injection.",
    },
    {
      q: "How do I store the pen, and can I travel with it?",
      a: "Before first use: in the fridge at 36 to 46°F, in the carton. Once you've started a pen, it's good for 56 days at room temperature (59 to 86°F) or in the fridge, cap on. Never freeze it. Use a new needle for every injection and never share a pen, even with a new needle. Tell Jurni GLP your trip dates and it tells you how to pack.",
    },
    {
      q: "I'm planning a pregnancy. What does the label say?",
      a: "Stop Ozempic at least two months before trying to conceive, because semaglutide stays in the body a long time. That conversation belongs with your prescriber; Jurni GLP will tell you to have it.",
    },
    {
      q: "Can Jurni GLP change my dose or tell me to skip one?",
      a: "No. Dosing is your prescriber's decision, always. Jurni GLP tells you what the label says, plans your week around the dose you're on, and tells you when something is worth a call.",
    },
    {
      q: "Who should not take Ozempic?",
      a: "The label says people with a personal or family history of medullary thyroid carcinoma, or with MEN 2, must not use it, and neither should anyone who has had a serious allergic reaction to semaglutide. It isn't recommended with other semaglutide or GLP-1 medicines. That screening is your prescriber's job; Jurni GLP assumes it has happened.",
    },
  ],

  sources: [
    { label: "Ozempic Prescribing Information (Novo Nordisk, revised May 2026)", href: "https://www.novo-pi.com/ozempic.pdf" },
    { label: "Ozempic Medication Guide (revised January 2025)", href: "https://www.novo-pi.com/ozempic.pdf" },
  ],
  labelDate: "May 2026",
};
