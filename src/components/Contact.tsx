"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { Mail, Linkedin, MapPin, Phone, Download } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-light-surface dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Available for freelance projects and full-time opportunities.
          Let's build something amazing together!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <motion.a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-3 p-4 rounded-lg border border-light-border dark:border-dark-border hover:border-light-accent dark:hover:border-dark-accent transition-colors bg-light-bg dark:bg-dark-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            <div className="text-left">
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                Email
              </div>
              <div className="font-medium text-light-text dark:text-dark-text">
                {contact.email}
              </div>
            </div>
          </motion.a>

          <motion.a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 rounded-lg border border-light-border dark:border-dark-border hover:border-light-accent dark:hover:border-dark-accent transition-colors bg-light-bg dark:bg-dark-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Linkedin className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            <div className="text-left">
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                LinkedIn
              </div>
              <div className="font-medium text-light-text dark:text-dark-text">
                Connect with me
              </div>
            </div>
          </motion.a>

          <motion.div
            className="flex items-center gap-3 p-4 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MapPin className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            <div className="text-left">
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                Location
              </div>
              <div className="font-medium text-light-text dark:text-dark-text">
                {contact.location}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 p-4 rounded-lg border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Phone className="w-5 h-5 text-light-accent dark:text-dark-accent" />
            <div className="text-left">
              <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                Phone
              </div>
              <div className="font-medium text-light-text dark:text-dark-text">
                {contact.phone}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-3 bg-light-accent dark:bg-dark-accent text-white rounded-lg font-medium hover:scale-105 transition-transform"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Download className="w-5 h-5" />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
}
