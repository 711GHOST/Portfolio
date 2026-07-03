"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * A cinematic boot sequence that counts to 100% then reveals the site.
 * Uses a time-based interval (not rAF) plus a hard safety timeout so it can
 * never get stuck - even if the tab is backgrounded and timers are throttled.
 */
export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Skip the whole sequence for reduced-motion users.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }

    const start = Date.now();
    const duration = 1600;

    const interval = setInterval(() => {
      const p = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p >= 1) {
        clearInterval(interval);
        setTimeout(() => setDone(true), 350);
      }
    }, 40);

    // Hard safety net: never let the loader block the page for longer than 3s.
    const safety = setTimeout(() => {
      setProgress(100);
      setDone(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(safety);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-space"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="font-display text-6xl font-black tracking-tighter text-gradient sm:text-8xl"
          >
            {progress}%
          </motion.div>
          <div className="mt-6 h-px w-56 overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-aurora"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.4em] text-foreground/40">
            Initializing systems
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
