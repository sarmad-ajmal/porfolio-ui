import { SectionId, SectionMascotConfig, MascotPose } from "./types";

export const MASCOT_COLORS = {
  skin: "#F0C4A0",
  skinShadow: "#DDA07A",
  hair: "#3D2B1F",
  hairHighlight: "#5A4035",
  beard: "#3D2B1F",
  shirt: "#B5C7B0",
  shirtShadow: "#9AB392",
  outline: "#2D2D2D",
  eyeWhite: "#FFFFFF",
  eyePupil: "#2D2D2D",
  mouth: "#C0392B",
  mouthInner: "#E74C3C",
  teeth: "#FFFFFF",
  cheekBlush: "#F4A4A4",
} as const;

export const MASCOT_CONFIG = {
  enabled: true,
  enterDelay: 2500,
  idleIntervalMin: 10000,
  idleIntervalMax: 15000,
  sectionTransitionDuration: 0.5,
  climbingDuration: 400,

  desktop: {
    width: 120,
    height: 160,
    offsetX: 32,
  },
  mobile: {
    width: 56,
    height: 75,
  },

  scrollSpring: {
    stiffness: 50,
    damping: 20,
    restDelta: 0.5,
  },

  zIndex: 40,
} as const;

export const SECTION_IDS: SectionId[] = [
  "hero",
  "about",
  "skills",
  "projects",
  "experience",
  "certifications",
  "contact",
];

export const SECTION_MASCOT_MAP: Record<SectionId, SectionMascotConfig> = {
  hero: { pose: "waving", side: "right", offsetY: 0 },
  about: { pose: "happy", side: "right", offsetY: -20 },
  skills: { pose: "thinking", side: "right", offsetY: 0 },
  projects: { pose: "cheering", side: "right", offsetY: 10 },
  experience: { pose: "thinking", side: "right", offsetY: -10 },
  certifications: { pose: "happy", side: "right", offsetY: 0 },
  contact: { pose: "waving", side: "right", offsetY: 20 },
};
