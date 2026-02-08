"use client";

import { useEffect } from 'react';
import { useReportWebVitals } from 'next/web-vitals';
import { reportWebVitals, PerformanceMonitor, trackInteractionDelay } from '@/utils/webVitals';

/**
 * Performance monitoring component
 * Tracks Core Web Vitals and custom performance metrics
 */
export function PerformanceMonitorComponent() {
  // Report Web Vitals using Next.js hook
  useReportWebVitals((metric) => {
    reportWebVitals(metric);
  });

  useEffect(() => {
    // Mark initial render
    PerformanceMonitor.mark('app-render');

    // Track initial metrics
    const measureInitial = () => {
      PerformanceMonitor.measure('app-render');
      PerformanceMonitor.trackResourceTiming();
      trackInteractionDelay();
    };

    // Wait for page to be fully loaded
    if (document.readyState === 'complete') {
      measureInitial();
    } else {
      window.addEventListener('load', measureInitial);
      return () => window.removeEventListener('load', measureInitial);
    }
  }, []);

  // Component doesn't render anything
  return null;
}
