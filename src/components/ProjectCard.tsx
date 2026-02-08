"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  impact: string;
}

export function ProjectCard({
  title,
  description,
  tech,
  impact,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group p-6 rounded-xl border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
          {title}
        </h3>
        <ExternalLink className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item) => (
          <span
            key={item}
            className="px-2 py-1 text-xs rounded bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="pt-4 border-t border-light-border dark:border-dark-border">
        <p className="text-sm font-medium text-light-accent dark:text-dark-accent">
          {impact}
        </p>
      </div>
    </motion.div>
  );
}
