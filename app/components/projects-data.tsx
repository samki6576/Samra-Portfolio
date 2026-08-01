export type Project = {
  id: string
  title: string
  description: string
  tech: string[]
  category: "Apps" | "Games" | "Websites" | "AI / Full-Stack"
  url: string
  image: string
  year: string
  github?: string
  impact?: string
  status?: string
}

// Apps & tools — shown in the "Web Apps" section
export const appWorks: Project[] = [
     {
  id: "codecatalyst",
    title: "CodeCatalyst – Multi-Agent AI Repository Modernizer",
    description: "An autonomous AI-powered system that analyzes legacy code repositories and automatically generates migration roadmaps (JavaScript → TypeScript, Python 2 → 3) using a multi-agent LangGraph orchestration with real-time streaming.",
    tech: [
      "React",
    "Node.js",
    "Python",
    "LangGraph",
    "Groq (Llama-3.1-70B)",
    "ChromaDB",
    "RabbitMQ",
    "Docker",
    "Socket.IO",
    "Render"
  ],
  category: "App",
  url: "https://code-catalyst-loqv.onrender.com/",
  github: "https://github.com/samrasdra-cmyk/code-catalyst",
  year: "2026",
  image: "cata.png",

},
{
    id: "resumeforge",
    title: "ResumeForge",
    description:
      "Resume builder that lets job seekers pick a layout, fill in their experience once, and export a polished, ATS-friendly PDF.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Apps",
    url: "https://resumeforge-h.vercel.app",
    year: "2026",
    image: "resume.png",
  },
  {
    id: "breakfast-blitz",
    title: "Breakfast Blitz",
    description:
      "Fast-paced browser arcade game where players sort and serve orders against the clock — built to practice game-loop logic and timed interactions.",
    tech: ["JavaScript", "Canvas API"],
    category: "Games",
    url: "https://breakfast-v8a1.vercel.app/",
    year: "2026",
    image: "/lol.png",
  },
  {
    id: "habit-tracker",
    title: "Habit Tracker",
    description:
      "Daily habit tracker for logging streaks, viewing progress over time, and staying consistent with personal goals.",
    tech: ["Next.js", "TypeScript"],
    category: "Apps",
    url: "https://habit-tracker-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "poo.png",
  },
  {
    id: "vitalsign-ai",
    title: "VitalSign AI",
    description:
      "Health tracking app that logs vital signs like heart rate and blood pressure, then uses AI to flag patterns worth a closer look.",
    tech: ["Next.js", "AI API integration"],
    category: "Apps",
    url: "https://vital-sign-ai.vercel.app/",
    year: "2026",
    image: "ti.png",
  },
  {
    id: "agentpassport",
    title: "AgentPassport: Token Vault",
    description:
      "Secure vault concept for storing and issuing API keys and tokens that AI agents need, without exposing raw credentials.",
    tech: ["Next.js", "TypeScript"],
    category: "Apps",
    url: "https://agent-password.vercel.app",
    year: "2026",
    image: "agent.png",
  },
  {
    id: "remitx",
    title: "RemitX",
    description:
      "Cross-border money transfer concept focused on a simple, transparent send flow — clear fees and status at every step.",
    tech: ["Next.js", "TypeScript"],
    category: "Apps",
    url: "https://remitx-six.vercel.app",
    year: "2026",
    image: "remitx.png",
  },
  {
    id: "carbonledger-ai",
    title: "CarbonLedger AI",
    description:
      "Carbon footprint tracker that logs everyday activities and uses AI to estimate impact and suggest lower-carbon alternatives.",
    tech: ["Next.js", "AI API integration"],
    category: "Apps",
    url: "https://carbonledger-ai.netlify.app/",
    year: "2026",
    image: "jk.jpg",
  },
  {
    id: "zizy-pdf",
    title: "Zizy PDF Maker",
    description:
      "Browser-based tool for creating, merging, and exporting PDFs — no software installs, everything runs client-side.",
    tech: ["Next.js", "PDF generation"],
    category: "Apps",
    url: "https://pdfmakerzizy.netlify.app",
    year: "2026",
    image: "1.png",
  },
  {
    id: "bank-app",
    title: "Bank App",
    description:
      "Simulated online banking dashboard for viewing balances, reviewing transaction history, and moving money between accounts.",
    tech: ["Next.js", "TypeScript"],
    category: "Apps",
    url: "https://secure-bank-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "0.png",
  },

  {
    id: "openclaw",
    title: "OpenClaw AI Guardian",
    description:
      "AI monitoring assistant concept that reviews an agent's planned actions and flags risky ones before they execute.",
    tech: ["Next.js", "AI API integration"],
    category: "Apps",
    url: "https://open-claw-sigma.vercel.app/",
    year: "2026",
    image:
      "https://images.seeklogo.com/logo-png/66/1/openclaw-logo-png_seeklogo-665449.png?v=1971850109529183720",
  },
  {
    id: "perfect-table",
    title: "Perfect Table",
    description:
      "Restaurant reservation app for browsing table availability and booking a spot without a phone call.",
    tech: ["Next.js", "TypeScript"],
    category: "Apps",
    url: "https://restaurants-lime.vercel.app/",
    year: "2026",
    image: "food.png",
  },
]

// Websites — shown in the "Selected Works" section
export const selectedWorks: Project[] = [
  {
    id: "rate-my-last-text",
    title: "Rate My Last Text",
    description:
      "Paste in a text message and get instant AI feedback on tone, clarity, and how it's likely to land.",
    tech: ["Next.js", "AI API integration"],
    category: "Websites",
    url: "https://ratrmylasttext.netlify.app",
    year: "2026",
    image: "/de.png",
  },
  {
    id: "virtual-tryon",
    title: "AI-Powered Virtual Try-On",
    description:
      "Upload a photo and preview how an outfit or product looks on you, powered by AI image processing.",
    tech: ["Next.js", "AI/Vision API"],
    category: "Websites",
    url: "https://second-option.vercel.app",
    year: "2026",
    image: "/beauty.png",
  },
  {
    id: "ecommerce-website",
    title: "Elegance — Ecommerce Website",
    description:
      "Full storefront with product catalog, filtering, cart, and checkout flow for a fashion brand concept.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Websites",
    url: "https://elegance-ecommerce-website-git-f3c38a-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/7.png",
  },
  {
    id: "ocean-explorer",
    title: "Ocean Explorer",
    description:
      "Interactive, scroll-driven site exploring ocean life and ecosystems through 3D scenes and animation.",
    tech: ["Next.js", "Three.js", "Framer Motion"],
    category: "Websites",
    url: "https://ocean-explorer-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/8.png",
  },
  {
    id: "blog-website",
    title: "Blog Website",
    description:
      "Content-first blog platform with clean typography, category browsing, and a focus on readability.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Websites",
    url: "https://blog-space-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/6.png",
  },
  {
    id: "the-court",
    title: "THE COURT — Shoe Store",
    description:
      "Sneaker e-commerce storefront with product browsing, size selection, and cart flow.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Websites",
    url: "https://the-court-theta.vercel.app",
    year: "2026",
    image: "/io.png",
  },
  {
    id: "golden-crust",
    title: "Golden Crust Bakery",
    description:
      "Bakery brand website showcasing the menu and story, with online ordering information front and center.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Websites",
    url: "https://bakery-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/9.jpg",
  },
  {
    id: "space-3d",
    title: "Space 3D Explorer",
    description:
      "Immersive 3D space website with scroll-triggered scenes for exploring planets and constellations.",
    tech: ["Next.js", "Three.js"],
    category: "Websites",
    url: "https://3-d-space-explorer-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/5.png",
  },
  {
    id: "bella-vista",
    title: "Bella Vista Pizzeria",
    description:
      "Restaurant website for an Italian pizzeria, covering menu, hours, and location for walk-in and online visitors.",
    tech: ["Next.js", "Tailwind CSS"],
    category: "Websites",
    url: "https://bella-vista-pizzeria-git-main-samras-projects-c05660e5.vercel.app",
    year: "2026",
    image: "/a.jpg",
  },
]
