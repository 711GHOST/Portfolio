"use client";

import { motion } from "framer-motion";
import { MapPin, CalendarDays, Award } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { TiltCard } from "@/components/shared/tilt-card";
import { Badge } from "@/components/ui/badge";

const CODE_SNIPPETS = [
  "df = pd.read_sql(query, engine)",
  "wb = openpyxl.Workbook()",
  "doc = Document('report.docx')",
  "SELECT * FROM synapse.efficacy",
  "pipeline.run(validate=True)",
  "report.to_excel(writer)",
];

function DataPipelines() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[15, 38, 62, 85].map((y, i) => (
        <g key={i}>
          <line
            x1="0"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="1"
          />
          <motion.line
            x1="0"
            y1={`${y}%`}
            x2="18%"
            y2={`${y}%`}
            stroke="url(#flow)"
            strokeWidth="2"
            initial={{ x: "-20%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 3 + i * 0.7,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        </g>
      ))}
    </svg>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28 sm:py-36">
      {/* Background pipelines + floating snippets */}
      <DataPipelines />
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        {CODE_SNIPPETS.map((code, i) => (
          <motion.span
            key={code}
            className="absolute whitespace-nowrap font-mono text-xs text-neon-cyan/20"
            style={{
              top: `${10 + i * 14}%`,
              left: `${(i % 3) * 33 + 5}%`,
            }}
            animate={{ y: [0, -16, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 6 + i, repeat: Infinity, delay: i * 0.6 }}
          >
            {code}
          </motion.span>
        ))}
      </div>

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Work Experience"
          title="Enterprise scale at"
          highlight="Tata Consultancy Services"
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Left - hologram badge + meta */}
          <Reveal direction="right">
            <div className="sticky top-28">
              <TiltCard className="neon-border glass-strong p-8" intensity={10}>
                <div
                  className="preserve-3d flex flex-col items-center text-center"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {/* Hologram badge */}
                  <div className="relative flex h-32 w-32 items-center justify-center">
                    <div className="absolute inset-0 animate-pulse-glow rounded-full bg-neon-blue/20 blur-2xl" />
                    <div className="absolute inset-2 animate-spin-slow rounded-full border border-dashed border-neon-cyan/40" />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full glass-strong">
                      <span className="font-display text-3xl font-black tracking-tight text-gradient">
                        {EXPERIENCE.short}
                      </span>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-bold text-white">
                    {EXPERIENCE.role}
                  </h3>
                  <p className="text-sm text-neon-cyan">{EXPERIENCE.company}</p>

                  <div className="mt-4 flex flex-col gap-2 text-sm text-foreground/60">
                    <span className="inline-flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-neon-purple" />
                      {EXPERIENCE.location}
                    </span>
                    <span className="inline-flex items-center justify-center gap-2">
                      <CalendarDays className="h-4 w-4 text-neon-purple" />
                      {EXPERIENCE.duration}
                    </span>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-medium text-yellow-300">
                    <Award className="h-4 w-4" />
                    TCS Gems Award
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {EXPERIENCE.stack.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          {/* Right - counters + contribution cards */}
          <div className="flex flex-col gap-8">
            {/* Counters */}
            <div className="grid grid-cols-3 gap-4">
              {EXPERIENCE.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center sm:p-6">
                    <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-1 text-[11px] uppercase tracking-widest text-foreground/50 sm:text-xs">
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Contribution cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {EXPERIENCE.contributions.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/40 hover:bg-white/[0.06] hover:shadow-neon-cyan">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/15 font-mono text-xs text-neon-cyan">
                        0{i + 1}
                      </span>
                      <h4 className="font-display font-semibold text-white transition-colors group-hover:text-neon-cyan">
                        {c.title}
                      </h4>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                      {c.detail}
                    </p>
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
