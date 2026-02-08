"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  // Mark first two projects as featured for asymmetric layout
  const featuredProjects = [projects[0], projects[1]];
  const regularProjects = projects.slice(2);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
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
            Portfolio
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4 tracking-tight">
            Featured Projects
          </h2>

          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            A selection of impactful projects demonstrating expertise in
            full-stack development, cloud architecture, and scalable system
            design.
          </p>
        </motion.div>

        {/* Featured Projects - Full width */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                impact={project.impact}
                featured={true}
              />
            </motion.div>
          ))}
        </div>

        {/* Regular Projects - Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={index === 0 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                impact={project.impact}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
