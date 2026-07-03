"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Terminal, CheckCircle2 } from "lucide-react";
import { PROFILE } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    // Compose a mailto so the message actually goes somewhere without a backend.
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n- ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setSent(false), 4000);
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-space-800/60 px-4 py-3 font-mono text-sm text-white placeholder:text-foreground/30 outline-none transition-all focus:border-neon-cyan/60 focus:shadow-neon-cyan focus:ring-1 focus:ring-neon-cyan/40";

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      {/* Animated shader-like background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-float rounded-full bg-neon-cyan/10 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 animate-float-slow rounded-full bg-neon-purple/10 blur-[100px]" />
        <div className="absolute inset-0 bg-grid-neon bg-[size:50px_50px] opacity-10" />
      </div>

      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build the"
          highlight="future together"
          description="Have a role, a project or just a wild idea? Drop a message into the terminal."
        />

        <Reveal className="mt-14">
          <div className="neon-border glass-strong overflow-hidden rounded-3xl">
            {/* Terminal chrome */}
            <div className="flex items-center gap-2 border-b border-white/10 bg-space-800/60 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <div className="ml-3 flex items-center gap-2 font-mono text-xs text-foreground/50">
                <Terminal className="h-3.5 w-3.5" />
                shwetanshu@portfolio:~/contact
              </div>
            </div>

            <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-[1fr_0.8fr]">
              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="font-mono text-xs text-neon-cyan">
                  <span className="text-neon-purple">$</span> init contact --secure
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-xs text-foreground/50">
                    &gt; name
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-xs text-foreground/50">
                    &gt; email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-mono text-xs text-foreground/50">
                    &gt; message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Let's talk about..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <Magnetic strength={0.25}>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                  >
                    {sent ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" /> Message Composed
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Transmit Message
                      </>
                    )}
                  </Button>
                </Magnetic>
              </form>

              {/* Side panel */}
              <div className="flex flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div>
                  <div className="font-mono text-xs text-foreground/40">
                    {"// status"}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <motion.span
                      className="h-2.5 w-2.5 rounded-full bg-green-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                    <span className="text-sm font-medium text-green-400">
                      Open to opportunities
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-foreground/50">
                    I usually respond within 24 hours. Let&apos;s make something
                    unforgettable.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {[
                    { icon: Mail, label: "Email", href: `mailto:${PROFILE.email}` },
                    { icon: Github, label: "GitHub", href: PROFILE.socials.github },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      href: PROFILE.socials.linkedin,
                    },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-foreground/70 transition-all hover:border-neon-cyan/40 hover:text-neon-cyan"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="flex-1">{label}</span>
                      <Send className="h-3.5 w-3.5 -rotate-45 opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
