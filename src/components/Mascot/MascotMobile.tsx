"use client";

import { motion } from "framer-motion";
import { MascotCharacter } from "./MascotCharacter";
import { MASCOT_CONFIG } from "./config";
import { MascotLifecycle } from "./types";

interface MascotMobileProps {
  lifecycle: MascotLifecycle;
}

export function MascotMobile({ lifecycle }: MascotMobileProps) {
  const { width, height } = MASCOT_CONFIG.mobile;

  if (lifecycle === "hidden") return null;

  return (
    <motion.div
      className="fixed top-4 right-4 pointer-events-none"
      style={{ zIndex: MASCOT_CONFIG.zIndex }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mascot-float">
        <MascotCharacter
          pose="happy"
          width={width}
          height={height}
          reducedMotion={false}
        />
      </div>
    </motion.div>
  );
}
