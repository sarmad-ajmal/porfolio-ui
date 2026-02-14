"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  impact: string;
  featured?: boolean;
  index: number;
}

export function ProjectCard({
  title,
  description,
  tech,
  impact,
  featured = false,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      className="t-card group relative p-6 md:p-8"
      whileHover={{ borderColor: "rgba(0,229,255,0.35)" }}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>
              [{String(index).padStart(2, "0")}]
            </span>
            {featured && (
              <span className="t-tag font-bold" style={{ color: "var(--t-green)" }}>
                FEATURED
              </span>
            )}
          </div>
          <h3
            className="font-mono font-bold tracking-tight"
            style={{
              fontSize: featured ? "1.5rem" : "1.25rem",
              color: "var(--t-text)",
            }}
          >
            {title}
          </h3>
        </div>

        {/* Corner decoration */}
        <div
          className="hidden md:flex items-center gap-1 mt-1"
          style={{ color: "var(--t-muted)" }}
        >
          <span className="font-mono text-[10px]">▸</span>
        </div>
      </div>

      <p
        className="font-mono text-sm leading-relaxed mb-6"
        style={{ color: "var(--t-text-secondary)" }}
      >
        {description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((item) => (
          <span key={item} className="t-tag">
            {item}
          </span>
        ))}
      </div>

      {/* Impact */}
      <div className="pt-4" style={{ borderTop: "1px solid var(--t-border)" }}>
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold" style={{ color: "var(--t-cyan)" }}>
            ↳ IMPACT:
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--t-green)" }}>
            {impact}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
