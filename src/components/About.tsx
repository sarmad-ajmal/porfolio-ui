"use client";

import { motion, useInView } from "framer-motion";
import { stats } from "@/data/contact";
import { useRef, useEffect, useState } from "react";

function AnimatedStat({ value, delay }: { value: string; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    // Parse numeric part and suffix (e.g. "6+" -> 6, "+"; "100%" -> 100, "%")
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 1200;
    const start = performance.now();
    const timeout = setTimeout(() => {
      const step = (now: number) => {
        const elapsed = now - start - delay;
        if (elapsed < 0) {
          requestAnimationFrame(step);
          return;
        }
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        setDisplay(`${current}${suffix}`);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, 0);

    return () => clearTimeout(timeout);
  }, [isInView, value, delay]);

  return (
    <span ref={ref}>
      {isInView ? display : "0"}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
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
              <span className="t-section-header">[01 — ABOUT]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
            <h2 className="t-section-title text-4xl md:text-5xl lg:text-6xl">
              SYSTEM.PROFILE
            </h2>
          </div>
        </motion.div>

        {/* Bio block — styled as a code comment */}
        <motion.div
          className="t-card p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-6 pb-4" style={{ borderBottom: "1px solid var(--t-border)" }}>
            <span className="font-mono text-xs" style={{ color: "var(--t-cyan)" }}>about.md</span>
            <div className="flex-1" />
            <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>README</span>
          </div>

          <div className="font-mono text-sm leading-relaxed" style={{ color: "var(--t-text-secondary)" }}>
            <p className="mb-4">
              <span style={{ color: "var(--t-muted)" }}>/**</span>
            </p>
            <p className="mb-2 pl-4" style={{ color: "var(--t-text)" }}>
              Senior Full-Stack Developer with 6+ years of experience
              architecting scalable SaaS applications.
            </p>
            <p className="mb-2 pl-4">
              Specialized in modern JavaScript ecosystems (React, Node.js,
              Nest.js) and .NET Core. AWS Certified Developer passionate about
              cloud-native solutions, DevOps automation, and building systems
              that solve real business problems.
            </p>
            <p>
              <span style={{ color: "var(--t-muted)" }}>*/</span>
            </p>
          </div>
        </motion.div>

        {/* Stats — data grid with animated counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border" style={{ borderColor: "var(--t-border)" }}>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-4 relative"
              style={{
                borderRight: index < stats.length - 1 ? "1px solid var(--t-border)" : "none",
                background: "var(--t-surface)",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span
                className="absolute top-3 left-3 font-mono text-[9px]"
                style={{ color: "var(--t-muted)" }}
              >
                [{String(index).padStart(2, "0")}]
              </span>

              <span
                className="font-mono font-black text-3xl md:text-4xl mb-2"
                style={{ color: "var(--t-cyan)" }}
              >
                <AnimatedStat value={stat.value} delay={index * 150} />
              </span>
              <span
                className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-center"
                style={{ color: "var(--t-muted)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
          <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>// EOF</span>
        </div>
      </div>
    </section>
  );
}
