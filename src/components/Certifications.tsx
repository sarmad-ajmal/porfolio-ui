"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";
import { Award, Trophy, CheckCircle2 } from "lucide-react";

export function Certifications() {
  const certs = certifications.filter((c) => c.type === "certification");
  const awards = certifications.filter((c) => c.type === "award");

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-light-bg dark:bg-dark-bg relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-accent-secondary/5 dark:bg-dark-accent-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
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
            Achievements
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-bold text-light-text dark:text-dark-text mb-4 tracking-tight">
            Certifications & Awards
          </h2>

          <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary max-w-2xl mx-auto">
            Professional certifications and recognition for technical excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-2xl backdrop-blur-md bg-light-surface/60 dark:bg-dark-surface/60 border border-light-border/50 dark:border-dark-border/50 hover:border-blue-500/50 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-light-text dark:text-dark-text mb-1 group-hover:text-blue-500 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <Trophy className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-light-text dark:text-dark-text">
                Awards
              </h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="group p-6 rounded-2xl backdrop-blur-md bg-light-surface/60 dark:bg-dark-surface/60 border border-light-border/50 dark:border-dark-border/50 hover:border-amber-500/50 transition-all duration-500 relative overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-light-text dark:text-dark-text mb-1 group-hover:text-amber-500 transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {award.issuer} · {award.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
