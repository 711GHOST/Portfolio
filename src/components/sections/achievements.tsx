"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS, COUNTERS } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { TiltCard } from "@/components/shared/tilt-card";

export function Achievements() {
  return (
    <section id="achievements" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />

      <div className="container">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition &"
          highlight="milestones"
        />

        {/* Counters */}
        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {COUNTERS.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center">
                <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative font-display text-4xl font-bold text-gradient sm:text-5xl">
                  <AnimatedCounter
                    value={c.value}
                    prefix={c.prefix}
                    suffix={c.suffix}
                  />
                </div>
                <div className="relative mt-2 text-xs uppercase tracking-widest text-foreground/50">
                  {c.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Trophy cards */}
        <div className="perspective mt-8 grid gap-6 md:grid-cols-3">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.title} delay={i * 0.1}>
                <TiltCard className="h-full" intensity={10}>
                  <div className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-md">
                    {/* Trophy visual */}
                    <div className="relative mb-5 flex h-20 w-20 items-center justify-center">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-aurora bg-[length:200%] opacity-30 blur-xl"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                      />
                      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong">
                        <Icon className="h-8 w-8 text-neon-cyan" />
                      </div>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground/60">
                      {a.description}
                    </p>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
