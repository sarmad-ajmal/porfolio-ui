/**
 * Performance utilities for optimized animations and interactions
 */

/**
 * Throttle function calls to improve performance
 * @param func - Function to throttle
 * @param limit - Minimum time between calls in ms
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function (this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Debounce function calls
 * @param func - Function to debounce
 * @param delay - Delay in ms
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Request animation frame with fallback
 */
export const requestAnimFrame =
  typeof window !== 'undefined'
    ? window.requestAnimationFrame ||
      function (callback: FrameRequestCallback) {
        return window.setTimeout(callback, 1000 / 60);
      }
    : (callback: FrameRequestCallback) => setTimeout(callback, 1000 / 60);

/**
 * Cancel animation frame with fallback
 */
export const cancelAnimFrame =
  typeof window !== 'undefined'
    ? window.cancelAnimationFrame ||
      function (id: number) {
        clearTimeout(id);
      }
    : clearTimeout;

/**
 * Passive event listener options for better scroll performance
 */
export const passiveSupported = (() => {
  if (typeof window === 'undefined') return false;

  let passive = false;
  try {
    const options = {
      get passive() {
        passive = true;
        return false;
      },
    };
    window.addEventListener('test', null as any, options);
    window.removeEventListener('test', null as any, options);
  } catch (err) {
    passive = false;
  }
  return passive;
})();

export const passiveEventOptions = passiveSupported
  ? { passive: true }
  : false;
