"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-light-surface dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            Career Journey
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4 tracking-tight">
            Work Experience
          </h2>

          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Building scalable solutions and leading development teams across
            diverse industries.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent" />

          {/* Experience entries */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-6 top-0 w-5 h-5 rounded-full bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary shadow-lg border-4 border-light-surface dark:border-dark-surface z-10"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(99, 102, 241, 0.4)",
                      "0 0 0 10px rgba(99, 102, 241, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />

                {/* Content card */}
                <motion.div
                  className="group p-6 rounded-2xl backdrop-blur-md bg-light-bg/60 dark:bg-dark-bg/60 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-500"
                  whileHover={{ y: -5, scale: 1.01 }}
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-light-accent/10 dark:bg-dark-accent/10 border border-light-accent/20 dark:border-dark-accent/20">
                      <Calendar className="w-4 h-4 text-light-accent dark:text-dark-accent" />
                      <span className="text-sm font-medium text-light-accent dark:text-dark-accent">
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 italic">
                    {exp.period}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-light-text-secondary dark:text-dark-text-secondary"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
