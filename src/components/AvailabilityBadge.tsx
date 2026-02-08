"use client";

import { motion } from "framer-motion";

export function AvailabilityBadge() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-md border border-light-border dark:border-dark-border"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
    >
      <motion.div
        className="w-2 h-2 rounded-full bg-green-500"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <span className="text-sm font-medium text-light-text dark:text-dark-text">
        Available for work
      </span>
    </motion.div>
  );
}
