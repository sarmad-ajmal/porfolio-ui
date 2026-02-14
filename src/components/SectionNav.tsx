"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECTIONS = [
  { id: "hero", label: "HOME", num: "00" },
  { id: "about", label: "ABOUT", num: "01" },
  { id: "skills", label: "SKILLS", num: "02" },
  { id: "projects", label: "PROJECTS", num: "03" },
  { id: "experience", label: "WORK", num: "04" },
  { id: "certifications", label: "CERTS", num: "05" },
  { id: "contact", label: "CONTACT", num: "06" },
];

export function SectionNav() {
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero
      setVisible(window.scrollY > window.innerHeight * 0.3);

      // Determine active section
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActive(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end gap-1"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.4 }}
          aria-label="Section navigation"
        >
          {SECTIONS.map((section) => {
            const isActive = active === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="group flex items-center gap-3 py-1.5 relative"
                aria-label={`Navigate to ${section.label}`}
              >
                {/* Label — slides in on hover or active */}
                <span
                  className="font-mono text-[10px] tracking-widest transition-all duration-300 overflow-hidden"
                  style={{
                    color: isActive ? "var(--t-cyan)" : "var(--t-muted)",
                    maxWidth: isActive ? "80px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <span className="whitespace-nowrap">{section.label}</span>
                </span>

                {/* Indicator line */}
                <div className="relative flex items-center">
                  <div
                    className="h-px transition-all duration-300"
                    style={{
                      width: isActive ? "32px" : "12px",
                      background: isActive ? "var(--t-cyan)" : "var(--t-muted)",
                      boxShadow: isActive ? "0 0 6px rgba(0,229,255,0.4)" : "none",
                    }}
                  />
                </div>

                {/* Expand label on hover for non-active items */}
                <style>{`
                  .group:hover span[class*="tracking-widest"] {
                    max-width: 80px !important;
                    opacity: 0.7 !important;
                  }
                  .group:hover div > div[class*="h-px"] {
                    width: 24px !important;
                  }
                `}</style>
              </button>
            );
          })}

          {/* Current section number — bottom */}
          <div className="mt-4 font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>
            {SECTIONS.find(s => s.id === active)?.num ?? "00"}/06
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
