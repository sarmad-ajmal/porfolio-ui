export type MascotPose =
  | "idle"
  | "waving"
  | "cheering"
  | "flying"
  | "climbing"
  | "happy"
  | "thinking";

export type MascotLifecycle = "hidden" | "entering" | "active";

export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "certifications"
  | "contact";

export interface MascotState {
  lifecycle: MascotLifecycle;
  currentPose: MascotPose;
  previousPose: MascotPose | null;
  currentSection: SectionId;
  idleVariant: number;
}

export type MascotAction =
  | { type: "ENTER" }
  | { type: "ENTER_COMPLETE" }
  | { type: "CHANGE_SECTION"; section: SectionId }
  | { type: "SET_POSE"; pose: MascotPose }
  | { type: "IDLE_TICK"; variant: number };

export interface SectionMascotConfig {
  pose: MascotPose;
  side: "left" | "right";
  offsetY: number;
}