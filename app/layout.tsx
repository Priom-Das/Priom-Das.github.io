import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://priom-das.github.io'),
  title: {
    default: "Priom Das | AI-Native Full-Stack Developer",
    template: "%s | Priom Das"
  },
  description: "Full-Stack Developer specializing in Next.js, AI, and Scalable SaaS. Creator of AetherRise.",
  keywords: ["Priom Das", "AI Engineer", "Full-Stack Developer", "AetherRise", "Next.js", "Bangladesh"],
  authors: [{ name: "Priom Das" }],
  creator: "Priom Das",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Building AI-powered products with Next.js & Supabase.",
    url: "https://priom-das.github.io",
    siteName: "Priom Das Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Building AI-powered products with Next.js & Supabase.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
