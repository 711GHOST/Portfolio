"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}

/**
 * Consistent section header with an eyebrow tag, gradient highlight and
 * optional supporting copy.
 */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal direction="down">
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p
            className={cn(
              "max-w-2xl text-base text-foreground/60 sm:text-lg",
              align === "center" ? "mx-auto" : ""
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
