"use client";

import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tech,
  impact,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      className={`group relative p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 ${
        featured
          ? "bg-gradient-to-br from-light-accent/10 via-light-surface/80 to-light-accent-secondary/10 dark:from-dark-accent/10 dark:via-dark-surface/80 dark:to-dark-accent-secondary/10 border-light-accent/30 dark:border-dark-accent/30 md:col-span-2"
          : "bg-light-surface/60 dark:bg-dark-surface/60 border-light-border/50 dark:border-dark-border/50"
      } hover:border-light-accent dark:hover:border-dark-accent hover:shadow-2xl hover:shadow-light-accent/20 dark:hover:shadow-dark-accent/20`}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Featured badge */}
      {featured && (
        <motion.div
          className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary text-white text-xs font-bold flex items-center gap-1 shadow-lg"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <Sparkles className="w-3 h-3" />
          Featured
        </motion.div>
      )}

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3
            className={`font-bold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors ${
              featured ? "text-3xl" : "text-2xl"
            }`}
          >
            {title}
          </h3>
          <motion.div
            className="p-2 rounded-lg bg-light-bg/50 dark:bg-dark-bg/50 opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ rotate: 45, scale: 1.1 }}
          >
            <ExternalLink className="w-5 h-5 text-light-accent dark:text-dark-accent" />
          </motion.div>
        </div>

        <p
          className={`text-light-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed ${
            featured ? "text-lg" : "text-base"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, index) => (
            <motion.span
              key={item}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-light-accent/10 dark:bg-dark-accent/10 text-light-accent dark:text-dark-accent border border-light-accent/20 dark:border-dark-accent/20 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="pt-4 border-t border-light-border/30 dark:border-dark-border/30">
          <p className="text-sm font-semibold bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent">
            ✨ {impact}
          </p>
        </div>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-light-accent/10 to-transparent dark:from-dark-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
