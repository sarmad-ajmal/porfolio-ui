import React from "react";
import { MascotPose } from "./types";

/* ------------------------------------------------------------------ */
/*  PNG face image paths — the actual cartoon artwork                  */
/* ------------------------------------------------------------------ */

const FACE_IMAGES = {
  happy: "/assets/lab/character (1).png",    // Crescent happy eyes, big smile
  cool: "/assets/lab/character (2).png",     // Sunglasses, confident
  excited: "/assets/lab/character (3).png",  // Heart eyes, excited
} as const;

type FaceVariant = keyof typeof FACE_IMAGES;

/* Colors sampled from the actual PNGs */
const SKIN = "#EDBE99";
const SHIRT = "#C1CEBB";
const OUTLINE = "#3B2F2F";
const LADDER_WOOD = "#C9A96E";
const LADDER_DARK = "#A88B4A";

/* ------------------------------------------------------------------ */
/*  Shared arm SVG — rendered BEHIND the PNG                          */
/* ------------------------------------------------------------------ */

interface ArmSvgProps {
  className?: string;
  children: React.ReactNode;
  viewBox?: string;
}

function ArmLayer({ className, children, viewBox = "0 0 240 280" }: ArmSvgProps) {
  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    >
      {children}
    </svg>
  );
}

/* Cartoon arm: sleeve (shirt color) + forearm (skin) + round hand */
function Arm({ d, sleeve, hand }: {
  d: string;
  sleeve?: string;
  hand?: { cx: number; cy: number; r?: number };
}) {
  return (
    <>
      {/* Arm sleeve (shirt-colored upper portion) */}
      {sleeve && (
        <path d={sleeve} fill={SHIRT} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      )}
      {/* Forearm (skin) */}
      <path d={d} fill={SKIN} stroke={OUTLINE} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Hand */}
      {hand && (
        <circle cx={hand.cx} cy={hand.cy} r={hand.r ?? 10} fill={SKIN} stroke={OUTLINE} strokeWidth="2.5" />
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Pose container — layers arms behind the PNG face                   */
/* ------------------------------------------------------------------ */

interface PoseProps {
  face: FaceVariant;
  arms: React.ReactNode;
  extras?: React.ReactNode;
  bodyRotate?: number;
}

function PoseLayout({ face, arms, extras, bodyRotate }: PoseProps) {
  return (
    <div
      className="relative w-full h-full"
      style={bodyRotate ? { transform: `rotate(${bodyRotate}deg)` } : undefined}
    >
      {/* Arms layer — behind the PNG */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        {arms}
      </div>

      {/* PNG face — the actual cartoon artwork */}
      <div className="absolute" style={{
        zIndex: 1,
        top: "2%",
        left: "15%",
        width: "70%",
        height: "82%",
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={FACE_IMAGES[face]}
          alt=""
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      </div>

      {/* Extras layer — sparkles, thought bubbles, etc (on top) */}
      {extras && (
        <div className="absolute inset-0" style={{ zIndex: 2 }}>
          {extras}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  1. IDLE — cool face, arms relaxed at sides                        */
/* ------------------------------------------------------------------ */

export const IdlePose = React.memo(function IdlePose() {
  return (
    <PoseLayout
      face="cool"
      arms={
        <ArmLayer>
          {/* Left arm hanging down */}
          <Arm
            sleeve="M42 168 C38 174, 34 182, 32 190 L24 190 C26 180, 30 170, 36 162 Z"
            d="M32 190 C30 200, 28 214, 30 226"
            hand={{ cx: 30, cy: 232 }}
          />
          {/* Right arm hanging down */}
          <Arm
            sleeve="M198 168 C202 174, 206 182, 208 190 L216 190 C214 180, 210 170, 204 162 Z"
            d="M208 190 C210 200, 212 214, 210 226"
            hand={{ cx: 210, cy: 232 }}
          />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  2. WAVING — happy face, right arm raised waving                   */
/* ------------------------------------------------------------------ */

export const WavingPose = React.memo(function WavingPose() {
  return (
    <PoseLayout
      face="happy"
      arms={
        <ArmLayer>
          {/* Left arm hanging */}
          <Arm
            sleeve="M42 168 C38 174, 34 182, 32 190 L24 190 C26 180, 30 170, 36 162 Z"
            d="M32 190 C30 200, 28 214, 30 226"
            hand={{ cx: 30, cy: 232 }}
          />
          {/* Right arm raised and waving */}
          <Arm
            sleeve="M198 168 C206 162, 212 152, 216 140 L222 144 C218 155, 212 165, 204 170 Z"
            d="M216 140 C222 124, 226 108, 228 92"
            hand={{ cx: 228, cy: 84, r: 12 }}
          />
          {/* Wave motion lines */}
          <line x1="236" y1="72" x2="240" y2="66" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
          <line x1="238" y1="84" x2="240" y2="82" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" opacity="0.25" />
          <line x1="236" y1="96" x2="240" y2="98" stroke={OUTLINE} strokeWidth="2" strokeLinecap="round" opacity="0.35" />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  3. CHEERING — excited face, both arms raised high                 */
/* ------------------------------------------------------------------ */

export const CheeringPose = React.memo(function CheeringPose() {
  return (
    <PoseLayout
      face="excited"
      arms={
        <ArmLayer>
          {/* Left arm raised */}
          <Arm
            sleeve="M42 168 C34 158, 28 146, 22 132 L14 136 C20 150, 28 162, 36 170 Z"
            d="M22 132 C16 114, 12 96, 10 78"
            hand={{ cx: 10, cy: 70, r: 12 }}
          />
          {/* Right arm raised */}
          <Arm
            sleeve="M198 168 C206 158, 212 146, 218 132 L226 136 C220 150, 212 162, 204 170 Z"
            d="M218 132 C224 114, 228 96, 230 78"
            hand={{ cx: 230, cy: 70, r: 12 }}
          />
          {/* Celebration sparkles */}
          <circle cx="4" cy="56" r="3" fill="#F4A4A4" opacity="0.7" />
          <circle cx="236" cy="56" r="3" fill="#F4A4A4" opacity="0.7" />
          <circle cx="14" cy="42" r="2" fill="#FFD700" opacity="0.6" />
          <circle cx="226" cy="42" r="2" fill="#FFD700" opacity="0.6" />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  4. FLYING — cool face, arms swept back, slight tilt               */
/* ------------------------------------------------------------------ */

export const FlyingPose = React.memo(function FlyingPose() {
  return (
    <PoseLayout
      face="cool"
      bodyRotate={-6}
      arms={
        <ArmLayer>
          {/* Left arm swept back-left */}
          <Arm
            sleeve="M42 168 C32 166, 22 168, 12 172 L10 164 C20 158, 32 156, 42 160 Z"
            d="M12 172 C4 176, -2 178, -6 180"
            hand={{ cx: -8, cy: 182 }}
          />
          {/* Right arm swept back-right */}
          <Arm
            sleeve="M198 168 C208 166, 218 168, 228 172 L230 164 C220 158, 208 156, 198 160 Z"
            d="M228 172 C236 176, 242 178, 246 180"
            hand={{ cx: 248, cy: 182 }}
          />
          {/* Speed lines */}
          <line x1="8" y1="220" x2="36" y2="218" stroke={OUTLINE} strokeWidth="1.5" opacity="0.15" />
          <line x1="4" y1="232" x2="40" y2="230" stroke={OUTLINE} strokeWidth="1.5" opacity="0.12" />
          <line x1="12" y1="244" x2="44" y2="243" stroke={OUTLINE} strokeWidth="1" opacity="0.1" />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  5. CLIMBING — happy face, arms gripping above, ladder behind      */
/* ------------------------------------------------------------------ */

export const ClimbingPose = React.memo(function ClimbingPose() {
  return (
    <PoseLayout
      face="happy"
      arms={
        <ArmLayer>
          {/* Ladder (behind everything) */}
          <rect x="48" y="0" width="6" height="280" rx="3" fill={LADDER_WOOD} stroke={LADDER_DARK} strokeWidth="1.5" />
          <rect x="186" y="0" width="6" height="280" rx="3" fill={LADDER_WOOD} stroke={LADDER_DARK} strokeWidth="1.5" />
          <rect x="48" y="60" width="144" height="7" rx="3" fill={LADDER_WOOD} stroke={LADDER_DARK} strokeWidth="1" />
          <rect x="48" y="140" width="144" height="7" rx="3" fill={LADDER_WOOD} stroke={LADDER_DARK} strokeWidth="1" />
          <rect x="48" y="220" width="144" height="7" rx="3" fill={LADDER_WOOD} stroke={LADDER_DARK} strokeWidth="1" />

          {/* Left arm reaching up to grip rung */}
          <Arm
            sleeve="M42 168 C34 156, 30 142, 28 126 L20 128 C22 144, 28 158, 36 168 Z"
            d="M28 126 C24 108, 22 90, 28 72"
            hand={{ cx: 30, cy: 64, r: 11 }}
          />
          {/* Right arm reaching up to grip rung */}
          <Arm
            sleeve="M198 168 C206 156, 210 142, 212 126 L220 128 C218 144, 212 158, 204 168 Z"
            d="M212 126 C216 108, 218 90, 212 72"
            hand={{ cx: 210, cy: 64, r: 11 }}
          />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  6. HAPPY — happy face, thumbs up                                  */
/* ------------------------------------------------------------------ */

export const HappyPose = React.memo(function HappyPose() {
  return (
    <PoseLayout
      face="happy"
      arms={
        <ArmLayer>
          {/* Left arm - thumbs up */}
          <Arm
            sleeve="M42 168 C34 160, 28 150, 22 138 L14 142 C20 154, 28 164, 36 170 Z"
            d="M22 138 C18 128, 16 118, 16 110"
            hand={{ cx: 16, cy: 104, r: 11 }}
          />
          {/* Left thumb */}
          <rect x="13" y="80" width="6" height="18" rx="3" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />

          {/* Right arm - thumbs up */}
          <Arm
            sleeve="M198 168 C206 160, 212 150, 218 138 L226 142 C220 154, 212 164, 204 170 Z"
            d="M218 138 C222 128, 224 118, 224 110"
            hand={{ cx: 224, cy: 104, r: 11 }}
          />
          {/* Right thumb */}
          <rect x="221" y="80" width="6" height="18" rx="3" fill={SKIN} stroke={OUTLINE} strokeWidth="2" />
        </ArmLayer>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  7. THINKING — cool face, hand on chin, head tilted                */
/* ------------------------------------------------------------------ */

export const ThinkingPose = React.memo(function ThinkingPose() {
  return (
    <PoseLayout
      face="cool"
      bodyRotate={3}
      arms={
        <ArmLayer>
          {/* Left arm hanging */}
          <Arm
            sleeve="M42 168 C38 174, 34 182, 32 190 L24 190 C26 180, 30 170, 36 162 Z"
            d="M32 190 C30 200, 28 214, 30 226"
            hand={{ cx: 30, cy: 232 }}
          />
          {/* Right arm — hand up near chin */}
          <Arm
            sleeve="M198 168 C204 162, 208 154, 210 144 L218 146 C216 156, 210 164, 204 170 Z"
            d="M210 144 C212 134, 210 124, 200 118"
            hand={{ cx: 196, cy: 112, r: 10 }}
          />
        </ArmLayer>
      }
      extras={
        <svg viewBox="0 0 240 280" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Thought bubble */}
          <circle cx="214" cy="52" r="5" fill="white" stroke={OUTLINE} strokeWidth="1.5" opacity="0.7" />
          <circle cx="224" cy="36" r="7" fill="white" stroke={OUTLINE} strokeWidth="1.5" opacity="0.7" />
          <ellipse cx="234" cy="16" rx="14" ry="11" fill="white" stroke={OUTLINE} strokeWidth="1.5" opacity="0.7" />
          <circle cx="228" cy="16" r="2" fill={OUTLINE} opacity="0.35" />
          <circle cx="234" cy="16" r="2" fill={OUTLINE} opacity="0.35" />
          <circle cx="240" cy="16" r="2" fill={OUTLINE} opacity="0.35" />
        </svg>
      }
    />
  );
});

/* ------------------------------------------------------------------ */
/*  Pose → component lookup map                                       */
/* ------------------------------------------------------------------ */

export const POSE_COMPONENTS: Record<MascotPose, React.ComponentType> = {
  idle: IdlePose,
  waving: WavingPose,
  cheering: CheeringPose,
  flying: FlyingPose,
  climbing: ClimbingPose,
  happy: HappyPose,
  thinking: ThinkingPose,
};
