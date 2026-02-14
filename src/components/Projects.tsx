"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const featuredProjects = [projects[0], projects[1]];
  const regularProjects = projects.slice(2);

  return (
    <section
      id="projects"
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "var(--t-surface-alt)" }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="t-section-header">[03 — PROJECTS]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
            <h2 className="t-section-title text-4xl md:text-5xl lg:text-6xl">
              ./PROJECTS
            </h2>
            <p className="t-section-subtitle mt-4 max-w-xl">
              A selection of impactful projects demonstrating expertise in
              full-stack development and cloud architecture.
            </p>
          </div>
        </motion.div>

        {/* Featured */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px mb-px" style={{ background: "var(--t-border)" }}>
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                impact={project.impact}
                featured={true}
                index={index}
              />
            </motion.div>
          ))}
        </div>

        {/* Regular — 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "var(--t-border)" }}>
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                impact={project.impact}
                index={index + 2}
              />
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
