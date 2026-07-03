# Shwetanshu Sood - Futuristic AI Portfolio

A world-class, Awwwards-grade portfolio for **Shwetanshu Sood** (AI Engineer · ML Engineer · Data Scientist · Full Stack Developer). Cyberpunk-premium aesthetic: full-screen 3D hero, skill galaxy, glowing TCS experience timeline, tilt project cards, animated counters and a terminal-style contact section.

Built with a clean, reusable component architecture and tuned for performance despite the heavy visuals.

---

## ✨ Tech Stack

| Layer            | Tech                                                        |
| ---------------- | ---------------------------------------------------------- |
| Framework        | **Next.js 15** (App Router) + **React 19** + **TypeScript**|
| Styling          | **Tailwind CSS** + custom design tokens + shadcn-style UI  |
| Animation        | **Framer Motion** + **GSAP** (ScrollTrigger)               |
| 3D               | **Three.js** + **React Three Fiber v9** + **drei v10**     |
| Smooth scroll    | **Lenis** (wired into GSAP ticker)                         |
| Icons            | **lucide-react**                                           |

> ⚠️ **Version note:** Next.js 15's App Router requires **React 19**. React 19 in turn requires **React Three Fiber v9** and **drei v10**. Do not downgrade React to 18 - it causes a `ReactCurrentOwner` hydration crash.

---

## 📁 Folder Structure

```
shwetanshu-portfolio/
├── public/
│   └── resume.txt                 # replace with your real resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css            # design system: glass, neon, gradients, keyframes
│   │   ├── layout.tsx             # fonts + metadata (SEO/OG)
│   │   ├── page.tsx               # assembles all sections
│   │   ├── error.tsx              # branded error boundary
│   │   └── not-found.tsx          # branded 404
│   ├── components/
│   │   ├── ui/                    # shadcn-style primitives
│   │   │   ├── button.tsx
│   │   │   └── badge.tsx
│   │   ├── providers/
│   │   │   └── smooth-scroll-provider.tsx
│   │   ├── effects/
│   │   │   ├── preloader.tsx      # cinematic boot sequence (with safety timeout)
│   │   │   ├── scroll-progress.tsx
│   │   │   ├── custom-cursor.tsx  # neon dual-ring cursor
│   │   │   └── mouse-glow.tsx     # page-wide mouse-follow glow
│   │   ├── shared/
│   │   │   ├── reveal.tsx         # scroll-triggered reveal
│   │   │   ├── section-heading.tsx
│   │   │   ├── animated-counter.tsx
│   │   │   ├── magnetic.tsx       # magnetic hover wrapper
│   │   │   └── tilt-card.tsx      # 3D tilt + glare
│   │   ├── three/
│   │   │   └── hero-scene.tsx     # R3F canvas: AI core, orbit rings, particles, stars
│   │   └── sections/
│   │       ├── navbar.tsx
│   │       ├── hero.tsx
│   │       ├── about.tsx
│   │       ├── skills.tsx         # interactive skill galaxy
│   │       ├── experience.tsx     # TCS timeline + counters + pipelines
│   │       ├── projects.tsx       # tilt cards + modal
│   │       ├── achievements.tsx
│   │       ├── contact.tsx        # terminal UI + form
│   │       └── footer.tsx
│   ├── hooks/
│   │   ├── use-lenis.ts
│   │   ├── use-mouse-position.ts
│   │   ├── use-magnetic.ts
│   │   └── use-in-view-once.ts
│   └── lib/
│       ├── data.ts               # ← single source of truth for ALL content
│       └── utils.ts              # cn(), lerp(), clamp(), mapRange()
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
├── components.json               # shadcn config
└── package.json
```

---

## 🚀 Getting Started

### Install

```bash
npm install
```

If you ever hit peer-dependency friction with the 3D libraries:

```bash
npm install --legacy-peer-deps
```

### Develop

```bash
npm run dev
# http://localhost:3000
```

### Production build

```bash
npm run build
npm run start
```

---

## 🎬 Animation & Effects Included

- Full-screen **3D hero**: distorted AI core, orbiting energy rings, particle cloud, starfield
- **Preloader** boot sequence + **scroll progress** bar
- **Custom neon cursor** + page-wide **mouse-follow glow**
- **Magnetic buttons** (GSAP) and **3D tilt cards** with moving glare
- **Scroll-triggered reveals** (Framer Motion) + **Lenis** smooth scrolling
- **Interactive skill galaxy** with orbiting nodes + hover energy
- Animated **data pipelines**, floating **code snippets**, and **counters** in the TCS section
- **Project modal** with spring transitions + tilt cards
- **Terminal-style contact** form with animated status
- Full **prefers-reduced-motion** support (disables Lenis + heavy animation)

---

## ⚡ Performance Notes

- The 3D `Canvas` is **lazy-loaded** (`next/dynamic`, `ssr: false`) into its own chunk - it doesn't block first paint.
- `dpr` is capped at `1.8` for high-density displays; particle counts are conservative.
- `optimizePackageImports` enabled for `framer-motion`, `lucide-react`, `drei`.
- All continuous animations use GPU-friendly `transform` / `opacity`.
- Orbit positions are rounded to whole pixels to avoid SSR/client hydration mismatches.

---

## ☁️ Deploying to Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. Go to **vercel.com → Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js** - no config needed. Build command `next build`, output handled automatically.
4. Click **Deploy**. Your site is live on a `*.vercel.app` domain in ~1 minute.
5. (Optional) Add a custom domain under **Project → Settings → Domains**.

### Or via CLI

```bash
npm i -g vercel
vercel          # preview deployment
vercel --prod   # production deployment
```

No environment variables are required for the base site.

---

Crafted with Next.js, Three.js & a lot of neon. 💫
