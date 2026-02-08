export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  impact: string;
}

export const projects: Project[] = [
  {
    id: "enterprise-collab",
    title: "Enterprise Collaboration Platform",
    description:
      "Real-time communication and productivity platform for large organizations featuring messaging, video conferencing, and team scheduling with high concurrency support.",
    tech: [
      "React.js",
      "Nest.js",
      "WebSockets",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
    role: "Full-Stack Lead",
    impact: "Delivered scalable solution supporting 99.9% uptime",
  },
  {
    id: "aviation-management",
    title: "Aviation Management System",
    description:
      "Comprehensive SaaS platform for aviation operations and booking management with real-time flight tracking and external data integration.",
    tech: [
      "Nuxt.js",
      ".NET Core",
      "MS SQL",
      "Azure Functions",
      "Docker",
      "Redis",
    ],
    role: "Senior Full-Stack Engineer",
    impact:
      "Reduced response times by 40% and deployment time by 60% through optimization",
  },
  {
    id: "sales-productivity",
    title: "Sales Productivity Tool",
    description:
      "Workflow automation platform featuring call tracking, real-time analytics, and calendar integration to boost sales team efficiency.",
    tech: ["Next.js", "Express.js", "MongoDB", "AWS Lambda", "Node.js"],
    role: "Full-Stack Developer",
    impact: "Increased team efficiency by 28% and reduced client no-shows",
  },
  {
    id: "healthcare-management",
    title: "Healthcare Management System",
    description:
      "National-scale health data platform for pandemic response with real-time contact tracing and secure lab data synchronization.",
    tech: [
      "React.js",
      "Firebase",
      "Cloud Functions",
      "Real-time Database",
      "TypeScript",
    ],
    role: "Lead Developer",
    impact: "Enabled coordinated outbreak management at national scale",
  },
  {
    id: "crm-solution",
    title: "Customer Relationship Management",
    description:
      "Custom CRM solution for lead management and pipeline tracking with real-time analytics and automated follow-ups.",
    tech: [
      "React.js",
      "Nest.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "Redis",
    ],
    role: "Backend & Frontend Developer",
    impact: "Improved sales productivity and client retention rates",
  },
];
