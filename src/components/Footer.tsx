"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { Mail, Linkedin, Heart, Github, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 bg-gradient-to-b from-light-bg to-light-surface dark:from-dark-bg dark:to-dark-surface border-t border-light-border/50 dark:border-dark-border/50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl transform -translate-x-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent mb-2">
              {contact.name}
            </h3>
            <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
              {contact.title}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-light-text dark:text-dark-text mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-semibold text-light-text dark:text-dark-text mb-4 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-3 justify-center md:justify-end">
              <motion.a
                href={`mailto:${contact.email}`}
                className="p-3 rounded-xl bg-light-surface/50 dark:bg-dark-surface/50 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
              </motion.a>
              <motion.a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-light-surface/50 dark:bg-dark-surface/50 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
              </motion.a>
              <motion.a
                href="https://github.com/sarmad-ajmal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-light-surface/50 dark:bg-dark-surface/50 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
              </motion.a>
              <motion.a
                href="https://twitter.com/SarmadAjmal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-light-surface/50 dark:bg-dark-surface/50 border border-light-border/50 dark:border-dark-border/50 hover:border-light-accent dark:hover:border-dark-accent transition-all"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-light-border dark:via-dark-border to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-sm text-light-text-secondary dark:text-dark-text-secondary text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            © {currentYear} {contact.name}. All rights reserved.
          </motion.p>

          <motion.p
            className="text-sm text-light-text-secondary dark:text-dark-text-secondary flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Built with
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            using Next.js, TypeScript & Tailwind CSS
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
