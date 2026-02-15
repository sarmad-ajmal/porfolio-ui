"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const LINES = [
  { text: "$ sudo hire --candidate=sarmad --role=fullstack", color: "#00e5ff" },
  { text: "[sudo] password for recruiter: ••••••••",         color: "#64748b" },
  { text: "Verifying credentials...",                         color: "#64748b" },
  { text: "✓ 6+ years of full-stack experience confirmed",   color: "#22c55e" },
  { text: "✓ AWS certifications validated",                  color: "#22c55e" },
  { text: "✓ Enterprise SaaS track record: verified",        color: "#22c55e" },
  { text: "✓ Problem-solving skills: legendary",             color: "#22c55e" },
  { text: "",                                                 color: "" },
  { text: "Access granted. Welcome to the team! 🎉",         color: "#00e5ff" },
  { text: "Redirecting to contact form...",                   color: "#64748b" },
];

interface EasterEggProps {
  open: boolean;
  onClose: () => void;
}

export function EasterEgg({ open, onClose }: EasterEggProps) {
  const [visibleLines, setVisibleLines] = useState(0);

  // Reset lines each time the modal opens
  useEffect(() => {
    if (open) setVisibleLines(0);
  }, [open]);

  // Reveal lines one by one
  useEffect(() => {
    if (!open) return;
    if (visibleLines >= LINES.length) {
      const t = setTimeout(() => {
        onClose();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 1800);
      return () => clearTimeout(t);
    }
    const delay = visibleLines < 3 ? 400 : 220;
    const t = setTimeout(() => setVisibleLines((l) => l + 1), delay);
    return () => clearTimeout(t);
  }, [open, visibleLines, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="fixed top-1/2 left-1/2 z-[201] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 font-mono px-4"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                background: "#0d1117",
                border: "1px solid rgba(0,229,255,0.3)",
                boxShadow: "0 0 80px rgba(0,229,255,0.12), 0 0 0 1px rgba(0,229,255,0.06)",
              }}
            >
              {/* Title bar */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ borderColor: "rgba(0,229,255,0.15)" }}
              >
                <div className="flex gap-1.5">
                  {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
                    <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-xs ml-2" style={{ color: "rgba(0,229,255,0.45)" }}>
                  terminal — hire-mode
                </span>
              </div>

              {/* Body */}
              <div className="p-6 space-y-1.5 min-h-[220px]">
                {LINES.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ color: line.color || "transparent" }}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {line.text || "\u00a0"}
                  </motion.div>
                ))}

                {visibleLines < LINES.length && (
                  <span
                    className="inline-block w-[7px] h-[14px]"
                    style={{ background: "#00e5ff", animation: "t-blink 1s step-end infinite" }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
