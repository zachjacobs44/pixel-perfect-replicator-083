import type { DrugContent } from "./types";

/* Facts below: Wegovy Prescribing Information (Rev. 06/2026) and Medication Guide (Rev. 06/2026). */
export const wegovy: DrugContent = {
  slug: "wegovy",
  name: "Wegovy",
  generic: "semaglutide",
  maker: "Novo Nordisk",
  form: "once-weekly injection",

  seo: {
    title: "Wegovy support by text: dose weeks, nausea, missed doses | Jurni GLP",
    description:
      "On Wegovy? Jurni GLP is an AI agent that texts you through the 16-week dose ladder, the nausea weeks, the missed-dose rules and refills. Built on the FDA label. Two weeks free.",
  },

  hero: {
    label: "JURNI GLP FOR PEOPLE ON WEGOVY",
    headline: "On Wegovy? Here is what the next sixteen weeks actually look like.",
    sub: "Five dose steps, a stomach that empties slower every month, and the nausea nobody budgets for. Jurni GLP texts you through it, plans your meals around each step, and knows the Wegovy label better than the group chat does.",
    convo: [
      { from: "user", text: "week 9. moved up to 1mg and dinner came right back up" },
      {
        from: "jurni",
        text: "I'm sorry. That step is the one most people feel. For tonight: sips of water or broth, nothing solid until it settles. Tomorrow I'll plan three small meals instead of two normal ones.",
      },
      { from: "user", text: "should i skip next weeks shot" },
      {
        from: "jurni",
        text: "That's your prescriber's call, not mine, and the label does allow them to hold a step for four weeks if one isn't sitting well. Worth a message to them tomorrow. If you can't keep fluids down by tomorrow afternoon, call them today.",
      },
    ],
  },

  how: {
    heading: "What Wegovy is doing in there.",
    paragraphs: [
      "Wegovy is semaglutide, a once-weekly injection from Novo Nordisk. It copies a gut hormone called GLP-1 that your body already makes after meals, but at a level and duration that tells your brain the meal is over sooner and keeps the food noise down between meals.",
      "It also slows how fast your stomach empties. That one effect explains most of the early months: fullness that arrives after a few bites, nausea in the days after a dose step, the way a big dinner on shot night tends to be regretted.",
      "The FDA approves Wegovy for long-term weight management in adults and children 12 and older with obesity, and adults with overweight plus a weight-related condition; for lowering the risk of heart attack and stroke in adults with established heart disease and excess weight; and for a form of fatty-liver disease called MASH. Ozempic is the same molecule at different doses, approved for type 2 diabetes.",
    ],
  },

  ladder: {
    heading: "The dose ladder, and where the hard days hide.",
    intro:
      "Wegovy climbs in five steps, four weeks each, so you reach a maintenance dose around week 17. The lower doses exist to let your stomach adjust; the label notes stomach side effects were most common during the climb.",
    steps: [
      { mg: "0.25", tag: "start" },
      { mg: "0.5" },
      { mg: "1" },
      { mg: "1.7", tag: "maintenance" },
      { mg: "2.4", tag: "maintenance" },
      { mg: "7.2", tag: "maintenance" },
    ],
    note: "Milligrams, once a week. Weeks 1–4: 0.25. Weeks 5–8: 0.5. Weeks 9–12: 1. Weeks 13–16: 1.7. Week 17 on: 2.4 mg (recommended) or 1.7 mg. Adults who have tolerated 2.4 mg for at least four weeks and need more may go to 7.2 mg (the Wegovy HD pen). If a step isn't tolerated, the label says the prescriber can delay the next one by four weeks.",
    whoDecides:
      "Your prescriber sets the pace and the landing dose. Jurni GLP never changes your dose or suggests skipping one. What it does is know which week you're in, make the two days after a step lighter and plainer, and check in each morning until it passes.",
  },

  sideEffects: {
    heading: "What people actually feel, and how often.",
    intro:
      "From the Wegovy label's adult trials at 2.4 mg, versus placebo. Most of it happened while the dose was climbing, and most of it eased.",
    rows: [
      { name: "Nausea", howOften: "about 4 in 10", jurniDoes: "Smaller, plainer meals in the two days after a step; a morning check-in until it passes." },
      { name: "Diarrhea", howOften: "about 3 in 10", jurniDoes: "Fluids on a schedule, and a nudge to call your prescriber if it won't settle." },
      { name: "Vomiting", howOften: "about 1 in 4", jurniDoes: "Tells you when it has crossed from 'rough night' into 'call your practice'." },
      { name: "Constipation", howOften: "about 1 in 4", jurniDoes: "Fiber and water nudges early, before it becomes the week's problem." },
      { name: "Stomach pain", howOften: "about 1 in 5", jurniDoes: "Knows the difference between ordinary and the kind the label says to call about, and says so." },
      { name: "Headache", howOften: "about 1 in 7", jurniDoes: "Checks whether you've actually had water today. Usually you haven't." },
      { name: "Tiredness", howOften: "about 1 in 9", jurniDoes: "Trades the lift for a walk and moves protein to the front of the plate." },
    ],
    note: "Overall, 73% of adults on Wegovy 2.4 mg had some stomach or gut side effect, versus 47% on placebo. About 7% stopped because of side effects, versus 3%. The 7.2 mg dose adds a notable rate of tingling or burning skin sensations (22%), which the label says to report.",
  },

  doesForYou: {
    heading: "What Jurni GLP does for you on Wegovy.",
    items: [
      {
        title: "Plans the step weeks before they arrive",
        body: "Five steps, five rough patches. Jurni GLP knows the dates. The two days after each one, your plan goes small and plain: broth, eggs, toast, protein first, water on a timer.",
      },
      {
        title: "Knows the missed-dose rule, which is a fiddly one",
        body: "Missed your shot? If the next one is more than two days away, take it now. If it's less than two days away, skip it. Missed two weeks in a row? The label wants your prescriber involved before you restart. Jurni GLP tells you which case you're in.",
      },
      {
        title: "Keeps protein and water from quietly collapsing",
        body: "On 2.4 mg, three bites can feel like a meal. Jurni GLP tracks protein and fluids from what you text and the photos you send, and speaks up when they drift.",
      },
      {
        title: "Handles refills, travel and the fridge",
        body: "It texts before your refill window. It knows an unopened pen can be out of the fridge for 28 days under 86°F, and a FlexTouch for 56 days once started, so packing for a trip is a text, not a search.",
      },
      {
        title: "Tells you when it's a call, not a text",
        body: "Severe stomach pain that won't quit, a racing heart at rest, a neck lump, a vision change. Jurni GLP knows the label's warning signs and says 'call your prescriber' plainly, every time.",
      },
      {
        title: "Shows up after the climb, when it gets quiet",
        body: "Week 20 is when the novelty is gone and the habits aren't built yet. The plan still lands at 5:30, the weigh-in reminder still comes, and someone still asks how the week went.",
      },
    ],
  },

  callIf: {
    heading: "When Jurni GLP will tell you to call your prescriber.",
    intro: "These come from the Wegovy Medication Guide. Jurni GLP recognizes them and sends you to a person; it never tries to handle them itself.",
    items: [
      "Severe stomach-area pain that won't go away, with or without vomiting, sometimes spreading to your back. Stop Wegovy and call right away.",
      "Pain in the upper stomach, fever, yellowing of the skin or eyes, or clay-colored stools.",
      "Nausea, vomiting or diarrhea that does not let up. Dehydration is how kidney problems start.",
      "A racing or pounding heartbeat at rest that lasts several minutes.",
      "A lump or swelling in the neck, hoarseness that lingers, trouble swallowing, or shortness of breath.",
      "Any change in your vision, if you have type 2 diabetes.",
      "Shakiness, sweating, confusion or a fast heartbeat, especially if you also take insulin or a sulfonylurea.",
      "You've missed two or more weekly doses in a row, you are or might be pregnant, or you have surgery or sedation coming up.",
    ],
    emergency:
      "Swelling of the face, lips, tongue or throat, trouble breathing or swallowing, severe rash, or fainting: stop Wegovy and get emergency help right away.",
  },

  faq: [
    {
      q: "I missed my Wegovy dose. What do I do?",
      a: "The label's rule depends on timing. If your next scheduled dose is more than two days (48 hours) away, take the missed one as soon as you can. If the next dose is less than two days away, skip the missed one and take the next on your regular day. Never take two to catch up. If you've missed two or more weeks in a row, the label says to restart at a lower dose, which means a conversation with your prescriber first. Text Jurni GLP the day you notice and it tells you which case applies.",
    },
    {
      q: "Can I change my injection day?",
      a: "Yes, as long as your last dose was at least two days earlier. Tell Jurni GLP the new day and your reminders move with it.",
    },
    {
      q: "Why am I so nauseous in the week after a dose increase?",
      a: "Each step slows your stomach a little more than you're used to, and it takes a few days to adjust. The label says stomach side effects were reported most often during the climb and that a prescriber can hold a step for an extra four weeks if one isn't tolerated. Jurni GLP plans the two days after each step small and plain, and checks in each morning.",
    },
    {
      q: "Does Wegovy have to be taken with food, or at a set time?",
      a: "No. Any time of day, with or without a meal. Same day each week. Most people pick a day and time they'll remember, and Jurni GLP holds them to it.",
    },
    {
      q: "Can I drink alcohol on Wegovy?",
      a: "The Wegovy label doesn't set an alcohol rule. What it does say: Wegovy slows your stomach, and it can lower blood sugar further if you take insulin or a sulfonylurea. Both change how alcohol feels, usually sooner and harder, on less. That's a conversation for your prescriber. Jurni GLP will remind you to eat something first and drink water alongside.",
    },
    {
      q: "What's the difference between Wegovy and Ozempic?",
      a: "Same medicine, semaglutide, from the same company, at different doses. Wegovy is approved for weight management, heart-risk reduction and MASH, with a usual maintenance dose of 2.4 mg. Ozempic is approved for type 2 diabetes, with a maximum of 2 mg. The label says not to take them together or with any other GLP-1 medicine.",
    },
    {
      q: "What about the Wegovy pill?",
      a: "Wegovy also comes as a once-daily 25 mg tablet. The label describes switching in both directions: from the 2.4 mg injection, start the tablet one week after your last shot; from the tablet, start the injection the day after your last pill. Switching is your prescriber's decision. Jurni GLP works with either.",
    },
    {
      q: "How do I store Wegovy, and can I travel with it?",
      a: "In the fridge at 36 to 46°F, in the carton. Before the cap is removed, a single-dose pen or syringe can stay at room temperature (up to 86°F) for up to 28 days. A FlexTouch pen, once started, is good for 56 days at room temperature or in the fridge. Never freeze it. Tell Jurni GLP your trip dates and it tells you how to pack.",
    },
    {
      q: "Does Wegovy affect birth control pills?",
      a: "The Wegovy injection label does not report a meaningful effect on an estrogen-levonorgestrel pill in its interaction study. That differs from the tirzepatide drugs, Zepbound and Mounjaro, which do carry a backup-method recommendation. Confirm your own situation with your prescriber.",
    },
    {
      q: "I'm planning a pregnancy. What does the label say?",
      a: "Stop Wegovy at least two months before trying to conceive, because semaglutide stays in the body a long time. If you become pregnant on it, the label says to stop and tell your prescriber. That conversation belongs with them; Jurni GLP will tell you to have it.",
    },
    {
      q: "Can Jurni GLP change my dose or tell me to skip one?",
      a: "No. Dosing is your prescriber's decision, always. Jurni GLP tells you what the label says, plans your week around the dose you're on, and tells you when something is worth a call.",
    },
    {
      q: "Who should not take Wegovy?",
      a: "The label says people with a personal or family history of medullary thyroid carcinoma, or with MEN 2, must not use it, and neither should anyone who has had a serious allergic reaction to semaglutide. It isn't recommended with other semaglutide or GLP-1 medicines, or for people with severe gastroparesis. That screening is your prescriber's job; Jurni GLP assumes it has happened.",
    },
  ],

  sources: [
    { label: "Wegovy Prescribing Information (Novo Nordisk, revised June 2026)", href: "https://www.novo-pi.com/wegovy.pdf" },
    { label: "Wegovy Medication Guide (revised June 2026)", href: "https://dailymed.nlm.nih.gov/dailymed/medguide.cfm?setid=ee06186f-2aa3-4990-a760-757579d8f77b" },
  ],
  labelDate: "June 2026",
};
