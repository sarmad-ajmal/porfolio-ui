/**
 * Web Vitals monitoring utilities
 * Tracks Core Web Vitals for performance optimization
 */

import { Metric } from 'web-vitals';

/**
 * Report Web Vitals to analytics
 */
export function reportWebVitals(metric: Metric) {
  // Log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Web Vital:', {
      name: metric.name,
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      rating: metric.rating,
      delta: metric.delta,
    });
  }

  // Send to analytics in production
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Send to LogRocket if available
  if (typeof window !== 'undefined' && (window as any).LogRocket) {
    (window as any).LogRocket.track('WebVital', {
      metric: metric.name,
      value: metric.value,
      rating: metric.rating,
    });
  }
}

/**
 * Performance observer for tracking custom metrics
 */
export class PerformanceMonitor {
  private static marks: Map<string, number> = new Map();

  /**
   * Mark the start of a performance measurement
   */
  static mark(name: string): void {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      window.performance.mark(`${name}-start`);
      this.marks.set(name, Date.now());
    } catch (e) {
      console.warn('Performance mark failed:', e);
    }
  }

  /**
   * Measure and report the duration since mark
   */
  static measure(name: string): number | null {
    if (typeof window === 'undefined' || !window.performance) return null;

    try {
      const startTime = this.marks.get(name);
      if (!startTime) return null;

      window.performance.mark(`${name}-end`);
      window.performance.measure(name, `${name}-start`, `${name}-end`);

      const measure = window.performance.getEntriesByName(name)[0];
      const duration = measure?.duration || Date.now() - startTime;

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`⏱️  ${name}: ${Math.round(duration)}ms`);
      }

      // Clean up
      this.marks.delete(name);
      window.performance.clearMarks(`${name}-start`);
      window.performance.clearMarks(`${name}-end`);
      window.performance.clearMeasures(name);

      return duration;
    } catch (e) {
      console.warn('Performance measure failed:', e);
      return null;
    }
  }

  /**
   * Track resource loading performance
   */
  static trackResourceTiming(): void {
    if (typeof window === 'undefined' || !window.performance) return;

    try {
      const resources = window.performance.getEntriesByType('resource');
      const slowResources = resources
        .filter((resource: any) => resource.duration > 1000)
        .map((resource: any) => ({
          name: resource.name,
          duration: Math.round(resource.duration),
          size: resource.transferSize,
        }));

      if (slowResources.length > 0 && process.env.NODE_ENV === 'development') {
        console.warn('🐌 Slow resources detected:', slowResources);
      }
    } catch (e) {
      console.warn('Resource timing tracking failed:', e);
    }
  }
}

/**
 * Track First Input Delay (FID) approximation
 */
export function trackInteractionDelay(): void {
  if (typeof window === 'undefined') return;

  let firstInteraction = true;

  const handler = (event: Event) => {
    if (!firstInteraction) return;
    firstInteraction = false;

    const delay = event.timeStamp - performance.now();
    if (process.env.NODE_ENV === 'development') {
      console.log('🖱️  First Interaction Delay:', Math.round(delay), 'ms');
    }
  };

  ['click', 'keydown', 'touchstart'].forEach((type) => {
    window.addEventListener(type, handler, { once: true, passive: true });
  });
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}
