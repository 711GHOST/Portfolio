"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A large soft radial glow that follows the cursor across the whole page,
 * giving the UI a living, reactive feel. Pure CSS transform - GPU friendly.
 * Only mounts on fine-pointer (mouse) devices - on touch it would just be a
 * dead 600px blob that also overflows the viewport.
 */
export function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const render = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      el.style.transform = `translate3d(${current.x - 300}px, ${
        current.y - 300
      }px, 0)`;
      raf = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[600px] w-[600px] rounded-full opacity-50 blur-3xl md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(34,211,238,0.18), rgba(168,85,247,0.10) 40%, transparent 70%)",
      }}
    />
  );
}
