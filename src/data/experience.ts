export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Ophycare",
    location: "Islamabad, Pakistan",
    period: "Jan 2026 – Present",
    duration: "Present",
    highlights: [
      "Spearheading development of an Integrated Medical Record (IMR) platform using Next.js for unified patient data management across clinical workflows",
      "Building HIPAA-aware UI components with TypeScript and React, implementing role-based access controls and real-time data sync for multi-provider environments",
      "Optimizing Core Web Vitals through SSR, incremental static regeneration (ISR), and efficient client-side state management",
      "Collaborating with backend and clinical teams to translate complex healthcare workflows into intuitive interfaces",
    ],
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Click Aviation Network",
    location: "Dubai, UAE",
    period: "Feb 2023 - Apr 2025",
    duration: "2 years, 3 months",
    highlights: [
      "Architected aviation SaaS platforms using Nuxt.js and ASP.NET Core",
      "Reduced API response times by 40% through Redis caching implementation",
      "Optimized CI/CD pipelines, reducing deployment time by 60%",
      "Led integration of real-time features using WebSockets",
      "Wrote comprehensive unit and integration tests using Jest",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Bitsol Technologies",
    location: "Islamabad, Pakistan",
    period: "Jun 2019 - Jan 2023",
    duration: "3 years, 8 months",
    highlights: [
      "Led frontend development for multiple enterprise SaaS platforms",
      "Built scalable REST APIs using Nest.js and PostgreSQL",
      "Implemented real-time features with WebSockets and Agora",
      "Transitioned infrastructure to Kubernetes for container orchestration",
      "Developed CRM and MOOC platforms serving thousands of users",
    ],
  },
];
