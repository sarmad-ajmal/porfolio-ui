"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent } from "framer-motion";
import { MascotCharacter } from "./MascotCharacter";
import { MASCOT_CONFIG, SECTION_IDS, SECTION_MASCOT_MAP } from "./config";
import { MascotPose, MascotLifecycle, SectionId } from "./types";

interface MascotDesktopProps {
  lifecycle: MascotLifecycle;
  pose: MascotPose;
  reducedMotion: boolean;
  onSectionChange: (section: SectionId) => void;
  onEnterComplete: () => void;
}

export function MascotDesktop({
  lifecycle,
  pose,
  reducedMotion,
  onSectionChange,
  onEnterComplete,
}: MascotDesktopProps) {
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, MASCOT_CONFIG.scrollSpring);
  const [yOffset, setYOffset] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [docHeight, setDocHeight] = useState(1);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Track window/document dimensions
  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
      setDocHeight(document.documentElement.scrollHeight);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Map smoothY to a vertical offset for the mascot (parallax ~35% of scroll)
  useMotionValueEvent(smoothY, "change", (latest) => {
    if (reducedMotion || docHeight <= windowHeight) return;
    const scrollRatio = latest / (docHeight - windowHeight);
    // Move mascot across roughly 60% of viewport height
    const offset = scrollRatio * windowHeight * 0.6;
    setYOffset(offset);
  });

  // IntersectionObserver for section detection
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
            const id = entry.target.id as SectionId;
            if (SECTION_IDS.includes(id)) {
              onSectionChange(id);
            }
          }
        }
      },
      { threshold: [0.3, 0.6] }
    );

    // Observe all sections after a short delay (allow DOM to render)
    const timer = setTimeout(() => {
      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observerRef.current?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observerRef.current?.disconnect();
    };
  }, [onSectionChange]);

  const { width, height, offsetX } = MASCOT_CONFIG.desktop;

  // Entrance animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: 80,
      scale: 0.6,
    },
    entering: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: reducedMotion ? 0 : 0.8,
        ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
      },
    },
    active: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
  };

  // Base Y position: start near top, shift down with scroll
  const baseY = windowHeight * 0.15 + yOffset;

  return (
    <motion.div
      className="fixed pointer-events-none"
      style={{
        right: offsetX,
        top: 0,
        zIndex: MASCOT_CONFIG.zIndex,
        willChange: "transform",
      }}
      variants={containerVariants}
      initial="hidden"
      animate={lifecycle === "hidden" ? "hidden" : lifecycle === "entering" ? "entering" : "active"}
      onAnimationComplete={(definition) => {
        if (definition === "entering") {
          onEnterComplete();
        }
      }}
    >
      <motion.div
        className={reducedMotion ? "" : "mascot-float"}
        style={{ y: baseY }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        <MascotCharacter
          pose={pose}
          width={width}
          height={height}
          reducedMotion={reducedMotion}
        />
      </motion.div>
    </motion.div>
  );
}
