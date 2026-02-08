"use client";

import { useReducer, useEffect, useCallback, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { MascotDesktop } from "./MascotDesktop";
import { MascotMobile } from "./MascotMobile";
import { MASCOT_CONFIG, SECTION_MASCOT_MAP } from "./config";
import { MascotState, MascotAction, MascotPose, SectionId } from "./types";

/* ------------------------------------------------------------------ */
/*  State machine reducer                                             */
/* ------------------------------------------------------------------ */

const initialState: MascotState = {
  lifecycle: "hidden",
  currentPose: "waving",
  previousPose: null,
  currentSection: "hero",
  idleVariant: 0,
};

function mascotReducer(state: MascotState, action: MascotAction): MascotState {
  switch (action.type) {
    case "ENTER":
      return { ...state, lifecycle: "entering", currentPose: "waving" };

    case "ENTER_COMPLETE":
      return { ...state, lifecycle: "active", currentPose: "idle" };

    case "CHANGE_SECTION": {
      const sectionConfig = SECTION_MASCOT_MAP[action.section];
      if (!sectionConfig || action.section === state.currentSection) return state;
      return {
        ...state,
        currentSection: action.section,
        previousPose: state.currentPose,
        currentPose: sectionConfig.pose,
      };
    }

    case "SET_POSE":
      if (action.pose === state.currentPose) return state;
      return {
        ...state,
        previousPose: state.currentPose,
        currentPose: action.pose,
      };

    case "IDLE_TICK":
      return { ...state, idleVariant: action.variant };

    default:
      return state;
  }
}

/* ------------------------------------------------------------------ */
/*  Device detection hook                                             */
/* ------------------------------------------------------------------ */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isMobile;
}

/* ------------------------------------------------------------------ */
/*  Main container component                                          */
/* ------------------------------------------------------------------ */

export function MascotContainer() {
  const [state, dispatch] = useReducer(mascotReducer, initialState);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const isMobile = useIsMobile();
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Entrance delay
  useEffect(() => {
    if (!MASCOT_CONFIG.enabled) return;
    const timer = setTimeout(() => {
      dispatch({ type: "ENTER" });
    }, MASCOT_CONFIG.enterDelay);
    return () => clearTimeout(timer);
  }, []);

  // Idle animation timer (desktop only, when active)
  useEffect(() => {
    if (isMobile || state.lifecycle !== "active" || prefersReducedMotion) return;

    const scheduleIdle = () => {
      const delay =
        MASCOT_CONFIG.idleIntervalMin +
        Math.random() * (MASCOT_CONFIG.idleIntervalMax - MASCOT_CONFIG.idleIntervalMin);

      idleTimerRef.current = setTimeout(() => {
        const variant = Math.floor(Math.random() * 3);
        dispatch({ type: "IDLE_TICK", variant });
        idleTimerRef.current = scheduleIdle();
      }, delay);

      return idleTimerRef.current;
    };

    idleTimerRef.current = scheduleIdle();
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [isMobile, state.lifecycle, prefersReducedMotion]);

  // Scroll activity detection: switch to flying pose while scrolling, revert when stopped
  useEffect(() => {
    if (isMobile || state.lifecycle !== "active" || prefersReducedMotion) return;

    let lastScrollY = window.scrollY;
    let isScrolling = false;
    let poseBeforeScroll: MascotPose | null = null;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      lastScrollY = currentScrollY;

      // Only trigger flying for meaningful scroll movement
      if (delta > 5 && !isScrolling) {
        isScrolling = true;
        poseBeforeScroll = state.currentPose;
        dispatch({ type: "SET_POSE", pose: "flying" });
      }

      // Reset the "stopped scrolling" timer
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
      scrollTimerRef.current = setTimeout(() => {
        isScrolling = false;
        // Revert to section-appropriate pose
        const sectionPose = SECTION_MASCOT_MAP[state.currentSection]?.pose ?? "idle";
        dispatch({ type: "SET_POSE", pose: sectionPose });
      }, 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
    };
  }, [isMobile, state.lifecycle, state.currentSection, state.currentPose, prefersReducedMotion]);

  const handleSectionChange = useCallback((section: SectionId) => {
    dispatch({ type: "CHANGE_SECTION", section });
  }, []);

  const handleEnterComplete = useCallback(() => {
    dispatch({ type: "ENTER_COMPLETE" });
  }, []);

  if (!MASCOT_CONFIG.enabled) return null;

  if (isMobile) {
    return <MascotMobile lifecycle={state.lifecycle} />;
  }

  return (
    <MascotDesktop
      lifecycle={state.lifecycle}
      pose={state.currentPose}
      reducedMotion={prefersReducedMotion}
      onSectionChange={handleSectionChange}
      onEnterComplete={handleEnterComplete}
    />
  );
}
