"use client";

import { useMagnetic } from "@/hooks/use-magnetic";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Wraps any content to give it a magnetic pull toward the cursor on hover.
 */
export function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLDivElement>(strength);
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn("inline-block will-change-transform", className)}
    >
      {children}
    </div>
  );
}
