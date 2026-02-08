"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/contact";
import { TrendingUp, Award, Zap, Target } from "lucide-react";

const statIcons = [TrendingUp, Target, Award, Zap];

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-light-accent-secondary/10 to-transparent dark:from-dark-accent-secondary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-light-accent/10 to-transparent dark:from-dark-accent/10 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
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
            About Me
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-6 tracking-tight">
            Building the Future
          </h2>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mb-16 p-8 rounded-2xl backdrop-blur-md bg-light-surface/60 dark:bg-dark-surface/60 border border-light-border/50 dark:border-dark-border/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary leading-relaxed">
            Senior Full-Stack Developer with 6+ years of experience architecting
            scalable SaaS applications. Specialized in modern JavaScript
            ecosystems (React, Node.js, Nest.js) and .NET Core. AWS Certified
            Developer passionate about cloud-native solutions, DevOps automation,
            and building systems that solve real business problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = statIcons[index];
            return (
              <motion.div
                key={stat.label}
                className="group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br from-light-surface/80 to-light-bg/80 dark:from-dark-surface/80 dark:to-dark-bg/80 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-light-accent/10 via-transparent to-light-accent-secondary/10 dark:from-dark-accent/10 dark:to-dark-accent-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <motion.div
                  className="relative z-10 inline-flex p-3 rounded-xl bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary shadow-lg mb-4"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Value */}
                <div className="relative z-10 text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <div className="relative z-10 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
                  {stat.label}
                </div>

                {/* Corner decoration */}
                <motion.div
                  className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-light-accent/20 to-transparent dark:from-dark-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
