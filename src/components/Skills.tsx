"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "FRONTEND",
    prefix: "ui",
    skills: ["React", "Next.js", "Vue", "Nuxt.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "Zustand"],
  },
  {
    title: "BACKEND",
    prefix: "api",
    skills: ["Node.js", "Nest.js", "ASP.NET Core", "Express.js", "GraphQL", "REST APIs", "gRPC", "Microservices"],
  },
  {
    title: "CLOUD & DEVOPS",
    prefix: "ops",
    skills: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "nginx", "Linux"],
  },
  {
    title: "DATA & STORAGE",
    prefix: "db",
    skills: ["PostgreSQL", "MongoDB", "MS SQL", "DynamoDB", "Redis", "Firebase"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "var(--t-bg)" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="t-section-header">[02 — SKILLS]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
            <h2 className="t-section-title text-4xl md:text-5xl lg:text-6xl">
              TECH.STACK
            </h2>
            <p className="t-section-subtitle mt-4 max-w-xl">
              A comprehensive toolkit spanning modern web technologies, cloud
              platforms, and scalable architectures.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border" style={{ borderColor: "var(--t-border)" }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="p-8 relative"
              style={{
                background: "var(--t-surface)",
                borderBottom: index < 2 ? "1px solid var(--t-border)" : "none",
                borderRight: index % 2 === 0 ? "1px solid var(--t-border)" : "none",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="font-mono text-xs font-bold tracking-widest"
                  style={{ color: "var(--t-cyan)" }}
                >
                  {category.prefix}://
                </span>
                <span className="font-mono text-lg font-bold" style={{ color: "var(--t-text)" }}>
                  {category.title}
                </span>
              </div>

              {/* Skills as terminal-style tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="t-tag"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: skillIndex * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{
                      borderColor: "var(--t-cyan)",
                      backgroundColor: "rgba(0,229,255,0.12)",
                      y: -2,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Corner index */}
              <span
                className="absolute top-4 right-4 font-mono text-[9px]"
                style={{ color: "var(--t-muted)" }}
              >
                [{String(index).padStart(2, "0")}]
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
          <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>// EOF</span>
        </div>
      </div>
    </section>
  );
}
