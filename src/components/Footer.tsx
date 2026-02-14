"use client";

import { useState, useEffect } from "react";
import { contact } from "@/data/contact";
import { Github, Linkedin, Twitter, Activity, Cpu, Clock, Wifi } from "lucide-react";

const SOCIAL = [
  { href: contact.linkedin, Icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/sarmad-ajmal", Icon: Github, label: "GitHub" },
  { href: "https://twitter.com/SarmadAjmal", Icon: Twitter, label: "Twitter" },
];

export function Footer() {
  const [year, setYear] = useState("");
  const [uptime, setUptime] = useState("00:00:00");

  useEffect(() => {
    setYear(String(new Date().getFullYear()));

    const start = Date.now();
    const tick = () => {
      const s = Math.floor((Date.now() - start) / 1000);
      const h = String(Math.floor(s / 3600)).padStart(2, "0");
      const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
      const sec = String(s % 60).padStart(2, "0");
      setUptime(`${h}:${m}:${sec}`);
    };
    const id = setInterval(tick, 1000);
    tick();
    return () => clearInterval(id);
  }, []);

  return (
    <footer
      className="relative py-6 px-8 md:px-16 lg:px-24"
      style={{ background: "var(--t-surface)", borderTop: "1px solid var(--t-border)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* System status bar */}
        <div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6 pb-6 font-mono text-[10px]"
          style={{ borderBottom: "1px solid var(--t-border)", color: "var(--t-muted)" }}
        >
          <span className="flex items-center gap-1.5">
            <Activity className="w-3 h-3" style={{ color: "var(--t-green)" }} />
            <span style={{ color: "var(--t-green)" }}>ALL SYSTEMS NOMINAL</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Cpu className="w-3 h-3" />
            NEXT.JS v14
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            SESSION {uptime}
          </span>
          <span className="flex items-center gap-1.5">
            <Wifi className="w-3 h-3" style={{ color: "var(--t-cyan)" }} />
            <span style={{ color: "var(--t-cyan)" }}>CONNECTED</span>
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-mono text-sm font-bold" style={{ color: "var(--t-cyan)" }}>
              {contact.name}
            </span>
            <span className="font-mono text-xs ml-3" style={{ color: "var(--t-muted)" }}>
              // {contact.title}
            </span>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {SOCIAL.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 border transition-colors hover:border-[var(--t-cyan)]"
                style={{ borderColor: "var(--t-border)", color: "var(--t-muted)" }}
              >
                <Icon className="w-4 h-4 hover:text-[#00e5ff] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div
          className="mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px]"
          style={{ borderTop: "1px solid var(--t-border)", color: "var(--t-muted)" }}
        >
          <span>{year && `© ${year} ${contact.name}. All rights reserved.`}</span>
          <span>
            Built with <span style={{ color: "var(--t-text)" }}>Next.js</span> +{" "}
            <span style={{ color: "var(--t-text)" }}>TypeScript</span> +{" "}
            <span style={{ color: "var(--t-text)" }}>Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
