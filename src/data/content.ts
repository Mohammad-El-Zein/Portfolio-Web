import { BASE_PATH } from "@/lib/base-path";

export type Localized<T> = { de: T; en: T };

export const personal = {
  name: "Mohammad El Zein",
  email: "mhmdzein70781311@gmail.com",
  github: "https://github.com/Mohammad-El-Zein",
  linkedin: "https://www.linkedin.com/in/mohammad-el-zein1",
  role: "Junior Software Engineer / DevOps / AI Engineer",
  resumeUrl: `${BASE_PATH}/Lebenslauf.pdf`,
};

export const personalText: {
  availability: Localized<string>;
  location: Localized<string>;
} = {
  availability: {
    de: "Offen für eine Vollzeitstelle",
    en: "Open to a full-time position",
  },
  location: { de: "Dortmund, Deutschland", en: "Dortmund, Germany" },
};

export type EducationItem = {
  degree: Localized<string>;
  school: string;
  detail: Localized<string>;
  thesis?: Localized<string>;
};

export const education: EducationItem[] = [
  {
    degree: { de: "M.Sc. Informatik", en: "M.Sc. Computer Science" },
    school: "TU Dortmund",
    detail: { de: "Seit Oktober 2026", en: "Since October 2026" },
  },
  {
    degree: { de: "B.Sc. Informatik", en: "B.Sc. Computer Science" },
    school: "TU Dortmund",
    detail: {
      de: "Oktober 2023 – September 2026 · Abschluss in Regelstudienzeit",
      en: "October 2023 – September 2026 · Completed within standard program duration",
    },
    thesis: {
      de: "Entwicklung und Evaluation eines graphbasierten Algorithmus zur automatischen Bestimmung von Deployment-Reihenfolgen in Microservice-Architekturen",
      en: "Development and evaluation of a graph-based algorithm for automatically determining deployment order in microservice architectures",
    },
  },
];

export type ExperienceType = "job" | "education" | "internship";

export type ExperienceItem = {
  type: ExperienceType;
  title: Localized<string>;
  organization: string;
  location?: Localized<string>;
  period: Localized<string>;
  bullets: Localized<string[]>;
  tools?: Localized<string[]>;
};

export const experience: ExperienceItem[] = [
  {
    type: "education",
    title: { de: "Master of Science – Informatik", en: "Master of Science – Computer Science" },
    organization: "TU Dortmund",
    period: { de: "Oktober 2026 – heute", en: "October 2026 – present" },
    bullets: {
      de: [
        "Masterstudium nach erfolgreichem Bachelorabschluss",
        "Parallel Werkstudent bei Wilo SE",
      ],
      en: [
        "Master's program following the successful completion of the bachelor's degree",
        "Working student at Wilo SE alongside the program",
      ],
    },
  },
  {
    type: "job",
    title: {
      de: "Werkstudent Software Product Architecture & Platform Management",
      en: "Working Student, Software Product Architecture & Platform Management",
    },
    organization: "Wilo SE",
    period: { de: "März 2026 – heute", en: "March 2026 – present" },
    bullets: {
      de: [
        "JavaScript-Skripte für Siemens Polarion ALM entwickelt und gewartet, die unternehmensweit von allen Nutzern des Systems verwendet werden",
        "KI-Automatisierung für interne Prozesse umgesetzt",
        "REST APIs und Dashboards für Engineering-Teams gebaut",
      ],
      en: [
        "Developed and maintained JavaScript scripts for Siemens Polarion ALM, used company-wide by all users of the system",
        "Implemented AI automation for internal processes",
        "Built REST APIs and dashboards for engineering teams",
      ],
    },
    tools: {
      de: ["JavaScript", "Polarion (Lucene, Velocity, SQL)", "Cameo Systems Modeler", "KI", "VBA"],
      en: ["JavaScript", "Polarion (Lucene, Velocity, SQL)", "Cameo Systems Modeler", "AI", "VBA"],
    },
  },
  {
    type: "job",
    title: { de: "Software Praktikum", en: "Software Internship (University Project)" },
    organization: "TU Dortmund",
    period: { de: "Feb 2026 – Apr 2026", en: "Feb 2026 – Apr 2026" },
    bullets: {
      de: [
        "Zwei Spiele mit KI-Gegnern und Netzwerk-Multiplayer entwickelt (Kotlin, BGW Framework)",
        "UML-Modellierung, Testing und Versionskontrolle im Team",
      ],
      en: [
        "Developed two games with AI opponents and network multiplayer (Kotlin, BGW Framework)",
        "UML modeling, testing, and version control within a team",
      ],
    },
    tools: {
      de: ["Kotlin", "BGW Framework", "UML", "Git/GitLab", "JUnit 5"],
      en: ["Kotlin", "BGW Framework", "UML", "Git/GitLab", "JUnit 5"],
    },
  },
  {
    type: "education",
    title: { de: "Bachelor of Science – Informatik", en: "Bachelor of Science – Computer Science" },
    organization: "TU Dortmund",
    period: {
      de: "Oktober 2023 – September 2026 (Regelstudienzeit)",
      en: "October 2023 – September 2026 (standard program duration)",
    },
    bullets: {
      de: [
        "Abschluss in Regelstudienzeit",
        "Bachelorarbeit: Entwicklung und Evaluation eines graphbasierten Algorithmus zur automatischen Bestimmung von Deployment-Reihenfolgen in Microservice-Architekturen",
      ],
      en: [
        "Graduated within standard program duration",
        "Bachelor's thesis: development and evaluation of a graph-based algorithm for automatically determining deployment order in microservice architectures",
      ],
    },
  },
  {
    type: "job",
    title: { de: "Aushilfe (Wochenende)", en: "Weekend Part-time Worker" },
    organization: "Deutsche Post AG",
    period: { de: "Juni 2023 – heute", en: "June 2023 – present" },
    bullets: {
      de: [
        "Seit 2023 Nebenjob zur Finanzierung des Studiums",
        "Heute als Wochenend-Aushilfe parallel zu Masterstudium und Werkstudentenstelle",
      ],
      en: [
        "Part-time job since 2023 to finance my studies",
        "Now working weekends alongside my master's program and working student position",
      ],
    },
  },
  {
    type: "internship",
    title: { de: "Praktikant im Bereich Webentwicklung", en: "Web Development Intern" },
    organization: "Rafik Hariri University Hospital",
    location: { de: "Beirut, Libanon", en: "Beirut, Lebanon" },
    period: { de: "Januar 2022 – April 2022 (4 Monate)", en: "January 2022 – April 2022 (4 months)" },
    bullets: {
      de: ["Unterstützung der Back-End-Webentwicklung im Klinikumfeld"],
      en: ["Supported back-end web development in a hospital environment"],
    },
    tools: {
      de: ["SQL", "Java", "Back-End-Webentwicklung"],
      en: ["SQL", "Java", "Back-end Web Development"],
    },
  },
];

export type Project = {
  title: Localized<string>;
  description: Localized<string>;
  highlights: Localized<string[]>;
  stack: string[];
  liveUrl?: string;
  githubUrl?: string;
  /** Shown as the large highlighted card at the top of the projects section. */
  featured?: boolean;
  /** Optional preview screenshot, e.g. `${BASE_PATH}/images/projects/lifedash.png`. */
  image?: string;
};

export const projects: Project[] = [
  {
    title: { de: "LifeDash – Persönliches Life Dashboard", en: "LifeDash – Personal Life Dashboard" },
    description: {
      de: "Full-Stack-Dashboard für Kalender, Finanzen, Fitness, Mahlzeiten, Bewerbungen, Lernziele und Gewohnheiten an einem Ort — API-first gebaut und in der Azure Cloud deployt.",
      en: "A full-stack dashboard for calendar, finances, fitness, meals, job applications, learning goals and habits in one place — built API-first and deployed to the Azure cloud.",
    },
    highlights: {
      de: [
        "FastAPI-Backend mit PostgreSQL, Alembic-Migrationen und JWT-Authentifizierung",
        "Angular-Frontend (Standalone Components, Signals) mit Tailwind CSS",
        "KI-Features mit der Anthropic API: Quick Capture per Sprache/Text und tägliche Life Insights",
        "CI/CD mit GitHub Actions, Docker und Azure Container Apps (Infrastructure as Code mit Bicep)",
      ],
      en: [
        "FastAPI backend with PostgreSQL, Alembic migrations and JWT authentication",
        "Angular frontend (standalone components, signals) with Tailwind CSS",
        "AI features with the Anthropic API: voice/text quick capture and daily life insights",
        "CI/CD with GitHub Actions, Docker and Azure Container Apps (infrastructure as code with Bicep)",
      ],
    },
    stack: ["Python", "FastAPI", "Angular", "TypeScript", "PostgreSQL", "Docker", "Azure", "GitHub Actions", "Anthropic API"],
    liveUrl: "https://lifedash.elzein.dev",
    featured: true,
    image: `${BASE_PATH}/images/projects/lifedash.webp`,
    githubUrl: "https://github.com/Mohammad-El-Zein/lifedash",
  },
  {
    title: { de: "Full-Stack Restaurant Website", en: "Full-Stack Restaurant Website" },
    description: {
      de: "Vollständige Restaurant-Webanwendung mit Online-Bestellung, Zahlungsabwicklung und einem KI-gestützten Kalorienrechner.",
      en: "A complete restaurant web application with online ordering, payment processing, and an AI-powered calorie calculator.",
    },
    highlights: {
      de: [
        "Online-Bestellsystem mit Stripe-Zahlungsabwicklung",
        "KI-Kalorienrechner für Menüpunkte",
        "Responsives Frontend mit React, REST-Backend mit Spring Boot",
      ],
      en: [
        "Online ordering system with Stripe payment processing",
        "AI-powered calorie calculator for menu items",
        "Responsive React frontend with a Spring Boot REST backend",
      ],
    },
    stack: ["React", "Spring Boot", "MongoDB", "Stripe", "OpenAI API", "Java", "JavaScript"],
    liveUrl: "https://flavorhaus.elzein.dev",
    image: `${BASE_PATH}/images/projects/flavorhaus.webp`,
  },
  {
    title: { de: "Deployment Analyzer", en: "Deployment Analyzer" },
    description: {
      de: "Bachelorarbeit-Projekt: Tool zur automatischen Bestimmung von Deployment-Reihenfolgen in Microservice-Architekturen mittels Graphalgorithmen.",
      en: "Bachelor's thesis project: a tool for automatically determining deployment order in microservice architectures using graph algorithms.",
    },
    highlights: {
      de: [
        "Implementiert: Kahn, DFS, Tarjan, FAS, Level-BFS",
        "Analyse von Abhängigkeitsgraphen zur Ableitung optimaler Deployment-Reihenfolgen",
      ],
      en: [
        "Implemented: Kahn, DFS, Tarjan, FAS, Level-BFS",
        "Analysis of dependency graphs to derive optimal deployment orders",
      ],
    },
    stack: ["Java 21", "Maven"],
    githubUrl: "https://github.com/Mohammad-El-Zein/deployment-analyzer",
  },
  {
    title: { de: "DevOps CI/CD Pipelines", en: "DevOps CI/CD Pipelines" },
    description: {
      de: "Node.js-Service, der eine produktionsreife CI/CD-Pipeline mit GitHub Actions demonstriert — von Linting und Tests bis zu Security-Scans und automatisierten Releases.",
      en: "A Node.js service demonstrating a production-grade CI/CD pipeline with GitHub Actions — from linting and tests to security scans and automated releases.",
    },
    highlights: {
      de: [
        "Test-Matrix (Node 20/22/24) mit Coverage-Gate (≥ 80 %)",
        "Security: CodeQL, Trivy-Image-Scan, npm audit und Dependabot",
        "Multi-Stage Docker-Image, Push nach GHCR und semantische Releases",
      ],
      en: [
        "Test matrix (Node 20/22/24) with a coverage gate (≥ 80%)",
        "Security: CodeQL, Trivy image scan, npm audit and Dependabot",
        "Multi-stage Docker image, publishing to GHCR and semantic releases",
      ],
    },
    stack: ["GitHub Actions", "Docker", "Node.js", "CodeQL", "Trivy", "GHCR"],
    githubUrl: "https://github.com/Mohammad-El-Zein/devops-pipelines",
  },
  {
    title: { de: "Blokus Brettspiel", en: "Blokus Board Game" },
    description: {
      de: "Digitale Umsetzung des Brettspiels Blokus mit KI-Gegnern und Netzwerk-Multiplayer.",
      en: "Digital implementation of the Blokus board game with AI opponents and network multiplayer.",
    },
    highlights: {
      de: ["KI-Gegner mit eigener Spielstrategie", "Netzwerk-Multiplayer für mehrere Spieler"],
      en: ["AI opponents with their own playing strategy", "Network multiplayer for multiple players"],
    },
    stack: ["Kotlin", "BGW Framework", "JUnit 5"],
    githubUrl: "https://github.com/Mohammad-El-Zein/Blokus-Game",
  },
  {
    title: { de: "Schiebe-Poker Kartenspiel", en: "Schiebe-Poker Card Game" },
    description: {
      de: "Vollständiges Kartenspiel für 2–4 Spieler mit Standard-Poker-Wertung, entwickelt mit klarer Schichtenarchitektur.",
      en: "A complete card game for 2–4 players with standard poker scoring, built with a clean layered architecture.",
    },
    highlights: {
      de: [
        "Hotseat-Modus mit Privatsphäre-Screen und Abschluss-Ranking",
        "Saubere Architektur: Entity, Service (Spiellogik), GUI",
        "Unit-Tests mit JUnit 5",
      ],
      en: [
        "Hotseat mode with a privacy screen and a final ranking",
        "Clean architecture: entity, service (game logic), GUI",
        "Unit tests with JUnit 5",
      ],
    },
    stack: ["Kotlin", "Gradle", "BGW Framework", "JUnit 5"],
    githubUrl: "https://github.com/Mohammad-El-Zein/Schiebe-Poker-game",
  },
];

export type SkillGroup = {
  category: Localized<string>;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: { de: "Sprachen", en: "Languages" },
    items: ["Java", "JavaScript", "TypeScript", "Python", "Kotlin", "SQL", "C++", "HTML/CSS"],
  },
  {
    category: { de: "Frameworks", en: "Frameworks" },
    items: ["React", "Angular", "Next.js", "Spring Boot", "FastAPI", "REST APIs", "Tailwind CSS"],
  },
  {
    category: { de: "Datenbanken", en: "Databases" },
    items: ["PostgreSQL", "MongoDB", "SQLAlchemy", "Alembic"],
  },
  {
    category: { de: "DevOps & CI/CD", en: "DevOps & CI/CD" },
    items: ["Git", "GitHub Actions", "Docker", "Docker Compose", "Kubernetes", "Maven", "Gradle"],
  },
  {
    category: { de: "Cloud", en: "Cloud" },
    items: ["Azure", "Azure Container Apps", "Bicep (IaC)", "GHCR"],
  },
  {
    category: { de: "KI", en: "AI" },
    items: ["Anthropic API", "OpenAI API", "AI Automation"],
  },
];

export const languages: { name: Localized<string>; level: Localized<string> }[] = [
  { name: { de: "Deutsch", en: "German" }, level: { de: "C1", en: "C1" } },
  { name: { de: "Englisch", en: "English" }, level: { de: "B2", en: "B2" } },
  { name: { de: "Arabisch", en: "Arabic" }, level: { de: "Muttersprache", en: "Native speaker" } },
  { name: { de: "Französisch", en: "French" }, level: { de: "B1", en: "B1" } },
];

export const certifications: { name: string; status: Localized<string> }[] = [
  { name: "Microsoft Azure Fundamentals (AZ-900)", status: { de: "Zertifiziert", en: "Certified" } },
  { name: "Microsoft Azure Administrator (AZ-104)", status: { de: "In Vorbereitung", en: "In progress" } },
];
