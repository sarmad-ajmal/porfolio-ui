"use client";

import { motion } from "framer-motion";
import { Greeting } from "./Greeting";
import { ArrowDown, Mail, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light-bg via-light-surface to-light-bg dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg">
      {/* Enhanced animated background with mesh gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Mesh gradient blobs */}
        <motion.div
          className="absolute top-0 left-0 w-[800px] h-[800px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(129, 140, 248, 0.3) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating geometric shapes with parallax */}
        <motion.div
          className="absolute top-20 left-[10%] w-32 h-32 border border-light-accent/20 dark:border-dark-accent/20 rounded-lg"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute bottom-32 right-[15%] w-24 h-24 border-2 border-light-accent-secondary/30 dark:border-dark-accent-secondary/30"
          style={{
            transform: `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)`,
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 15, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-16 h-16 rounded-full border border-light-accent/30 dark:border-dark-accent/30"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid overlay for tech feel */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Greeting />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mt-4 mb-6 relative">
            <span className="bg-gradient-to-r from-light-accent via-light-accent-secondary to-light-accent dark:from-dark-accent dark:via-dark-accent-secondary dark:to-dark-accent bg-clip-text text-transparent inline-block animate-gradient">
              Sarmad Ajmal
            </span>
            {/* Glitch effect layer */}
            <span
              className="absolute inset-0 bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent opacity-30 blur-sm"
              aria-hidden="true"
            >
              Sarmad Ajmal
            </span>
          </h1>
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl font-semibold text-light-text dark:text-dark-text mb-4 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Full-Stack Engineer · Cloud Architect · Problem Solver
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Building enterprise-grade SaaS applications with modern JavaScript,
          .NET, and AWS. 6+ years of architecting scalable solutions.
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center items-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-light-accent dark:bg-dark-accent text-white rounded-xl font-semibold overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Projects</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-light-accent-secondary to-light-accent dark:from-dark-accent-secondary dark:to-dark-accent"
              initial={{ x: "100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-4 border-2 border-light-accent dark:border-dark-accent text-light-accent dark:text-dark-accent rounded-xl font-semibold backdrop-blur-sm hover:bg-light-accent/10 dark:hover:bg-dark-accent/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center items-center mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <motion.a
            href="mailto:hola.sarmad@gmail.com"
            className="group relative p-3 rounded-full bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Email"
          >
            <Mail className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/sarmad-ajmal"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full bg-light-surface/50 dark:bg-dark-surface/50 backdrop-blur-sm border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 text-light-text-secondary dark:text-dark-text-secondary group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ArrowDown className="w-6 h-6 text-light-text-secondary/50 dark:text-dark-text-secondary/50" />
        </motion.div>
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.1) 2px, rgba(99, 102, 241, 0.1) 4px)",
        }}
        animate={{
          y: [0, -4],
        }}
        transition={{
          duration: 0.1,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </section>
  );
}
