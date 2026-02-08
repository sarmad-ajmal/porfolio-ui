"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/contact";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
            Senior Full-Stack Developer with 6+ years of experience architecting scalable
            SaaS applications. Specialized in modern JavaScript ecosystems (React, Node.js,
            Nest.js) and .NET Core. AWS Certified Developer passionate about cloud-native
            solutions, DevOps automation, and building systems that solve real business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold text-light-accent dark:text-dark-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
