"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const certs = certifications.filter((c) => c.type === "certification");
  const awards = certifications.filter((c) => c.type === "award");

  return (
    <section
      id="certifications"
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "var(--t-surface-alt)" }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="t-section-header">[05 — CERTS]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
            <h2 className="t-section-title text-4xl md:text-5xl lg:text-6xl">
              CREDENTIALS
            </h2>
            <p className="t-section-subtitle mt-4 max-w-xl">
              Professional certifications and recognition for technical excellence.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "var(--t-border)" }}>
          {/* Certifications column */}
          <div style={{ background: "var(--t-surface)" }} className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs font-bold" style={{ color: "var(--t-cyan)" }}>
                cert://
              </span>
              <span className="font-mono text-lg font-bold" style={{ color: "var(--t-text)" }}>
                CERTIFICATIONS
              </span>
            </div>

            <div className="space-y-4">
              {certs.map((cert, index) => (
                <motion.div
                  key={index}
                  className="t-card p-5 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs mt-0.5" style={{ color: "var(--t-green)" }}>✓</span>
                    <div>
                      <h4 className="font-mono font-bold text-sm mb-1" style={{ color: "var(--t-text)" }}>
                        {cert.title}
                      </h4>
                      <p className="font-mono text-xs" style={{ color: "var(--t-muted)" }}>
                        {cert.issuer} · {cert.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Awards column */}
          <div style={{ background: "var(--t-surface)" }} className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs font-bold" style={{ color: "var(--t-amber)" }}>
                award://
              </span>
              <span className="font-mono text-lg font-bold" style={{ color: "var(--t-text)" }}>
                AWARDS
              </span>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  className="t-card p-5 group"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs mt-0.5" style={{ color: "var(--t-amber)" }}>★</span>
                    <div>
                      <h4 className="font-mono font-bold text-sm mb-1" style={{ color: "var(--t-text)" }}>
                        {award.title}
                      </h4>
                      <p className="font-mono text-xs" style={{ color: "var(--t-muted)" }}>
                        {award.issuer} · {award.year}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
          <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>// EOF</span>
        </div>
      </div>
    </section>
  );
}
