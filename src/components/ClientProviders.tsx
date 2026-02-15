"use client";

import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { CommandPalette } from "@/components/CommandPalette";
import { CustomCursor } from "@/components/CustomCursor";
import { PerformanceMonitorComponent } from "@/components/PerformanceMonitor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionNav } from "@/components/SectionNav";
import LogRocket from "logrocket";
import dynamic from "next/dynamic";
import { useEffect } from "react";

// Dynamic import for heavy components - better code splitting
const Mascot = dynamic(
  () => import("@/components/Mascot").then((mod) => ({ default: mod.MascotContainer })),
  {
    ssr: false,
    loading: () => null, // No loading state needed for decorative mascot
  }
);

/**
 * Client-side providers and interactive UI elements
 * Separated from main page for better server-side rendering
 */
export function ClientProviders() {
  useEffect(() => {
    // Always start from the top on page load/reload
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Initialize LogRocket for session replay and monitoring
    if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_LOGROCKET_APP_ID) {
      LogRocket.init(process.env.NEXT_PUBLIC_LOGROCKET_APP_ID);
    }
  }, []);

  return (
    <>
      {/* Performance monitoring */}
      <PerformanceMonitorComponent />

      {/* Interactive UI elements */}
      <CustomCursor />
      <ScrollProgress />
      <SectionNav />
      <AvailabilityBadge />
      <CommandPalette />
    </>
  );
}
