import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sarmad Ajmal - Full-Stack Developer & Cloud Architect";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0b1120",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00e5ff, transparent)",
          }}
        />

        {/* Label */}
        <div
          style={{
            color: "rgba(0,229,255,0.5)",
            fontSize: 14,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            marginBottom: 32,
            display: "flex",
          }}
        >
          PORTFOLIO.V2
        </div>

        {/* Name */}
        <div
          style={{
            color: "#e2e8f0",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 8,
            display: "flex",
          }}
        >
          SARMAD
        </div>
        <div
          style={{
            color: "transparent",
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 48,
            display: "flex",
            WebkitTextStroke: "2px #00e5ff",
          }}
        >
          AJMAL
        </div>

        {/* Role */}
        <div
          style={{
            color: "#64748b",
            fontSize: 20,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 64,
            display: "flex",
          }}
        >
          Full-Stack Engineer · Cloud Architect · Problem Solver
        </div>

        {/* Stats */}
        <div style={{ display: "flex", gap: 48, alignItems: "center" }}>
          {[
            { value: "6+", label: "YRS EXP" },
            { value: "30+", label: "PROJECTS" },
            { value: "3", label: "CLOUD CERTS" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span style={{ color: "#00e5ff", fontSize: 36, fontWeight: 900 }}>{s.value}</span>
              <span style={{ color: "#475569", fontSize: 12, letterSpacing: "0.2em" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            color: "rgba(0,229,255,0.35)",
            fontSize: 16,
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          sarmadajmal.me
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, transparent, #00e5ff, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
