"use client";

import { useLenis } from "@/hooks/use-lenis";

/**
 * Client wrapper that boots Lenis smooth scrolling for the whole page.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLenis();
  return <>{children}</>;
}
