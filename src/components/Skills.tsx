"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Layers } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-orange-500 to-red-500",
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
    color: "from-green-500 to-emerald-500",
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
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-light-surface dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-light-accent/10 dark:bg-dark-accent/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent text-sm font-semibold mb-4 border border-light-accent/20 dark:border-dark-accent/20"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            viewport={{ once: true }}
          >
            Skills & Technologies
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4 tracking-tight">
            Technical Expertise
          </h2>

          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            A comprehensive toolkit spanning modern web technologies, cloud
            platforms, and scalable architectures.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="group relative p-8 rounded-2xl backdrop-blur-md bg-light-bg/60 dark:bg-dark-bg/60 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated gradient background on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                initial={{ scale: 0, rotate: 0 }}
                animate={
                  hoveredCategory === index
                    ? { scale: 1.5, rotate: 45 }
                    : { scale: 0, rotate: 0 }
                }
                transition={{ duration: 0.6 }}
              />

              {/* Icon and title */}
              <div className="relative z-10 flex items-center gap-4 mb-6">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text">
                  {category.title}
                </h3>
              </div>

              {/* Skills with staggered animation */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className={`px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm border transition-all duration-300 ${
                      hoveredCategory === index
                        ? "bg-light-accent/20 dark:bg-dark-accent/20 text-light-accent dark:text-dark-accent border-light-accent/40 dark:border-dark-accent/40 shadow-lg"
                        : "bg-light-surface/50 dark:bg-dark-surface/50 text-light-text-secondary dark:text-dark-text-secondary border-light-border/30 dark:border-dark-border/30"
                    }`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: skillIndex * 0.05 }}
                    whileHover={{
                      scale: 1.15,
                      y: -4,
                      backgroundColor:
                        "rgba(var(--light-accent-rgb, 99, 102, 241), 0.2)",
                    }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Corner decoration */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl from-light-accent/10 to-transparent dark:from-dark-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
