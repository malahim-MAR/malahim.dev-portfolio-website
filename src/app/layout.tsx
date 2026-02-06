import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import BackgroundEffects from "@/components/BackgroundEffects";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malahim | Full-Stack Developer",
  description: "Malahim - Full-Stack Developer creating immersive digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-black text-white selection:bg-green-500/30 selection:text-green-200">
        <SmoothScroll>
          {/* Grain Overlay */}
          <div className="grain-overlay" />

          {/* Background Interactive Effects */}
          <BackgroundEffects />

          {/* Cursor (Client Component) */}
          <CustomCursor />

          {/* Navigation (Client Component) */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10 min-h-screen">
            {children}
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
