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
    de: "Verfügbar für Vollzeitstelle ab Oktober 2026",
    en: "Available for full-time position from October 2026",
  },
  location: { de: "Dortmund, Deutschland", en: "Dortmund, Germany" },
};

export const education: {
  degree: Localized<string>;
  school: string;
  detail: Localized<string>;
  thesis: Localized<string>;
} = {
  degree: { de: "B.Sc. Informatik", en: "B.Sc. Computer Science" },
  school: "TU Dortmund",
  detail: {
    de: "6. Semester · Abschluss: September 2026",
    en: "6th semester · Graduating: September 2026",
  },
  thesis: {
    de: "Entwicklung und Evaluation eines graphbasierten Algorithmus zur automatischen Bestimmung von Deployment-Reihenfolgen in Microservice-Architekturen",
    en: "Development and evaluation of a graph-based algorithm for automatically determining deployment order in microservice architectures",
  },
};

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
    type: "job",
    title: { de: "Werkstudent Software & Product Architecture", en: "Working Student, Software & Product Architecture" },
    organization: "Wilo SE",
    period: { de: "März 2026 – heute", en: "March 2026 – present" },
    bullets: {
      de: [
        "JavaScript-Skripte für Siemens Polarion ALM entwickelt und gewartet",
        "KI-Automatisierung für interne Prozesse umgesetzt",
        "REST APIs und Dashboards für Engineering-Teams gebaut",
      ],
      en: [
        "Developed and maintained JavaScript scripts for Siemens Polarion ALM",
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
        "On track to graduate within standard program duration",
        "Bachelor's thesis: development and evaluation of a graph-based algorithm for automatically determining deployment order in microservice architectures",
      ],
    },
  },
  {
    type: "job",
    title: { de: "Mitarbeiter", en: "Employee" },
    organization: "Deutsche Post AG",
    period: { de: "Juni 2023 – heute", en: "June 2023 – present" },
    bullets: {
      de: ["Nebenjob zur Studienfinanzierung neben dem Informatikstudium"],
      en: ["Part-time job to finance studies alongside the computer science degree"],
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
};

export const projects: Project[] = [
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
    liveUrl: "https://mohammadzein-flavorhaus.netlify.app/",
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
    items: ["React", "Spring Boot", "Next.js", "REST APIs"],
  },
  {
    category: { de: "DevOps", en: "DevOps" },
    items: ["Git", "Docker", "Kubernetes", "Maven", "Gradle", "CI/CD", "Azure"],
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
  { name: "Microsoft Azure Administrator (AZ-204)", status: { de: "In Vorbereitung", en: "In progress" } },
];
