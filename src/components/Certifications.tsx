"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, Trophy } from "lucide-react";

export function Certifications() {
  const certs = certifications.filter((c) => c.type === "certification");
  const awards = certifications.filter((c) => c.type === "award");

  return (
    <section id="certifications" className="py-20 px-6 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-light-text dark:text-dark-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Certifications & Awards
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-6 h-6 text-light-accent dark:text-dark-accent" />
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-light-text dark:text-dark-text mb-1">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {cert.issuer} · {cert.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-6 h-6 text-light-accent-secondary dark:text-dark-accent-secondary" />
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                Awards
              </h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-light-text dark:text-dark-text mb-1">
                    {award.title}
                  </h4>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {award.issuer} · {award.year}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
