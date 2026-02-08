"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-light-accent dark:border-dark-accent last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-light-accent dark:bg-dark-accent border-4 border-light-surface dark:border-dark-surface" />

              {/* Timeline icon */}
              <div className="absolute -left-[17px] top-8 w-8 h-8 rounded-full bg-light-accent/10 dark:bg-dark-accent/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-light-accent dark:text-dark-accent" />
              </div>

              <div className="ml-4">
                <h3 className="text-2xl font-bold text-light-text dark:text-dark-text mb-1">
                  {exp.title}
                </h3>
                <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-1">
                  {exp.company} · {exp.location}
                </p>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4">
                  {exp.period} · {exp.duration}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-light-accent dark:text-dark-accent mt-1.5 text-lg">
                        •
                      </span>
                      <span className="text-light-text-secondary dark:text-dark-text-secondary">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
