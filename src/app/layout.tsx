import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Yatharth Singh | Full-Stack, AI/ML, Creative Developer",
  description:
    "Portfolio of Yatharth Singh, a full-stack developer, AI/ML engineer, UI/UX designer, and creative developer building systems with real-world impact.",
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col overflow-x-clip bg-[var(--background)] font-sans text-[var(--foreground)] selection:bg-[rgba(232,75,26,0.28)] selection:text-[var(--foreground)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
