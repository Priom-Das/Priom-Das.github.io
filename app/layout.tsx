import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://priom-das.github.io'),
  title: {
    default: "Priom Das | AI-Native Full-Stack Developer",
    template: "%s | Priom Das"
  },
  description: "Full-Stack Developer & AI Engineer specializing in Next.js 15, TypeScript, and Scalable SaaS. Developer of AetherRise — an AI-native research platform.",
  keywords: [
    "Priom Das", "AI Engineer", "Full-Stack Developer", "AetherRise", 
    "Next.js 15 Specialist", "TypeScript Developer", "SaaS Developer", "Bangladesh"
  ],
  authors: [{ name: "Priom Das" }],
  creator: "Priom Das",
  // Phase 1: Icon updating to your new brand logo
  icons: { 
    icon: "/assets/images/aetherrise-logo.png", // Using your professional logo
    apple: "/assets/images/aetherrise-logo.png",
  },
  openGraph: {
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Building next-gen AI products with Next.js 15, Supabase & Gemini AI.",
    url: "https://priom-das.github.io",
    siteName: "Priom Das Portfolio",
    locale: "en_US",
    type: "website",
    // Phase 1: Social Preview Image
    images: [
      {
        url: "/assets/images/aetherrise-preview.png", // Using your new social preview image
        width: 1200,
        height: 630,
        alt: "Priom Das Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Building AI-powered products with Next.js 15 & Gemini AI.",
    images: ["/assets/images/aetherrise-preview.png"], // Twitter preview image
    creator: "@PriomDas57", // Your X handle from user summary
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#fafafa] text-[#111] dark:bg-[#0a0a0a] dark:text-[#ededed]">
        {children}
      </body>
    </html>
  );
}