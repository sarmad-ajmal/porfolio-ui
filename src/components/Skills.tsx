"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      "React",
      "Next.js",
      "Vue",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
      "Zustand",
    ],
  },
  {
    title: "Backend Development",
    icon: Layers,
    skills: [
      "Node.js",
      "Nest.js",
      "ASP.NET Core",
      "Express.js",
      "GraphQL",
      "REST APIs",
      "gRPC",
      "Microservices",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "nginx",
      "Linux",
    ],
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MS SQL",
      "DynamoDB",
      "Redis",
      "Firebase",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-8 h-8 text-light-accent dark:text-dark-accent" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent border border-light-accent/20 dark:border-dark-accent/20 hover:scale-105 transition-transform cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
