"use client";

import { useEffect, useRef, useState } from "react";
import { lerp } from "@/lib/utils";

/**
 * A neon dual-ring cursor that lags smoothly behind the pointer and grows
 * over interactive elements. Disabled on touch devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;
    setEnabled(true);

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let hovering = false;

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`;
      }
      const target = e.target as HTMLElement;
      hovering = !!target.closest(
        'a, button, [data-cursor="hover"], input, textarea'
      );
    };

    let raf = 0;
    const render = () => {
      ring.x = lerp(ring.x, mouse.x, 0.18);
      ring.y = lerp(ring.y, mouse.y, 0.18);
      if (ringRef.current) {
        const scale = hovering ? 1.9 : 1;
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) scale(${scale})`;
        ringRef.current.style.opacity = hovering ? "1" : "0.6";
      }
      raf = requestAnimationFrame(render);
    };
    render();

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
      <div
        ref={dotRef}
        className="absolute -ml-1 -mt-1 h-2 w-2 rounded-full bg-neon-cyan shadow-[0_0_10px_#22d3ee]"
      />
      <div
        ref={ringRef}
        className="absolute -ml-4 -mt-4 h-8 w-8 rounded-full border border-neon-cyan/70 transition-[opacity] duration-200"
        style={{ boxShadow: "0 0 18px rgba(34,211,238,0.35)" }}
      />
    </div>
  );
}
