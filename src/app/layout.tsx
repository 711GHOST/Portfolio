import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shwetanshu Sood - AI Engineer & Full Stack Developer",
  description:
    "Portfolio of Shwetanshu Sood - AI Engineer, Machine Learning Engineer, Data Scientist and Full Stack Developer. I build AI systems that feel like the future.",
  keywords: [
    "Shwetanshu Sood",
    "AI Engineer",
    "Machine Learning",
    "Data Scientist",
    "Full Stack Developer",
    "Deep Learning",
    "Generative AI",
    "Portfolio",
  ],
  authors: [{ name: "Shwetanshu Sood" }],
  openGraph: {
    title: "Shwetanshu Sood - AI Engineer & Full Stack Developer",
    description: "I build AI systems that feel like the future.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shwetanshu Sood - AI Engineer",
    description: "I build AI systems that feel like the future.",
  },
};

export const viewport: Viewport = {
  themeColor: "#050816",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
