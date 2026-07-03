import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-space px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-grid-neon bg-[size:60px_60px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-purple/10 blur-[120px]" />
      <h1 className="font-display text-8xl font-black text-gradient">404</h1>
      <p className="max-w-md text-foreground/60">
        This coordinate doesn&apos;t exist in the galaxy. Let&apos;s get you back
        to known space.
      </p>
      <Link href="/">
        <Button variant="gradient" size="lg">
          Return Home
        </Button>
      </Link>
    </div>
  );
}
