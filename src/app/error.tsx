"use client";

import { Button } from "@/components/ui/button";

/**
 * Branded error boundary for the route. Keeps the cinematic aesthetic even
 * when something goes wrong, and offers a one-click recovery.
 */
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-space px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-neon bg-[size:60px_60px] opacity-20" />
      <h1 className="font-display text-6xl font-black text-gradient">Oops.</h1>
      <p className="max-w-md text-foreground/60">
        A glitch in the matrix. Something went wrong while rendering this
        experience - let&apos;s try that again.
      </p>
      <Button variant="gradient" size="lg" onClick={reset}>
        Reboot Experience
      </Button>
    </div>
  );
}
