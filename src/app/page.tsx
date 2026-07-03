import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { Preloader } from "@/components/effects/preloader";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { CustomCursor } from "@/components/effects/custom-cursor";
import { MouseGlow } from "@/components/effects/mouse-glow";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <MouseGlow />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </SmoothScrollProvider>
  );
}
