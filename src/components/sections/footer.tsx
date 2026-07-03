"use client";

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/lib/data";
import { Magnetic } from "@/components/shared/magnetic";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent" />
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-sm text-center md:text-left">
            <a href="#home" className="font-display text-2xl font-bold text-white">
              Shwetanshu<span className="text-neon-cyan">.</span>
            </a>
            <p className="mt-3 text-sm text-foreground/50">
              {PROFILE.tagline}
            </p>
            <div className="mt-5 flex justify-center gap-3 md:justify-start">
              {[
                { icon: Github, href: PROFILE.socials.github },
                { icon: Linkedin, href: PROFILE.socials.linkedin },
                { icon: Mail, href: `mailto:${PROFILE.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <Magnetic key={i} strength={0.5}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full glass text-foreground/60 transition-colors hover:text-neon-cyan"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-foreground/50 transition-colors hover:text-neon-cyan"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-foreground/40">
            © {new Date().getFullYear()} {PROFILE.name}.
          </p>
          <Magnetic>
            <a
              href="#home"
              className="flex items-center gap-2 text-xs text-foreground/50 transition-colors hover:text-neon-cyan"
            >
              Back to top <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </Magnetic>
        </div>
      </div>
    </footer>
  );
}
