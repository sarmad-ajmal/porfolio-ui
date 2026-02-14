"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "var(--t-bg)" }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <span className="t-section-header">[04 — EXPERIENCE]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
            <h2 className="t-section-title text-4xl md:text-5xl lg:text-6xl">
              WORK.LOG
            </h2>
            <p className="t-section-subtitle mt-4 max-w-xl">
              Building scalable solutions and leading development teams across
              diverse industries.
            </p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline trace */}
          <div
            className="absolute left-[11px] top-0 bottom-0 w-px"
            style={{ background: "var(--t-border)" }}
          />

          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline node — small square */}
                <div
                  className="absolute left-[4px] top-2 w-[15px] h-[15px]"
                  style={{
                    border: "2px solid var(--t-cyan)",
                    background: "var(--t-bg)",
                    boxShadow: "0 0 8px rgba(0,229,255,0.3)",
                  }}
                />

                {/* Card */}
                <div className="t-card p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3
                        className="font-mono font-bold text-xl mb-2"
                        style={{ color: "var(--t-text)" }}
                      >
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 font-mono text-xs" style={{ color: "var(--t-muted)" }}>
                        <span>{exp.company}</span>
                        <span>// {exp.location}</span>
                      </div>
                    </div>
                    <div className="t-tag whitespace-nowrap">
                      {exp.duration}
                    </div>
                  </div>

                  <p className="font-mono text-xs mb-6" style={{ color: "var(--t-muted)" }}>
                    {exp.period}
                  </p>

                  {/* Highlights as log entries */}
                  <div className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3 font-mono text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <span style={{ color: "var(--t-cyan)" }} className="shrink-0 mt-0.5">▸</span>
                        <span style={{ color: "var(--t-text-secondary)" }}>{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
