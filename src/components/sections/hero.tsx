"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, Sparkles } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

// 3D canvas is client-only + lazy loaded to keep the initial bundle lean.
const HeroScene = dynamic(() => import("@/components/three/hero-scene"), {
  ssr: false,
  loading: () => null,
});

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

function RoleRotator() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % PROFILE.roles.length),
      2600
    );
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] items-center overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient font-semibold"
        >
          {PROFILE.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      {/* 3D layer */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>

      {/* Vignette + grid overlays */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-grid-neon bg-[size:60px_60px] opacity-[0.35] mask-fade-b" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_35%,#050816_78%)]" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <motion.div variants={item}>
          <span className="eyebrow mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Available for AI / ML roles
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block text-white/90">Hi, I&apos;m</span>
          <span className="text-gradient text-glow-cyan">
            {PROFILE.firstName}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-2xl font-display text-xl text-foreground/80 sm:text-2xl md:text-3xl"
        >
          I build{" "}
          <span className="text-neon-cyan text-glow-cyan">AI systems</span> that
          feel like the future.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-5 font-mono text-sm text-foreground/50 sm:text-base"
        >
          <span className="text-neon-purple">&gt;</span> <RoleRotator />
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Magnetic>
            <a href="#projects">
              <Button variant="gradient" size="lg">
                View My Work
              </Button>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact">
              <Button variant="neon" size="lg">
                Get In Touch
              </Button>
            </a>
          </Magnetic>
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-3"
        >
          {[
            { icon: Github, href: PROFILE.socials.github, label: "GitHub" },
            { icon: Linkedin, href: PROFILE.socials.linkedin, label: "LinkedIn" },
            { icon: FileText, href: PROFILE.socials.resume, label: "Resume" },
          ].map(({ icon: Icon, href, label }) => (
            <Magnetic key={label} strength={0.5}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full glass text-foreground/70 transition-colors hover:text-neon-cyan"
              >
                <Icon className="h-5 w-5" />
              </a>
            </Magnetic>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/40"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
