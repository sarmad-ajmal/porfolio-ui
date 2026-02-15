"use client";

import { motion, useInView } from "framer-motion";
import { contact } from "@/data/contact";
import { Linkedin, Download, Send, Github, Twitter, Terminal, Copy, Check } from "lucide-react";
import { useRef, useState } from "react";

const LINKS = [
  { href: contact.linkedin, Icon: Linkedin, label: "LinkedIn", action: "connect" },
  { href: "https://github.com/sarmad-ajmal", Icon: Github, label: "GitHub", action: "follow" },
  { href: "https://twitter.com/SarmadAjmal", Icon: Twitter, label: "Twitter", action: "follow" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden"
      style={{ background: "var(--t-bg)" }}
    >
      {/* Radial spotlight behind ASCII art */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,229,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="t-section-header">[06 — CONTACT]</span>
              <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
            </div>
          </div>
        </motion.div>

        {/* Big headline — the dramatic centerpiece */}
        <motion.h2
          className="text-center mb-12 font-mono font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter select-none"
          style={{
            color: "var(--t-cyan)",
            textShadow: "0 0 40px rgba(0,229,255,0.3), 0 0 80px rgba(0,229,255,0.1)",
            WebkitTextStroke: "1px rgba(0,229,255,0.4)",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CONNECT
        </motion.h2>

        <motion.p
          className="t-section-subtitle text-center max-w-lg mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          Available for freelance projects and full-time opportunities.
          Let&apos;s build something amazing together.
        </motion.p>

        {/* Terminal-style connection prompt */}
        <motion.div
          className="t-card mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Terminal header */}
          <div
            className="flex items-center gap-3 px-6 py-3"
            style={{ borderBottom: "1px solid var(--t-border)" }}
          >
            <Terminal className="w-3.5 h-3.5" style={{ color: "var(--t-cyan)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--t-cyan)" }}>
              connect.sh
            </span>
            <div className="flex-1" />
            <span className="font-mono text-[10px]" style={{ color: "var(--t-green)" }}>● READY</span>
          </div>

          {/* Terminal body — command prompt style */}
          <div className="p-6 md:p-8">
            {/* Simulated command */}
            <div className="font-mono text-sm mb-6" style={{ color: "var(--t-muted)" }}>
              <span style={{ color: "var(--t-cyan)" }}>❯</span>{" "}
              <span style={{ color: "var(--t-text)" }}>./connect --with sarmad</span>
            </div>
            <div className="font-mono text-sm mb-8" style={{ color: "var(--t-green)" }}>
              ↳ Establishing connection... Choose a channel:
            </div>

            {/* Link cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LINKS.map(({ href, Icon, label, action }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="t-card flex items-center gap-4 p-5 group relative overflow-hidden"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ borderColor: "rgba(0,229,255,0.5)" }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse at center, rgba(0,229,255,0.04) 0%, transparent 70%)" }}
                  />
                  <Icon className="w-5 h-5 shrink-0 relative z-10" style={{ color: "var(--t-cyan)" }} />
                  <div className="relative z-10 flex-1">
                    <div className="font-mono text-xs font-bold" style={{ color: "var(--t-text)" }}>{label}</div>
                    <div className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>--{action}</div>
                  </div>
                  <Send
                    className="w-3 h-3 relative z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 -translate-x-2"
                    style={{ color: "var(--t-cyan)" }}
                  />
                </motion.a>
              ))}
            </div>

            {/* Connection status */}
            <div className="mt-6 pt-4 font-mono text-xs" style={{ borderTop: "1px solid var(--t-border)", color: "var(--t-muted)" }}>
              <span style={{ color: "var(--t-cyan)" }}>❯</span>{" "}
              <span className="inline-block w-[7px] h-[12px] align-middle" style={{ background: "var(--t-cyan)", animation: "t-blink 1s step-end infinite" }} />
            </div>
          </div>
        </motion.div>

        {/* Resume download — styled as a wget command */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 px-8 py-4 font-mono text-sm font-bold uppercase tracking-widest t-clip relative overflow-hidden"
            style={{
              background: "var(--t-cyan)",
              color: "var(--t-bg)",
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            <motion.div
              className="absolute inset-0"
              style={{ background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)" }}
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
            <Download className="w-5 h-5 relative z-10" />
            <span className="relative z-10">wget resume.pdf</span>
          </motion.a>
        </motion.div>

        {/* Email row */}
        <motion.div
          className="flex items-center justify-center gap-3 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span style={{ color: "var(--t-muted)" }} className="text-xs">or email directly</span>
          <a
            href={`mailto:${contact.email}`}
            className="transition-colors hover:underline"
            style={{ color: "var(--t-cyan)" }}
          >
            {contact.email}
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-1.5 px-2.5 py-1 border font-mono text-[10px] uppercase tracking-widest transition-all"
            style={{
              borderColor: copied ? "var(--t-green)" : "var(--t-border)",
              color: copied ? "var(--t-green)" : "var(--t-muted)",
              background: copied ? "rgba(34,197,94,0.06)" : "transparent",
            }}
            aria-label="Copy email"
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? "copied" : "copy"}
          </button>
        </motion.div>

        <div className="mt-16 flex items-center gap-4">
          <div className="flex-1 h-px" style={{ background: "var(--t-border)" }} />
          <span className="font-mono text-[10px]" style={{ color: "var(--t-muted)" }}>// EOF</span>
        </div>
      </div>
    </section>
  );
}
