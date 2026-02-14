"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export function AvailabilityBadge() {
  return (
    <motion.a
      href="#contact"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 font-mono text-sm cursor-pointer group"
      style={{
        background: "var(--t-surface)",
        border: "1px solid var(--t-green)",
        color: "var(--t-text)",
        boxShadow: "0 0 20px rgba(34,197,94,0.15), inset 0 0 20px rgba(34,197,94,0.03)",
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.6, type: "spring" }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 30px rgba(34,197,94,0.25), inset 0 0 20px rgba(34,197,94,0.05)",
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Animated ping ring */}
      <span className="relative flex h-3 w-3 shrink-0">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: "var(--t-green)" }}
          animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
        />
        <span
          className="relative inline-flex rounded-full h-3 w-3"
          style={{ background: "var(--t-green)", boxShadow: "0 0 8px var(--t-green)" }}
        />
      </span>

      <div className="flex flex-col leading-tight">
        <span className="font-bold tracking-wider" style={{ color: "var(--t-green)" }}>
          OPEN TO WORK
        </span>
        <span className="text-[10px]" style={{ color: "var(--t-muted)" }}>
          freelance & full-time
        </span>
      </div>

      <Briefcase
        className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:rotate-[-8deg]"
        style={{ color: "var(--t-green)" }}
      />
    </motion.a>
  );
}
