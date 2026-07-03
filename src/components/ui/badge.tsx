import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  accent?: string;
}

/**
 * Small glassy neon tag used for tech stacks and categories.
 */
function Badge({ className, accent, style, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors",
        "border-white/10 bg-white/5 text-foreground/80 backdrop-blur-sm hover:text-white",
        className
      )}
      style={{
        ...(accent
          ? {
              borderColor: `${accent}40`,
              color: accent,
              boxShadow: `0 0 12px ${accent}20`,
            }
          : {}),
        ...style,
      }}
      {...props}
    />
  );
}

export { Badge };
