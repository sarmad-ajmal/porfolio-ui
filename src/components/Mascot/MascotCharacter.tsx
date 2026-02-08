"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MascotPose } from "./types";
import { POSE_COMPONENTS } from "./sprites";

interface MascotCharacterProps {
  pose: MascotPose;
  width: number;
  height: number;
  reducedMotion: boolean;
}

export function MascotCharacter({ pose, width, height, reducedMotion }: MascotCharacterProps) {
  const PoseComponent = POSE_COMPONENTS[pose];

  return (
    <div style={{ width, height }} className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={pose}
          className="absolute inset-0"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reducedMotion ? undefined : { opacity: 0, scale: 0.85 }}
          transition={{
            duration: reducedMotion ? 0 : 0.35,
            ease: "easeOut",
          }}
        >
          <PoseComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
