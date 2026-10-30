import portrait from "@/assets/portrait.webp";
import webIllustration from "@/assets/web.webp";
import appIllustration from "@/assets/app.webp";
import serverIllustration from "@/assets/server.webp";
import chekbitP2p from "@/assets/chekbit-p2p.webp";
import chekbitWallets from "@/assets/chekbit-wallets.webp";
import chekbitHome from "@/assets/chekbit-home.webp";
import chekbitRelease from "@/assets/chekbit-release.webp";

export const profile = {
  name: "Shadrach Chukwukere",
  firstName: "Shadrach",
  role: "Lead Frontend & Mobile App Developer",
  location: "Nigeria",
  intro:
    "I build modern web applications, cross-platform mobile apps, and scalable digital products — from pixel-level UI to production-ready APIs.",
  email: "shadrachchukwukerechinemerem@gmail.com",
  phone: "+2349038030895",
  portrait: { src: portrait, alt: "Photo of Shadrach Chukwukere" },
  availability: "Available for new projects",
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/shadrach-chukwukere",
    handle: "shadrach-chukwukere",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shadrach-chukwukere-632290373/",
    handle: "shadrach-chukwukere",
  },
  { label: "X / Twitter", href: "https://x.com/ShadrachCh75389", handle: "@ShadrachCh75389" },
  { label: "npm", href: "https://www.npmjs.com/~chispecial", handle: "~chispecial" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const marqueeItems = [
  "React",
  "TypeScript",
  "React Native",
  "Expo",
  "FastAPI",
  "Python",
  "Supabase",
  "Next.js",
  "UI Engineering",
];

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  tags: string[];
  image: { src: string; alt: string };
}

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Fast, accessible and responsive interfaces built with React, Next.js and TypeScript. I translate designs into production components that hold up under real traffic.",
    deliverables: [
      "Design-to-code implementation",
      "Component libraries & design systems",
      "Performance & Core Web Vitals optimization",
      "Responsive, accessible layouts",
    ],
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    image: { src: webIllustration, alt: "Web development illustration" },
  },
  {
    id: "mobile",
    title: "Mobile Application Development",
    description:
      "Cross-platform iOS and Android apps with React Native and Expo — one codebase, native feel, and store-ready releases.",
    deliverables: [
      "React Native / Expo apps from scratch",
      "Navigation, gestures & native modules",
      "Offline-first data syncing",
      "Play Store & App Store submissions",
    ],
    tags: ["React Native", "Expo", "EAS", "iOS", "Android"],
    image: { src: appIllustration, alt: "Mobile app development illustration" },
  },
  {
    id: "backend",
    title: "Backend Development",
    description:
      "Pragmatic APIs and data layers with Python, FastAPI, Node.js and Supabase — auth, payments, realtime and everything a product needs behind the scenes.",
    deliverables: [
      "REST & realtime API design",
      "Authentication & authorization",
      "Database schema design",
      "Third-party integrations (payments, email)",
    ],
    tags: ["FastAPI", "Python", "Node.js", "Supabase", "PostgreSQL"],
    image: { src: serverIllustration, alt: "Backend server illustration" },
  },
  {
    id: "ui-engineering",
    title: "UI Engineering",
    description:
      "The bridge between design and code: motion, interaction states, and pixel-accurate polish that make products feel considered.",
    deliverables: [
      "Micro-interactions & page transitions",
      "Animation systems (GSAP, Reanimated)",
      "Design QA against Figma",
      "Accessibility audits",
    ],
    tags: ["GSAP", "Framer Motion", "Figma", "WCAG"],
    image: { src: chekbitP2p, alt: "Polished mobile UI from the Chekbit app" },
  },
  {
    id: "fullstack",
    title: "Full-Stack Development",
    description:
      "End-to-end product delivery: frontend, backend, infrastructure and release — a single developer who can take a feature from idea to production.",
    deliverables: [
      "Complete MVP builds",
      "CI/CD & Vercel deployments",
      "Environment & secret management",
      "Monitoring and post-launch iteration",
    ],
    tags: ["React", "FastAPI", "Supabase", "Vercel"],
    image: { src: chekbitWallets, alt: "Wallet screens from a full-stack crypto app" },
  },
];

export interface Project {
  id: string;
  name: string;
  year: string;
  summary: string;
  contribution: string;
  tech: string[];
  live?: string;
  github?: string;
  image?: { src: string; alt: string };
  status?: string;
}

export const projects: Project[] = [
  {
    id: "sabiflex",
    name: "SabiFlex",
    year: "2025",
    summary:
      "A learning platform product currently in development. Case study and screenshots coming soon.",
    contribution: "Full-stack development",
    tech: ["React", "TypeScript", "FastAPI"],
    status: "Coming soon",
  },
  {
    id: "chekbit",
    name: "Chekbit",
    year: "2025",
    summary:
      "Peer-to-peer crypto trading platform — buy, sell and send crypto with escrow-protected offers, realtime portfolios and dispute handling.",
    contribution:
      "Built the responsive marketing site and core product UI: P2P order flows, wallets, and escrow release screens.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    live: "https://chekbit.vercel.app/",
    image: { src: chekbitHome, alt: "Chekbit app home screen" },
  },
  {
    id: "crypto-trading-app",
    name: "Crypto Trading App",
    year: "2024",
    summary:
      "A crypto trading experience with realtime price charts, secure transactions and a full portfolio view across assets.",
    contribution: "Frontend architecture, charting UI and trading screens.",
    tech: ["React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/shadrach-chukwukere",
    image: { src: chekbitRelease, alt: "Crypto release screen of the trading app" },
  },
  {
    id: "huntgame",
    name: "HuntGame",
    year: "2024",
    summary:
      "A responsive social website that connects people, making companionship simple, safe and meaningful.",
    contribution: "Designed and built the responsive marketing website.",
    tech: ["React", "Tailwind CSS"],
    live: "https://hunt-game-pied.vercel.app/",
  },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Junior Frontend Developer",
    company: "Mortalweb",
    period: "2024 — Present",
    description:
      "Building and maintaining production web interfaces with a focus on component quality, responsiveness and performance.",
    highlights: [
      "Shipped responsive marketing pages and product UIs",
      "Translated Figma designs into reusable component systems",
      "Optimized load performance and layout stability across devices",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "Independent Software Developer",
    company: "Freelance & personal products",
    period: "2023 — Present",
    description:
      "Delivering end-to-end web and mobile products for clients and my own ideas — from architecture and API design to store releases.",
    highlights: [
      "Built Chekbit's P2P crypto trading interfaces and marketing site",
      "Developed cross-platform mobile apps with React Native and Expo",
      "Designed and shipped FastAPI backends with Supabase data layers",
    ],
    tech: ["React Native", "Expo", "FastAPI", "Supabase"],
  },
];

export const about = {
  headline: "Two years of shipping real products — web and mobile.",
  paragraphs: [
    "I'm a software engineer based in Nigeria with over two years of experience building web and mobile applications. I work across the stack but care most about the layer people actually touch — the interface.",
    "My day-to-day: React and TypeScript on the web, React Native and Expo on mobile, FastAPI and Supabase behind the scenes. I think about software architecture early, profile what's slow, and ship practical products rather than demos.",
  ],
  focusAreas: [
    "Frontend engineering",
    "Cross-platform mobile development",
    "Backend API development",
    "Software architecture",
    "Performance optimization",
    "Practical digital products",
  ],
};
