"use client";

import { useEffect } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import LogRocket from "logrocket";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_LOGROCKET_APP_ID) {
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID);
    }
  }, []);

  return (
    <main className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <CustomCursor />
      <ScrollProgress />
      <AvailabilityBadge />

      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />

      <SpeedInsights />
    </main>
  );
}
