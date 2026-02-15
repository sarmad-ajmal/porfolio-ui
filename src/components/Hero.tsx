"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github as GithubIcon, Linkedin as LinkedinIcon, Twitter as TwitterIcon, Download } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { prefersReducedMotion } from "@/utils/performance";
import { EasterEgg } from "@/components/EasterEgg";

// --- Typed text hook ---
function useTypedText(lines: string[], speed = 38): { displayed: string[]; done: boolean } {
  const [displayed, setDisplayed] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];

    if (currentChar < line.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          // Use explicit index to ensure correct slot, even if the array
          // was not yet extended (handles the currentChar === 0 case and
          // avoids the previous append-based approach that could duplicate
          // entries under React strict mode double-effect execution).
          next[currentLine] = line.slice(0, currentChar + 1);
          return next;
        });
        setCurrentChar(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    const pause = setTimeout(() => {
      setCurrentLine(l => l + 1);
      setCurrentChar(0);
    }, 320);
    return () => clearTimeout(pause);
  }, [currentLine, currentChar, lines, speed]);

  return { displayed, done };
}

// --- Circuit trace SVG background ---
function CircuitTraces() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity: 0.06 }}
      aria-hidden="true"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          {/* Horizontal traces */}
          <path d="M0 30 H40 V10 H80" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M80 10 H120" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M0 90 H30 V110 H120" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Vertical traces */}
          <path d="M60 0 V40 H100 V120" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M20 30 V60 H0" stroke="currentColor" strokeWidth="1" fill="none" />
          {/* Nodes */}
          <circle cx="40" cy="10" r="2" fill="currentColor" />
          <circle cx="80" cy="10" r="2" fill="currentColor" />
          <circle cx="60" cy="40" r="2" fill="currentColor" />
          <circle cx="30" cy="90" r="2" fill="currentColor" />
          <circle cx="100" cy="60" r="2" fill="currentColor" />
          <circle cx="20" cy="60" r="2" fill="currentColor" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400 dark:text-cyan-400" />
    </svg>
  );
}

// --- Spotlight that follows mouse ---
function Spotlight({ x, y }: { x: number; y: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,229,255,0.06) 0%, transparent 70%)`,
        transition: "background 0.12s ease",
      }}
    />
  );
}

function scrollToSection(id: string): void {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const TERMINAL_LINES = [
  "whoami",
  "Sarmad Ajmal — Full-Stack Engineer",
  "uptime --years",
  "6+ years building enterprise SaaS",
  "tech-stack --list",
  "JavaScript · .NET · AWS · React · Node",
];

const STAT_ITEMS = [
  { label: "YEARS EXP", value: "6+" },
  { label: "PROJECTS", value: "30+" },
  { label: "CLOUD CERTS", value: "3" },
  { label: "STACK DEPTH", value: "∞" },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [spot, setSpot] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Client-only initialization: greeting, reduced motion, date
  const [greeting, setGreeting] = useState("INIT");
  const [dateString, setDateString] = useState("");
  const [loginDate, setLoginDate] = useState("");
  const [hireMe, setHireMe] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReducedMotion(prefersReducedMotion());

    const now = new Date();
    setDateString(now.toISOString().split("T")[0]);
    setLoginDate(now.toDateString());

    const h = now.getHours();
    if (h >= 5 && h < 12) setGreeting("MORNING_SESSION");
    else if (h >= 12 && h < 17) setGreeting("AFTERNOON_SESSION");
    else if (h >= 17 && h < 21) setGreeting("EVENING_SESSION");
    else setGreeting("LATE_NIGHT_SESSION");
  }, []);

  // Typed terminal
  const { displayed, done } = useTypedText(TERMINAL_LINES, 36);

  // Mouse spotlight
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, reducedMotion]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden flex flex-col"
      style={{ background: "var(--hero-bg, #0b1120)" }}
    >
      {/* CSS vars override for hero — ensures deep navy regardless of theme */}
      <style>{`
        #hero {
          --hero-bg: #0b1120;
          --hero-surface: #101828;
          --hero-border: rgba(0,229,255,0.18);
          --hero-cyan: #00e5ff;
          --hero-text: #e2e8f0;
          --hero-muted: #64748b;
        }

        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        @keyframes hero-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .hero-scanline {
          animation: hero-scan 8s linear infinite;
        }

        @keyframes hero-flicker {
          0%,100% { opacity: 0.9; }
          92% { opacity: 0.9; }
          93% { opacity: 0.7; }
          94% { opacity: 0.9; }
          96% { opacity: 0.75; }
          97% { opacity: 0.9; }
        }

        .hero-name-text {
          animation: hero-flicker 6s ease-in-out infinite;
        }

        @keyframes hero-trace-glow {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.12; }
        }

        .hero-circuit {
          animation: hero-trace-glow 4s ease-in-out infinite;
        }
      `}</style>

      {/* Circuit traces */}
      <div className="absolute inset-0 hero-circuit">
        <CircuitTraces />
      </div>

      {/* Phosphor CRT vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Scanline sweep */}
      {!reducedMotion && (
        <div
          className="absolute inset-x-0 h-[2px] hero-scanline pointer-events-none"
          style={{ background: "linear-gradient(transparent, rgba(0,229,255,0.04), transparent)" }}
        />
      )}

      {/* Mouse spotlight */}
      {!reducedMotion && <Spotlight x={spot.x} y={spot.y} />}

      {/* Horizontal rules — top bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--hero-cyan), transparent)" }}
      />
      <div className="absolute top-8 left-0 right-0 flex items-center px-8 gap-4">
        <span className="font-mono text-xs" style={{ color: "var(--hero-cyan)" }}>
          PORTFOLIO.V2
        </span>
        <div className="flex-1 h-px" style={{ background: "var(--hero-border)" }} />
        {mounted && (
          <>
            <span className="font-mono text-xs" style={{ color: "var(--hero-muted)" }}>
              {greeting}
            </span>
            <div className="font-mono text-xs" style={{ color: "var(--hero-muted)" }}>
              {dateString}
            </div>
            <div
              className="hidden sm:flex items-center gap-2 font-mono text-xs px-3 py-1.5 border"
              style={{ borderColor: "rgba(0,229,255,0.3)", color: "var(--hero-muted)" }}
            >
              <span>navigate</span>
              <kbd
                className="px-1.5 py-0.5 text-[10px]"
                style={{
                  background: "rgba(0,229,255,0.08)",
                  border: "1px solid rgba(0,229,255,0.25)",
                  color: "var(--hero-cyan)",
                }}
              >
                ⌘K
              </kbd>
            </div>
          </>
        )}
      </div>

      {/* Vertical left label */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.4em] pointer-events-none select-none"
        style={{
          color: "var(--hero-cyan)",
          writingMode: "vertical-rl",
          transform: "translateY(-50%) rotate(180deg)",
          marginLeft: "1rem",
          opacity: 0.5,
        }}
      >
        SRD.AJMAL // ENG
      </div>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl">

          {/* Two-column grid: name left, terminal right */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">

            {/* LEFT — Name + tagline + CTAs */}
            <div>
              {/* Tag chip */}
              <motion.div
                className="inline-flex items-center gap-2 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
                />
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: "var(--hero-muted)" }}>
                  Available for work
                </span>
              </motion.div>

              {/* Name — huge, left-anchored, CRT flicker */}
              <motion.h1
                className="font-mono font-black leading-none tracking-tighter mb-6 hero-name-text"
                style={{
                  fontSize: "clamp(3rem, 9vw, 8rem)",
                  color: "var(--hero-text)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span style={{ display: "block" }}>SARMAD</span>
                <span
                  style={{
                    display: "block",
                    WebkitTextStroke: "2px var(--hero-cyan)",
                    color: "transparent",
                    filter: `drop-shadow(0 0 20px rgba(0,229,255,0.4))`,
                  }}
                >
                  AJMAL
                </span>
              </motion.h1>

              {/* Role line */}
              <motion.div
                className="flex items-center gap-4 mb-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <div className="h-px flex-shrink-0 w-8" style={{ background: "var(--hero-cyan)" }} />
                <p
                  className="font-mono text-sm md:text-base tracking-wider uppercase"
                  style={{ color: "var(--hero-muted)" }}
                >
                  Full-Stack Engineer · Cloud Architect · Problem Solver
                </p>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="grid grid-cols-4 gap-0 mb-10 border"
                style={{ borderColor: "var(--hero-border)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                {STAT_ITEMS.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center py-4 px-2"
                    style={{
                      borderRight: i < 3 ? `1px solid var(--hero-border)` : "none",
                    }}
                  >
                    <span
                      className="font-mono font-black text-2xl md:text-3xl"
                      style={{ color: "var(--hero-cyan)" }}
                    >
                      {s.value}
                    </span>
                    <span
                      className="font-mono text-[9px] md:text-[10px] tracking-widest mt-1 text-center"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* CTA buttons */}
              <motion.div
                className="flex gap-4 items-center flex-wrap mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.75 }}
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="group relative px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest overflow-hidden"
                  style={{
                    background: "var(--hero-cyan)",
                    color: "#0b1120",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span className="relative z-10">./view-projects</span>
                  <motion.div
                    className="absolute inset-0"
                    style={{ background: "rgba(0,0,0,0.15)" }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </motion.button>

<motion.button
                  onClick={() => setHireMe(true)}
                  className="px-6 py-3 font-mono text-sm font-bold uppercase tracking-widest border"
                  style={{
                    borderColor: "rgba(34,197,94,0.4)",
                    color: "#22c55e",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  whileHover={{
                    scale: 1.04,
                    borderColor: "#22c55e",
                    backgroundColor: "rgba(34,197,94,0.06)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  ./hire-me
                </motion.button>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-3 font-mono text-sm uppercase tracking-widest border"
                  style={{
                    borderColor: "var(--hero-border)",
                    color: "var(--hero-muted)",
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  whileHover={{
                    scale: 1.04,
                    color: "var(--hero-cyan)",
                    borderColor: "var(--hero-border)",
                    backgroundColor: "rgba(0,229,255,0.04)",
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Download className="w-3.5 h-3.5" />
                  ./cv
                </motion.a>
              </motion.div>

              {/* Social icons */}
              <motion.div
                className="flex gap-5 items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {[
                  { href: "https://github.com/sarmad-ajmal", Icon: GithubIcon, label: "GitHub" },
                  { href: "https://linkedin.com/in/sarmad-ajmal", Icon: LinkedinIcon, label: "LinkedIn" },
                  { href: "https://twitter.com/SarmadAjmal", Icon: TwitterIcon, label: "Twitter" },
                ].map(({ href, Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div
                      className="p-2 border transition-colors"
                      style={{
                        borderColor: "var(--hero-border)",
                        color: "var(--hero-muted)",
                      }}
                    >
                      <Icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <span
                      className="font-mono text-xs uppercase tracking-widest hidden md:block"
                      style={{ color: "var(--hero-muted)" }}
                    >
                      {label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Terminal window */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:block"
            >
              {/* Terminal chrome */}
              <div
                className="border"
                style={{ borderColor: "var(--hero-border)", background: "var(--hero-surface)" }}
              >
                {/* Title bar */}
                <div
                  className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ borderColor: "var(--hero-border)" }}
                >
                  <div className="flex gap-1.5">
                    {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
                      <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="font-mono text-xs ml-2" style={{ color: "var(--hero-muted)" }}>
                    bash — sarmad@portfolio
                  </span>
                  <div className="flex-1" />
                  <span className="font-mono text-xs" style={{ color: "var(--hero-muted)" }}>
                    zsh 5.9
                  </span>
                </div>

                {/* Terminal body */}
                <div className="p-5 space-y-2" style={{ minHeight: "280px" }}>
                  {/* Always-visible session header */}
                  {mounted && (
                    <div className="font-mono text-xs mb-4" style={{ color: "var(--hero-muted)" }}>
                      Last login: {loginDate} on ttys001
                    </div>
                  )}

                  {TERMINAL_LINES.map((line, i) => {
                    const isCommand = i % 2 === 0;
                    const displayedLine = displayed[i] ?? "";
                    const isCurrentlyTyping = i === Math.min(displayed.length - 1, TERMINAL_LINES.length - 1);
                    const isFutureLine = i >= displayed.length;

                    if (isFutureLine) return null;

                    return (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2 font-mono text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.1 }}
                      >
                        {isCommand ? (
                          <span style={{ color: "var(--hero-cyan)" }} className="select-none shrink-0">❯</span>
                        ) : (
                          <span style={{ color: "var(--hero-muted)" }} className="select-none shrink-0 text-xs mt-0.5">↳</span>
                        )}
                        <span
                          style={{
                            color: isCommand ? "#e2e8f0" : "#22c55e",
                          }}
                        >
                          {displayedLine}
                          {isCurrentlyTyping && !done && (
                            <span
                              className="inline-block w-[7px] h-[14px] ml-0.5 align-middle"
                              style={{
                                background: "var(--hero-cyan)",
                                animation: "hero-blink 1s step-end infinite",
                              }}
                            />
                          )}
                        </span>
                      </motion.div>
                    );
                  })}

                  {/* Final cursor when done */}
                  {done && (
                    <div className="flex items-center gap-2 font-mono text-sm mt-2">
                      <span style={{ color: "var(--hero-cyan)" }}>❯</span>
                      <span
                        className="inline-block w-[7px] h-[14px]"
                        style={{
                          background: "var(--hero-cyan)",
                          animation: "hero-blink 1s step-end infinite",
                        }}
                      />
                    </div>
                  )}
                </div>

                {/* Status bar */}
                <div
                  className="flex items-center justify-between px-4 py-2 border-t font-mono text-[10px]"
                  style={{ borderColor: "var(--hero-border)", background: "rgba(0,229,255,0.04)" }}
                >
                  <span style={{ color: "#22c55e" }}>● ONLINE</span>
                  <span style={{ color: "var(--hero-muted)" }}>UTC+5 · PKT</span>
                  <span style={{ color: "var(--hero-cyan)" }}>main ✓</span>
                </div>
              </div>

              {/* Decorative corner bracket */}
              <div
                className="font-mono text-xs mt-3 text-right"
                style={{ color: "var(--hero-muted)" }}
              >
                // v2.0.0 · built with passion
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="flex items-center px-8 pb-8">
          <div className="flex-1 h-px" style={{ background: "var(--hero-border)" }} />
          <motion.button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 mx-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ y: -2 }}
          >
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "var(--hero-muted)" }}>
              scroll
            </span>
            <motion.div
              animate={reducedMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4" style={{ color: "var(--hero-cyan)" }} />
            </motion.div>
          </motion.button>
          <div className="flex-1 h-px" style={{ background: "var(--hero-border)" }} />
        </div>
      </div>

      {/* Bottom edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[1px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--hero-cyan), transparent)" }}
      />

      <EasterEgg open={hireMe} onClose={() => setHireMe(false)} />
    </section>
  );
}
