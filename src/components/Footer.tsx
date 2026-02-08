"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { Mail, Linkedin, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 bg-light-bg dark:bg-dark-bg border-t border-light-border dark:border-dark-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-light-text-secondary dark:text-dark-text-secondary">
              © {currentYear} {contact.name}. All rights reserved.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a
              href={`mailto:${contact.email}`}
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Built with */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-light-text-secondary dark:text-dark-text-secondary flex items-center gap-1 justify-center md:justify-end">
              Built with{" "}
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
              using Next.js, TypeScript, and Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
