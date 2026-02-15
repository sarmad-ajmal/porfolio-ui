"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  city: string;
  condition: string;
  code: number;
}

function getConditionLabel(code: number): string {
  if (code === 0) return "CLEAR";
  if (code <= 3) return "PTLY_CLDY";
  if (code <= 48) return "FOG";
  if (code <= 57) return "DRIZZLE";
  if (code <= 67) return "RAIN";
  if (code <= 77) return "SNOW";
  if (code <= 82) return "SHOWERS";
  return "STORM";
}

function getConditionSymbol(code: number): string {
  if (code === 0) return "○";
  if (code <= 3) return "◑";
  if (code <= 48) return "≋";
  if (code <= 57) return "·̈";
  if (code <= 67) return "▾";
  if (code <= 77) return "*";
  if (code <= 82) return "▿";
  return "⚡";
}

export function WeatherHUD() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const cached = sessionStorage.getItem("portfolio_weather");
        if (cached) {
          setWeather(JSON.parse(cached));
          setLoading(false);
          return;
        }

        const geo = await fetch("https://ipapi.co/json/").then(r => r.json());
        if (cancelled || !geo.latitude) { setLoading(false); return; }

        const wx = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${geo.latitude}&longitude=${geo.longitude}&current_weather=true`
        ).then(r => r.json());
        if (cancelled) return;

        const result: WeatherData = {
          temp: Math.round(wx.current_weather.temperature),
          city: geo.city || geo.country_name || "Unknown",
          condition: getConditionLabel(wx.current_weather.weathercode),
          code: wx.current_weather.weathercode,
        };

        sessionStorage.setItem("portfolio_weather", JSON.stringify(result));
        setWeather(result);
      } catch {
        // silently fail — weather is an optional UI enhancement
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  if (!loading && !weather) return null;

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50 font-mono pointer-events-none select-none"
      initial={{ opacity: 0, x: -24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.6, type: "spring", stiffness: 120 }}
    >
      <div
        style={{
          background: "var(--t-surface)",
          border: "1px solid rgba(0,229,255,0.18)",
          boxShadow: "0 0 24px rgba(0,229,255,0.05), inset 0 0 16px rgba(0,229,255,0.02)",
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-3 py-1.5 border-b text-[10px] tracking-widest uppercase"
          style={{ borderColor: "rgba(0,229,255,0.12)", color: "rgba(0,229,255,0.5)" }}
        >
          <span>◈</span>
          <span>SYS::WEATHER</span>
        </div>

        {/* Body */}
        <div className="px-3 py-2.5 min-w-[130px]">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                className="text-xs tracking-wider"
                style={{ color: "var(--t-muted)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                exit={{ opacity: 0 }}
              >
                fetching...
              </motion.div>
            ) : weather ? (
              <motion.div
                key="data"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Temp + symbol */}
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-xl font-black leading-none"
                    style={{ color: "var(--t-cyan)" }}
                  >
                    {weather.temp}°C
                  </span>
                  <span
                    className="text-base leading-none"
                    style={{ color: "rgba(0,229,255,0.5)" }}
                  >
                    {getConditionSymbol(weather.code)}
                  </span>
                </div>

                {/* Condition label */}
                <div
                  className="text-[10px] tracking-widest mt-0.5"
                  style={{ color: "var(--t-muted)" }}
                >
                  {weather.condition}
                </div>

                {/* City */}
                <div
                  className="text-[10px] tracking-wider mt-1 truncate max-w-[120px]"
                  style={{ color: "rgba(0,229,255,0.35)" }}
                >
                  {weather.city}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {/* Bottom scan-line accent */}
        <div
          className="h-[1px] w-full"
          style={{ background: "linear-gradient(90deg, transparent, rgba(0,229,255,0.2), transparent)" }}
        />
      </div>
    </motion.div>
  );
}
