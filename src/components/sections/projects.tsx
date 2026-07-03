"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Star, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { TiltCard } from "@/components/shared/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <TiltCard
      className="h-full cursor-pointer"
      glareColor={`${project.accent}30`}
    >
      <div
        onClick={() => onOpen(project)}
        data-cursor="hover"
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors hover:border-white/20"
      >
        {/* Accent glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
          style={{ background: project.accent }}
        />

        <div className="flex items-start justify-between" style={{ transform: "translateZ(30px)" }}>
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl font-display text-lg font-bold"
            style={{
              backgroundColor: `${project.accent}22`,
              color: project.accent,
              boxShadow: `0 0 18px ${project.accent}40`,
            }}
          >
            {project.title.charAt(0)}
          </div>
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-yellow-300">
              <Star className="h-3 w-3" /> Featured
            </span>
          )}
        </div>

        <h3
          className="mt-5 font-display text-xl font-bold text-white"
          style={{ transform: "translateZ(24px)" }}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-neon-cyan/80">{project.tagline}</p>
        <p className="mt-3 line-clamp-3 flex-1 text-sm text-foreground/55">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <Badge key={t} className="text-[10px]">
              {t}
            </Badge>
          ))}
          {project.tech.length > 4 && (
            <Badge className="text-[10px]">+{project.tech.length - 4}</Badge>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
          <span className="text-xs font-medium text-foreground/50">
            View details
          </span>
          <ArrowUpRight className="h-4 w-4 text-neon-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </TiltCard>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          <div className="absolute inset-0 bg-space/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="neon-border glass-strong relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full glass text-foreground/70 hover:text-neon-cyan"
            >
              <X className="h-5 w-5" />
            </button>

            <div
              className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl font-display text-2xl font-bold"
              style={{
                backgroundColor: `${project.accent}22`,
                color: project.accent,
                boxShadow: `0 0 24px ${project.accent}55`,
              }}
            >
              {project.title.charAt(0)}
            </div>

            <h3 className="font-display text-3xl font-bold text-white">
              {project.title}
            </h3>
            <p className="mt-1 text-neon-cyan">{project.tagline}</p>
            <p className="mt-4 text-foreground/70">{project.description}</p>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/40">
              Highlights
            </h4>
            <ul className="mt-3 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-foreground/70">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ background: project.accent }}
                  />
                  {h}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 font-mono text-xs uppercase tracking-widest text-foreground/40">
              Tech Stack
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} accent={project.accent}>
                  {t}
                </Badge>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="outline">
                    <Github className="h-4 w-4" /> Source
                  </Button>
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="gradient">
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const featured = PROJECTS.filter((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <div className="container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've"
          highlight="designed & shipped"
          description="From emotion-aware music to autonomous research agents - click any card to dive in."
        />

        {/* Featured */}
        <div className="perspective mt-16 grid gap-6 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>

        {/* Others */}
        <h3 className="mb-6 mt-20 text-center font-mono text-xs uppercase tracking-[0.3em] text-foreground/40">
          More Builds
        </h3>
        <div className="perspective grid gap-6 md:grid-cols-3">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.08}>
              <ProjectCard project={p} onOpen={setSelected} />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
