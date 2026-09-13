import heroIllustration from "./assets/images/hero-illustration.png";
import solutionIllustration from "./assets/images/solution-illustration.png";
import demo1 from "./assets/images/demo-1.png";
import demo2 from "./assets/images/demo-2.png";
import demo3 from "./assets/images/demo-3.png";
import teamThierry from "./assets/images/team-thierry.jpg";
import teamMarie from "./assets/images/team-marie.jpg";
import teamPaulienne from "./assets/images/team-paulienne.jpg";

export const IMAGES = {
  hero: heroIllustration,
  solution: solutionIllustration,
  demo: [demo1, demo2, demo3],
  team: { thierry: teamThierry, marie: teamMarie, paulienne: teamPaulienne },
};

export const SITE = {
  name: "Gbénu",
  tagline: "Digital knowledge is you",
  demoUrl: "https://your-prototype-url.example.com", // TODO
  email: "contact@gbenu.africa", // TODO
  linkedin: "https://linkedin.com/company/gbenu", // TODO
  location: "Kigali, Rwanda",
};

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "solution", label: "Solution" },
  { id: "how-it-works", label: "How It Works" },
  { id: "impact", label: "Impact" },
  { id: "demo", label: "Demo" },
  { id: "team", label: "Team" },
];

export const PROBLEM_STATS = [
  {
    value: "75%+",
    label:
      "of employers consider digital skills crucial for tomorrow's workforce",
    source: "World Economic Forum, 2020",
  },
  {
    value: "18%",
    label:
      "of primary education systems in Sub-Saharan Africa have a structured digital training path",
    source: "UNESCO",
  },
  {
    value: "22%",
    label: "of secondary education systems have one",
    source: "UNESCO",
  },
];

export const TARGET_SEGMENTS = [
  { label: "Age", value: "7 – 50 years old" },
  {
    label: "Location",
    value: "Rwanda, Benin & Burkina Faso, then Sub-Saharan Africa",
  },
  {
    label: "Education level",
    value: "High school students, university students, young graduates",
  },
  {
    label: "Professional status",
    value: "Students, job seekers, young entrepreneurs",
  },
  { label: "Device used", value: "Mobile phone, computer, or tablet" },
  { label: "Main need", value: "Develop digital & AI skills" },
  {
    label: "Current obstacles",
    value: "High cost of training, lack of Africa-adapted content",
  },
];

export const FEATURES = [
  {
    icon: "languages",
    title: "8 Languages",
    text: "French, English + 6 African languages, AI-translated content.",
  },
  {
    icon: "list-checks",
    title: "Adaptive Quiz",
    text: "5-question diagnostic that adjusts in real time to the learner.",
  },
  {
    icon: "bar-chart",
    title: "Skill Gap Mapping",
    text: "Visualizes 6 skill dimensions using AI clustering on error patterns.",
  },
  {
    icon: "calendar",
    title: "Personalized Work Plan",
    text: "AI-generated monthly/quarterly learning path per learner profile.",
  },
  {
    icon: "wallet",
    title: "Africa-Adapted Payments",
    text: "Mobile Money, Orange Money, MTN MoMo, Airtel Money, Moov Money, cards.",
  },
  {
    icon: "message",
    title: "Contextual Explanations",
    text: "Lessons explained with concrete African examples via a customized LLM.",
  },
  {
    icon: "keyboard",
    title: "Keyboard Simulator",
    text: "Interactive virtual keyboard for complete beginners.",
  },
  {
    icon: "bot",
    title: "Interactive AI Tutor",
    text: "Live LLM chat that answers, rephrases and adapts to learner level.",
  },
  {
    icon: "award",
    title: "Certification",
    text: "Automated end-of-module tests and shareable digital certificates.",
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "smartphone",
    title: "Access",
    text: "Learner signs up from a phone, tablet, or computer — partial offline mode available.",
  },
  {
    step: "02",
    icon: "list-checks",
    title: "Diagnose",
    text: "A short adaptive quiz maps current skill level across 6 dimensions.",
  },
  {
    step: "03",
    icon: "bot",
    title: "Learn",
    text: "The AI tutor delivers a personalized path, contextualized to the learner's country and language.",
  },
  {
    step: "04",
    icon: "award",
    title: "Certify",
    text: "Learner passes an end-of-module test and earns a shareable digital certificate.",
  },
];

export const CURRICULUM = [
  {
    level: "CI / CP (Grade 1–2)",
    content: "Screen discovery, mouse/touch controls, digital shapes & colors.",
  },
  {
    level: "CE1 / CE2 (Grade 3–4)",
    content:
      "Keyboard usage, first texts, supervised internet, basic security.",
  },
  {
    level: "CM1 / CM2 (Grade 5–6)",
    content: "File & folder management, writing emails, responsible searching.",
  },
  {
    level: "6ème / 5ème (Grade 7–8)",
    content: "Introduction to Word, Excel, responsible social media usage.",
  },
  {
    level: "4ème / 3ème (Grade 9–10)",
    content:
      "Introduction to cybersecurity, professional communication, intro to AI.",
  },
  {
    level: "2nde / 1ère (Grade 11–12)",
    content:
      "Content creation, collaborative tools, digital critical thinking.",
  },
  {
    level: "Terminale (Grade 13)",
    content:
      "Digital entrepreneurship, freelancing, complete digital projects.",
  },
  {
    level: "Gbénu Levels 1–5",
    content:
      "All ages, from scratch: Beginner → Initiated → Intermediate → Advanced → Expert.",
  },
];

// scores: "full" | "partial" | "none"
export const COMPETITORS = {
  criteria: [
    "Adapted to African context",
    "Accessible basic digital literacy training",
    "Exclusive AI content",
    "Accessible from smartphone or computer",
    "Affordable cost",
    "Path designed for beginners",
    "Possibility of progressive learning",
  ],
  competitors: [
    {
      name: "Anthropic / Chidi",
      scores: ["none", "none", "partial", "partial", "none", "none", "partial"],
    },
    {
      name: "Khan Academy",
      scores: ["none", "none", "full", "full", "full", "partial", "full"],
    },
    {
      name: "Eneza Education",
      scores: ["partial", "none", "none", "full", "full", "partial", "partial"],
    },
    {
      name: "Coursera",
      scores: ["none", "none", "full", "full", "none", "none", "partial"],
    },
    {
      name: "Udemy",
      scores: ["none", "none", "full", "full", "partial", "none", "partial"],
    },
    {
      name: "Gbénu",
      scores: ["full", "full", "full", "full", "full", "full", "full"],
      highlight: true,
    },
  ],
};

export const SWOT = {
  strengths: [
    "Personalized AI tutor connected to a live LLM API",
    "Courses delivered in 8 local African languages",
    "Unique level-zero keyboard simulator",
    "Field validation (Mom Test) across 3 countries",
    "Bi-cultural foundation (Benin / Rwanda)",
  ],
  weaknesses: [
    "Team still being formed",
    "Prototype at MVP stage, not yet in production",
    "Not enough signed contracts with institutions",
  ],
  opportunities: [
    "$109M digital budget in Burkina Faso for 2026",
    "Benin UNICEF deployment 2025–2030",
    "Continuous smartphone expansion across Africa",
    "Rwanda as a pioneer in UNICEF digital initiatives",
    "STIC'26 as an accelerator in Burkina Faso",
  ],
  threats: [
    "External AI API dependency",
    "UNESCO / MIT / Anthropic initiatives already active",
    "Resistance from traditional education systems",
    "Limited internet infrastructure in rural areas",
    "Insecurity in certain regions of Burkina Faso",
  ],
};

export const MARKET = {
  tam: {
    value: "800M+",
    label: "Total Addressable Market",
    detail: "Young people across Africa",
  },
  sam: {
    value: "400–500M",
    label: "Serviceable Available Market",
    detail: "Africans with mobile internet + a smartphone (GSMA)",
  },
  som: {
    value: "20–50M",
    label: "Serviceable Obtainable Market",
    detail: "Ages 7–35, Francophone & East Africa, Phase 1",
  },
  countries: [
    {
      country: "Rwanda",
      primary: "~2,500,000",
      secondary: "~785,000",
      independent: "~1,500,000",
    },
    {
      country: "Benin",
      primary: "~3,000,000",
      secondary: "~930,000",
      independent: "~2,000,000",
    },
    {
      country: "Burkina Faso",
      primary: "~3,200,000",
      secondary: "~1,200,000",
      independent: "~2,210,000",
    },
  ],
};

export const GROWTH = [
  {
    year: "Year 1",
    learners: "21,450",
    schools: "12",
    revenue: "195,850,000 FCFA",
  },
  {
    year: "Year 2",
    learners: "43,437",
    schools: "25",
    revenue: "390,183,000 FCFA",
  },
  {
    year: "Year 3",
    learners: "69,500",
    schools: "40",
    revenue: "624,500,000 FCFA",
  },
];

export const PRICING = [
  { tier: "Primary school", price: "2,000 FCFA / student / term" },
  { tier: "Secondary school", price: "3,000 FCFA / student / term" },
  { tier: "Independent learner", price: "5,000 FCFA / learner / term" },
];

export const FINANCIAL_SUMMARY = [
  {
    year: "Year 1",
    revenue: "195,850,000",
    expenses: "151,000,000",
    profit: "40,850,000",
  },
  {
    year: "Year 2",
    revenue: "390,183,000",
    expenses: "287,000,000",
    profit: "103,183,000",
  },
  {
    year: "Year 3",
    revenue: "624,500,000",
    expenses: "479,000,000",
    profit: "145,500,000",
  },
];

export const PARTNERS = {
  strategic: [
    {
      name: "Smart Africa Digital Academy (SADA)",
      role: "Continental network for digital skills & youth employability",
      status: "Confirmed alignment",
    },
    {
      name: "UNESCO",
      role: "Educational policy, pedagogical innovation, digital transformation expertise",
      status: "Potential",
    },
    {
      name: "Imagine Worldwide",
      role: "Digital learning solutions across African schools",
      status: "Potential",
    },
    {
      name: "UNICEF",
      role: "2025–2030 global digital education strategy, active in Benin",
      status: "Potential",
    },
  ],
  financial: [
    {
      name: "UNICEF",
      role: "Priority stakeholder — invests in educational digital transformation",
    },
    {
      name: "Orange Foundation (Education+)",
      role: "Co-financing — has supported 1,400+ schools, 600,000+ students",
    },
    { name: "Smart Africa", role: "Digital transformation program funding" },
    {
      name: "International cooperation agencies",
      role: "Grant & program funding",
    },
  ],
};

export const TEAM = [
  {
    name: "Thierry de Salomon Elyse Gbènoukpo CODJIA",
    role: "Founder & CEO",
    photo: IMAGES.team.thierry,
    bio: "Entrepreneurship & Leadership student at African Leadership University (ALU), Kigali. Identified Africa's digital literacy gap through personal and academic experience in Benin and Rwanda. Isheero & DataCamp scholar in Data Analytics and AI.",
    skills: [
      "Cybersecurity fundamentals",
      "Front-end development",
      "Programming & algorithmic logic",
      "Data analysis & AI",
      "AWS cloud",
      "Systems thinking",
    ],
  },
  {
    name: "MOKAM FONE Marie",
    role: "Marketing & Communication Lead",
    photo: IMAGES.team.marie,
    bio: "Entrepreneurship & Leadership student at ALU Kigali. Former Marketing Lead & Community Manager at KAHGOO, and Marketing Strategist Intern at Rwanda Mountain Tea.",
    skills: [
      "Digital marketing & growth",
      "Community management",
      "Content creation",
      "Brand positioning",
      "Project management",
    ],
  },
  {
    name: "BOBDA FONE Paulienne",
    role: "Finance & Administration Lead",
    photo: IMAGES.team.paulienne,
    bio: "Entrepreneurship & Leadership student at ALU Kigali. Project management experience at DreamDo focused on financial planning and partnership development.",
    skills: [
      "Administrative management",
      "Budget planning",
      "Partnership development",
      "Business development",
    ],
  },
];
