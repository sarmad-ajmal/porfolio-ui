"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/contact";
import { Mail, Linkedin, MapPin, Phone, Download, Send } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-light-surface dark:bg-dark-surface relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-light-accent/5 dark:bg-dark-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          className="mb-16"
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
            Let&apos;s Connect
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-6 tracking-tight">
            Get In Touch
          </h2>

          <p className="text-lg md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Available for freelance projects and full-time opportunities.
            Let&apos;s build something amazing together!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
          {[
            {
              icon: Mail,
              label: "Email",
              value: contact.email,
              href: `mailto:${contact.email}`,
              color: "from-blue-500 to-cyan-500",
              delay: 0.2,
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Connect with me",
              href: contact.linkedin,
              color: "from-blue-600 to-blue-800",
              delay: 0.3,
              external: true,
            },
            {
              icon: MapPin,
              label: "Location",
              value: contact.location,
              color: "from-green-500 to-emerald-500",
              delay: 0.4,
            },
            {
              icon: Phone,
              label: "Phone",
              value: contact.phone,
              color: "from-purple-500 to-pink-500",
              delay: 0.5,
            },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`group relative flex items-center gap-4 p-6 rounded-2xl backdrop-blur-md bg-light-bg/60 dark:bg-dark-bg/60 border border-light-border/50 dark:border-dark-border/50 transition-all duration-500 overflow-hidden ${
                item.href
                  ? "hover:border-light-accent dark:hover:border-dark-accent cursor-pointer"
                  : "cursor-default"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              whileHover={item.href ? { y: -5, scale: 1.02 } : undefined}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-light-accent/5 via-transparent to-light-accent-secondary/5 dark:from-dark-accent/5 dark:to-dark-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <motion.div
                className={`relative z-10 p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <item.icon className="w-5 h-5 text-white" />
              </motion.div>

              <div className="relative z-10 text-left flex-1">
                <div className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-1">
                  {item.label}
                </div>
                <div className="font-semibold text-light-text dark:text-dark-text group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors">
                  {item.value}
                </div>
              </div>

              {item.external && (
                <Send className="relative z-10 w-4 h-4 text-light-text-secondary dark:text-dark-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
            </motion.a>
          ))}
        </div>

        <motion.a
          href="/resume.pdf"
          download
          className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary text-white rounded-2xl font-bold text-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-light-accent-secondary to-light-accent dark:from-dark-accent-secondary dark:to-dark-accent"
            initial={{ x: "100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <Download className="relative z-10 w-6 h-6" />
          <span className="relative z-10">Download Resume</span>
        </motion.a>
      </div>
    </section>
  );
}
