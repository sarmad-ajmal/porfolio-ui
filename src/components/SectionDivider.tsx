"use client";

/**
 * SectionDivider — animated circuit-trace bridge between sections.
 * A horizontal SVG with a data-pulse that travels along the trace on scroll.
 */
export function SectionDivider() {
  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ height: "60px", background: "var(--t-bg)" }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes sd-pulse {
          0% { transform: translateX(-20px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 20px)); opacity: 0; }
        }
        .sd-dot {
          animation: sd-pulse 4s ease-in-out infinite;
        }
        .sd-dot-delay {
          animation: sd-pulse 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>

      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main horizontal trace */}
        <path
          d="M0 30 H200 L220 15 H400 L420 30 H600 L620 45 H800 L820 30 H1000 L1020 15 H1200"
          stroke="var(--t-border)"
          strokeWidth="1"
          fill="none"
        />

        {/* Junction nodes */}
        <circle cx="200" cy="30" r="3" fill="var(--t-border)" />
        <circle cx="420" cy="30" r="3" fill="var(--t-border)" />
        <circle cx="600" cy="30" r="2" fill="var(--t-border)" />
        <circle cx="820" cy="30" r="3" fill="var(--t-border)" />
        <circle cx="1020" cy="15" r="2" fill="var(--t-border)" />

        {/* Branch traces */}
        <path d="M200 30 V50" stroke="var(--t-border)" strokeWidth="1" fill="none" />
        <path d="M600 30 V10" stroke="var(--t-border)" strokeWidth="1" fill="none" />
        <path d="M820 30 V50" stroke="var(--t-border)" strokeWidth="1" fill="none" />
        <circle cx="200" cy="50" r="2" fill="var(--t-border)" />
        <circle cx="600" cy="10" r="2" fill="var(--t-border)" />
        <circle cx="820" cy="50" r="2" fill="var(--t-border)" />
      </svg>

      {/* Traveling data pulse */}
      <div
        className="sd-dot absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
        style={{
          background: "var(--t-cyan)",
          boxShadow: "0 0 12px var(--t-cyan), 0 0 24px rgba(0,229,255,0.3)",
        }}
      />

      {/* Second pulse with offset */}
      <div
        className="sd-dot-delay absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{
          background: "var(--t-cyan)",
          boxShadow: "0 0 8px var(--t-cyan)",
          opacity: 0.6,
        }}
      />
    </div>
  );
}
