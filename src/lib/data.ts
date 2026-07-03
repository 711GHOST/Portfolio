/**
 * Single source of truth for all portfolio content.
 * Editing your resume? You (almost) only ever need to touch this file.
 */

import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Database,
  Cloud,
  BarChart3,
  Cpu,
  Boxes,
  GitBranch,
  Sparkles,
  Trophy,
} from "lucide-react";

export const PROFILE = {
  name: "Shwetanshu Sood",
  firstName: "Shwetanshu",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Scientist",
    "Full Stack Developer",
  ],
  tagline: "I build AI systems that feel like the future.",
  intro:
    "Enterprise-grade software engineer at TCS by day, cutting-edge AI researcher by night. I turn messy data and hard problems into products that feel effortless.",
  email: "shwetanshusood9102001@gmail.com",
  location: "India",
  socials: {
    github: "https://github.com/711GHOST",
    linkedin: "https://linkedin.com/in/shwetanshu-sood",
    twitter: "https://x.com/shwetanshu_23",
    resume: "/resume.pdf",
  },
};

export interface SkillNode {
  name: string;
  icon: LucideIcon;
  color: string; // hex used for the neon glow
  category: string;
}

export const SKILLS: SkillNode[] = [
  { name: "Python", icon: Code2, color: "#22d3ee", category: "Languages" },
  { name: "C / C++", icon: Cpu, color: "#3b82f6", category: "Languages" },
  { name: "JavaScript / TS", icon: Code2, color: "#a855f7", category: "Languages" },
  { name: "DSA", icon: GitBranch, color: "#22d3ee", category: "Foundations" },
  { name: "Machine Learning", icon: Brain, color: "#a855f7", category: "AI / ML" },
  { name: "Deep Learning", icon: Brain, color: "#ec4899", category: "AI / ML" },
  { name: "TensorFlow", icon: Boxes, color: "#3b82f6", category: "AI / ML" },
  { name: "PyTorch", icon: Boxes, color: "#ec4899", category: "AI / ML" },
  { name: "NLP / GenAI", icon: Sparkles, color: "#22d3ee", category: "AI / ML" },
  { name: "Data Science", icon: BarChart3, color: "#3b82f6", category: "Data" },
  { name: "SQL", icon: Database, color: "#22d3ee", category: "Data" },
  { name: "MongoDB", icon: Database, color: "#a855f7", category: "Data" },
  { name: "Flask / REST", icon: Code2, color: "#3b82f6", category: "Backend" },
  { name: "React / MERN", icon: Boxes, color: "#22d3ee", category: "Full Stack" },
  { name: "GCP / Azure", icon: Cloud, color: "#a855f7", category: "Cloud" },
  { name: "Power BI / Tableau", icon: BarChart3, color: "#ec4899", category: "Data" },
];

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
}

export const ABOUT_TIMELINE: TimelineItem[] = [
  {
    year: "Origin",
    title: "Curiosity → Code",
    subtitle: "The Foundation",
    description:
      "Started with C/C++ and data structures, obsessing over how systems really work under the hood.",
  },
  {
    year: "Growth",
    title: "AI & Data Science",
    subtitle: "The Specialization",
    description:
      "Dove into machine learning, deep learning and generative AI - building models that see, read and reason.",
  },
  {
    year: "2024-25",
    title: "Enterprise Scale",
    subtitle: "Software Engineer @ TCS",
    description:
      "Automated large-scale data pipelines and reporting for enterprise clients - earned the TCS Gems Award.",
  },
  {
    year: "Now",
    title: "Building the Future",
    subtitle: "AI Product Engineer",
    description:
      "Shipping full-stack AI products - from emotion-aware music to autonomous research agents.",
  },
];

export interface ExperienceContribution {
  title: string;
  detail: string;
}

export const EXPERIENCE = {
  company: "Tata Consultancy Services (TCS)",
  role: "Software Engineer",
  location: "Noida, Uttar Pradesh",
  duration: "June 2024 - July 2025",
  short: "TCS",
  contributions: [
    {
      title: "Automated Data Pipelines",
      detail:
        "Designed and automated large-scale data analysis pipelines in Python using python-docx and openpyxl to generate statistical & efficacy reports in Excel, improving reporting efficiency by ~40%.",
    },
    {
      title: "Enterprise Data Validation",
      detail:
        "Extracted, cleaned, analyzed and validated enterprise-scale datasets from SQL Server and Microsoft Azure Synapse, enabling business teams to make data-driven decisions with 95% accuracy.",
    },
    {
      title: "Template-Agnostic Automation",
      detail:
        "Developed dynamic Python automation scripts capable of handling multiple reporting formats, reducing manual intervention by ~60%.",
    },
    {
      title: "TCS Gems Award",
      detail:
        "Recognized with the TCS Gems Award for outstanding performance and delivering high-value solutions under tight deadlines.",
    },
  ] as ExperienceContribution[],
  stats: [
    { value: 40, suffix: "%", label: "Efficiency Boost" },
    { value: 60, suffix: "%", label: "Manual Reduction" },
    { value: 95, suffix: "%", label: "Data Accuracy" },
  ],
  stack: [
    "Python",
    "SQL Server",
    "Azure Synapse",
    "Excel Automation",
    "Data Pipelines",
    "Data Analytics",
    "Reporting Automation",
  ],
};

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: string; // hex glow
  featured: boolean;
  github?: string;
  demo?: string;
  highlights: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "moodwave",
    title: "MoodWave Music Matcher",
    tagline: "Facial emotion → the perfect soundtrack",
    description:
      "An AI-powered platform that detects facial emotion in real time and recommends music that matches your mood - built on the MERN stack with a deep-learning emotion engine.",
    tech: ["MERN", "Deep Learning", "CNN", "TensorFlow", "React", "Node.js"],
    accent: "#22d3ee",
    featured: true,
    github: "https://github.com/711GHOST/MoodWave-MusicMatcher",
    demo: "https://moodwave-iota.vercel.app/",
    highlights: [
      "Real-time facial emotion detection via CNN",
      "Personalized recommendation engine",
      "Full MERN architecture with live inference",
    ],
  },
  {
    id: "jarvis",
    title: "JARVIS",
    tagline: "A voice-first personal AI assistant",
    description:
      "A modular voice assistant that understands natural language, executes system tasks, answers questions and automates your workflow - your own Iron-Man-grade copilot.",
    tech: ["Python", "NLP", "Speech Recognition", "LLMs", "Automation"],
    accent: "#a855f7",
    featured: true,
    github: "https://github.com/711GHOST",
    demo: "#",
    highlights: [
      "Natural-language command understanding",
      "Voice I/O with wake-word detection",
      "Extensible skill / plugin system",
    ],
  },
  {
    id: "research-agent",
    title: "Research Scholar Agent",
    tagline: "An autonomous agent that reads the literature for you",
    description:
      "An agentic system that searches, reads and synthesizes academic papers, producing structured literature reviews and citations - accelerating research from days to minutes.",
    tech: ["LangChain", "LLMs", "Agents", "RAG", "Python"],
    accent: "#3b82f6",
    featured: true,
    github: "https://github.com/Research-Scholar-Agent",
    demo: "#",
    highlights: [
      "Autonomous multi-step research loop",
      "Grounded, citation-backed answers",
      "Tool-using agent architecture",
    ],
  },
  {
    id: "rag-system",
    title: "RAG-based Knowledge System",
    tagline: "Chat with your own documents, grounded in truth",
    description:
      "A production-style retrieval-augmented generation system that grounds LLM answers in your private knowledge base with vector search and re-ranking - no hallucinations.",
    tech: ["RAG", "Vector DB", "Embeddings", "LLMs", "Flask"],
    accent: "#ec4899",
    featured: true,
    github: "https://github.com/711GHOST/Assessment_Track_B",
    demo: "https://assessment-track-b.vercel.app/",
    highlights: [
      "Semantic vector retrieval + re-ranking",
      "Source-grounded generation",
      "Pluggable document ingestion pipeline",
    ],
  },
  {
    id: "brain-tumor",
    title: "Brain Tumor Detection & Segmentation",
    tagline: "Medical imaging AI that localizes tumors",
    description:
      "A deep-learning pipeline that detects and segments brain tumors from MRI scans, delivering pixel-level masks to support clinical decisions.",
    tech: ["U-Net", "CNN", "PyTorch", "Medical Imaging", "Segmentation"],
    accent: "#22d3ee",
    featured: false,
    github: "https://github.com/711GHOST/Brain-Tumor-Detection",
    highlights: [
      "U-Net segmentation with pixel-level masks",
      "Robust preprocessing for MRI scans",
    ],
  },
  {
    id: "smart-ats",
    title: "Smart ATS Resume Checker",
    tagline: "Beat the bots - optimize your resume with AI",
    description:
      "An NLP tool that scores resumes against job descriptions, surfacing keyword gaps and ATS-compatibility issues with actionable suggestions.",
    tech: ["NLP", "GenAI", "Python", "Streamlit"],
    accent: "#a855f7",
    featured: false,
    github: "https://github.com/711GHOST/Gemini-Google-End-to-End-Projects",
    highlights: [
      "JD ↔ resume semantic matching",
      "Actionable keyword-gap analysis",
    ],
  },
  {
    id: "whatsapp-analysis",
    title: "WhatsApp Chat Analysis",
    tagline: "Turn chat exports into rich insights",
    description:
      "A data-analytics dashboard that parses WhatsApp exports to reveal activity patterns, sentiment, emoji usage and the most active participants.",
    tech: ["Python", "Pandas", "NLP", "Data Viz", "Streamlit"],
    accent: "#3b82f6",
    featured: false,
    github: "https://github.com/711GHOST/Gemini-Google-End-to-End-Projects",
    highlights: [
      "Timeline, sentiment & emoji analytics",
      "Interactive visual dashboard",
    ],
  },
];

export interface Achievement {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Trophy,
    title: "Top 30 - Amazon ML Challenge",
    description:
      "Ranked in the top 30 among thousands of participants in Amazon's flagship machine-learning competition.",
  },
  {
    icon: Sparkles,
    title: "National Hackathon Representative",
    description:
      "Represented the university across multiple national-level hackathons, shipping under intense time pressure.",
  },
  {
    icon: Brain,
    title: "Machine Learning Champion",
    description:
      "Recognized as a Machine Learning Champion for consistent excellence in applied ML projects.",
  },
];

export const COUNTERS = [
  { value: 30, prefix: "Top ", suffix: "", label: "Amazon ML Challenge" },
  { value: 7, prefix: "", suffix: "+", label: "Shipped Projects" },
  { value: 40, prefix: "", suffix: "%", label: "Efficiency Gains @ TCS" },
  { value: 3, prefix: "", suffix: "", label: "Major Awards" },
];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
