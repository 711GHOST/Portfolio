"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when an element scrolls into view. Useful for animated counters
 * and reveal-on-scroll triggers without pulling in a heavy dependency.
 */
export function useInViewOnce<T extends HTMLElement = HTMLElement>(
  threshold = 0.3
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [inView, threshold]);

  return { ref, inView };
}
