"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const COMMANDS = [
  { id: "hero",           label: "~/home",          description: "Back to top",       section: "hero" },
  { id: "about",          label: "about.md",         description: "Who I am",          section: "about" },
  { id: "skills",         label: "skills.json",      description: "Tech stack",        section: "skills" },
  { id: "projects",       label: "projects/",        description: "What I've built",   section: "projects" },
  { id: "experience",     label: "experience.log",   description: "Work history",      section: "experience" },
  { id: "certifications", label: "certs/",           description: "Certifications",    section: "certifications" },
  { id: "contact",        label: "connect.sh",       description: "Get in touch",      section: "contact" },
];

export function CommandPalette() {
  const [open, setOpen]         = useState(false);
  const [query, setQuery]       = useState("");
  const [selected, setSelected] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter(
    (c) =>
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  function navigate(section: string) {
    setOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") setSelected((s) => Math.min(s + 1, filtered.length - 1));
    if (e.key === "ArrowUp")   setSelected((s) => Math.max(s - 1, 0));
    if (e.key === "Enter" && filtered[selected]) navigate(filtered[selected].section);
  }

  useEffect(() => { setSelected(0); }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="fixed top-1/3 left-1/2 z-[101] w-full max-w-lg -translate-x-1/2 -translate-y-1/2 font-mono px-4"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            <div
              style={{
                background: "var(--t-surface)",
                border: "1px solid var(--t-border)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,229,255,0.06)",
              }}
            >
              {/* Search row */}
              <div
                className="flex items-center gap-3 px-4 py-3.5 border-b"
                style={{ borderColor: "var(--t-border)" }}
              >
                <span style={{ color: "var(--t-cyan)" }} className="text-sm select-none">❯</span>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKeyDown}
                  placeholder="type a section or command..."
                  className="flex-1 bg-transparent outline-none text-sm tracking-wide"
                  style={{ color: "var(--t-text)", caretColor: "var(--t-cyan)" }}
                />
                <kbd
                  className="text-[10px] px-1.5 py-0.5 border select-none"
                  style={{ borderColor: "var(--t-border)", color: "var(--t-muted)" }}
                >
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div className="py-1">
                {filtered.length === 0 ? (
                  <div className="px-4 py-4 text-xs text-center" style={{ color: "var(--t-muted)" }}>
                    no commands found
                  </div>
                ) : (
                  filtered.map((cmd, i) => (
                    <div
                      key={cmd.id}
                      className="flex items-center gap-4 px-4 py-2.5 cursor-pointer text-sm transition-colors"
                      style={{
                        background: i === selected ? "rgba(0,229,255,0.06)" : "transparent",
                        borderLeft: i === selected ? "2px solid var(--t-cyan)" : "2px solid transparent",
                      }}
                      onClick={() => navigate(cmd.section)}
                      onMouseEnter={() => setSelected(i)}
                    >
                      <span style={{ color: "var(--t-cyan)" }}>{cmd.label}</span>
                      <span className="flex-1 text-[11px]" style={{ color: "var(--t-muted)" }}>
                        {cmd.description}
                      </span>
                      {i === selected && (
                        <kbd
                          className="text-[10px] px-1.5 py-0.5 border select-none"
                          style={{ borderColor: "var(--t-border)", color: "var(--t-muted)" }}
                        >
                          ↵
                        </kbd>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hints */}
              <div
                className="flex items-center gap-5 px-4 py-2 border-t text-[10px] select-none"
                style={{ borderColor: "var(--t-border)", color: "var(--t-muted)" }}
              >
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
                <div className="flex-1" />
                <span style={{ color: "var(--t-cyan)" }}>⌘K</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
