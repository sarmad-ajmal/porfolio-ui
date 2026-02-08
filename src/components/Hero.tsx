"use client";

import { motion } from "framer-motion";
import { Greeting } from "./Greeting";
import { ArrowDown, Mail, Linkedin } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-bg to-light-surface dark:from-dark-bg dark:to-dark-surface">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-light-accent dark:bg-dark-accent opacity-10 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-accent-secondary dark:bg-dark-accent-secondary opacity-10 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Greeting />

        <motion.h1
          className="text-5xl md:text-7xl font-bold mt-4 mb-6 bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sarmad Ajmal
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-semibold text-light-text dark:text-dark-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Full-Stack Engineer · Cloud Architect · Problem Solver
        </motion.p>

        <motion.p
          className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Building enterprise-grade SaaS applications with modern JavaScript,
          .NET, and AWS. 6+ years of architecting scalable solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-lg font-medium hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 border-2 border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent rounded-lg font-medium hover:scale-105 transition-transform"
          >
            Get in Touch
          </button>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="mailto:hola.sarmad@gmail.com"
            className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sarmad-ajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDown className="w-8 h-8 text-light-text-secondary dark:text-dark-text-secondary" />
        </motion.div>
      </div>
    </section>
  );
}
