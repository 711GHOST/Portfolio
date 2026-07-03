"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
  // Normalized to [-1, 1] relative to viewport center - handy for parallax.
  nx: number;
  ny: number;
}

/**
 * Tracks the global mouse position (throttled via rAF).
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, nx: 0, ny: 0 });

  useEffect(() => {
    let frame = 0;
    const handle = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const nx = (e.clientX / window.innerWidth) * 2 - 1;
        const ny = (e.clientY / window.innerHeight) * 2 - 1;
        setPos({ x: e.clientX, y: e.clientY, nx, ny });
      });
    };
    window.addEventListener("mousemove", handle);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handle);
    };
  }, []);

  return pos;
}
