"use client";

import { motion } from "framer-motion";
import { ABOUT_TIMELINE, PROFILE } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="Engineer at the"
          highlight="intersection of AI & scale"
          description={PROFILE.intro}
        />

        <div className="mt-20 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left - narrative card */}
          <Reveal direction="right">
            <TiltCard className="neon-border glass-strong p-8 sm:p-10">
              <div className="preserve-3d" style={{ transform: "translateZ(40px)" }}>
                <h3 className="font-display text-2xl font-bold text-white">
                  Two worlds, one engineer.
                </h3>
                <p className="mt-4 text-foreground/70">
                  I&apos;ve shipped enterprise-grade automation at{" "}
                  <span className="text-neon-cyan">TCS</span>, and I build
                  cutting-edge AI research projects - from emotion-aware music
                  to autonomous research agents.
                </p>
                <p className="mt-4 text-foreground/70">
                  My sweet spot is turning ambiguous problems and messy data
                  into products that feel effortless, fast and{" "}
                  <span className="text-neon-purple">a little bit magical</span>.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { k: "Focus", v: "AI / ML" },
                    { k: "Stack", v: "Full Stack" },
                    { k: "Cloud", v: "GCP · Azure" },
                  ].map((s) => (
                    <div
                      key={s.k}
                      className="rounded-xl border border-white/10 bg-white/5 p-3 text-center"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-widest text-foreground/40">
                        {s.k}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-neon-cyan">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>

          {/* Right - animated timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute left-0 top-2 h-full w-px origin-top bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent"
            />

            <div className="flex flex-col gap-10">
              {ABOUT_TIMELINE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1} direction="left">
                  <div className="relative">
                    {/* Node */}
                    <span className="absolute -left-[34px] top-1.5 flex h-4 w-4 items-center justify-center">
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-neon-cyan/40" />
                      <span className="h-2.5 w-2.5 rounded-full bg-neon-cyan shadow-neon-cyan" />
                    </span>

                    <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-neon-cyan/40 hover:bg-white/[0.06]">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-neon-purple/15 px-3 py-1 font-mono text-xs text-neon-purple">
                          {item.year}
                        </span>
                        <span className="text-xs uppercase tracking-widest text-foreground/40">
                          {item.subtitle}
                        </span>
                      </div>
                      <h4 className="mt-3 font-display text-xl font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="mt-2 text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
