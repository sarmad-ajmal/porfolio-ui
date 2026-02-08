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
    title: "Senior Full Stack Engineer",
    company: "Aviation Technology Company",
    location: "Dubai, UAE (Remote)",
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
    company: "Software Solutions Company",
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
