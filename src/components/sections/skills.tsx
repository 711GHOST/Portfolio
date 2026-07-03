"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Split skills across two orbital rings.
const INNER = SKILLS.slice(0, 6);
const OUTER = SKILLS.slice(6);

interface OrbitProps {
  items: typeof SKILLS;
  radius: number;
  duration: number;
  reverse?: boolean;
  onHover: (name: string | null) => void;
  active: string | null;
}

function Orbit({ items, radius, duration, reverse, onHover, active }: OrbitProps) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      style={{ willChange: "transform" }}
    >
      {/* Orbit ring guide */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {items.map((skill, i) => {
        const angle = (i / items.length) * Math.PI * 2;
        // Round to whole pixels so SSR and client markup match exactly
        // (avoids float non-determinism -> hydration mismatch).
        const x = Math.round(Math.cos(angle) * radius);
        const y = Math.round(Math.sin(angle) * radius);
        const Icon = skill.icon;
        const isActive = active === skill.name;
        return (
          <div
            key={skill.name}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(${x}px, ${y}px)` }}
          >
            {/* Counter-rotate so chips stay upright */}
            <motion.div
              animate={{ rotate: reverse ? 360 : -360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
              className="-translate-x-1/2 -translate-y-1/2"
            >
              <button
                onMouseEnter={() => onHover(skill.name)}
                onMouseLeave={() => onHover(null)}
                data-cursor="hover"
                className={cn(
                  "group flex h-14 w-14 items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-300 sm:h-16 sm:w-16",
                  isActive
                    ? "scale-125 border-transparent"
                    : "border-white/10 bg-white/5 hover:scale-110"
                )}
                style={
                  isActive
                    ? {
                        backgroundColor: `${skill.color}22`,
                        boxShadow: `0 0 24px ${skill.color}, inset 0 0 12px ${skill.color}55`,
                      }
                    : {}
                }
              >
                <Icon
                  className="h-6 w-6 transition-colors sm:h-7 sm:w-7"
                  style={{ color: skill.color }}
                />
              </button>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

export function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const activeSkill = SKILLS.find((s) => s.name === active);

  return (
    <section id="skills" className="relative py-28 sm:py-36">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/10 blur-[120px]" />

      <div className="container">
        <SectionHeading
          eyebrow="Skill Galaxy"
          title="An arsenal orbiting"
          highlight="a single AI core"
          description="Hover a node to feel it charge with energy. Every skill here is one I use to ship real products."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Galaxy */}
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              {/* Central core */}
              <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32">
                  <div className="absolute inset-0 animate-pulse-glow rounded-full bg-aurora bg-[length:200%] blur-xl" />
                  <div className="absolute inset-0 animate-spin-slow rounded-full border border-neon-cyan/30" />
                  <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full glass-strong text-center sm:h-24 sm:w-24">
                    <span className="font-display text-2xl font-bold text-gradient">
                      AI
                    </span>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/50">
                      core
                    </span>
                  </div>
                </div>
              </div>

              <Orbit
                items={INNER}
                radius={120}
                duration={38}
                onHover={setActive}
                active={active}
              />
              <Orbit
                items={OUTER}
                radius={210}
                duration={60}
                reverse
                onHover={setActive}
                active={active}
              />
            </div>
          </Reveal>

          {/* Details / legend */}
          <Reveal direction="left">
            <div className="rounded-3xl glass-strong p-8">
              <motion.div
                key={activeSkill?.name ?? "idle"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                {activeSkill ? (
                  <>
                    <div
                      className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: `${activeSkill.color}22`,
                        boxShadow: `0 0 24px ${activeSkill.color}55`,
                      }}
                    >
                      <activeSkill.icon
                        className="h-7 w-7"
                        style={{ color: activeSkill.color }}
                      />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      {activeSkill.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">
                      {activeSkill.category}
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="font-display text-2xl font-bold text-white">
                      16 Technologies. One toolkit.
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      Languages, ML frameworks, data tooling and cloud - hover a
                      node in the galaxy to inspect it.
                    </p>
                  </>
                )}
              </motion.div>

              <div className="mt-6 flex flex-wrap gap-2">
                {SKILLS.map((s) => (
                  <Badge
                    key={s.name}
                    accent={active === s.name ? s.color : undefined}
                    onMouseEnter={() => setActive(s.name)}
                    onMouseLeave={() => setActive(null)}
                    className="cursor-default"
                  >
                    {s.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
