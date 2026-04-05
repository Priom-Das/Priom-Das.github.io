import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Bebas_Neue } from "next/font/google"; // Optimized font loading
import "./globals.css";

// 1. Font configuration with CSS variables for easier theming and maintenance
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-jakarta', // CSS variable for global access to this font --- IGNORE ---
});

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas',
});

// 2. Advanced Metadata (SEO & Social Sharing)
export const metadata: Metadata = {
  title: "Priom Das | AI-Native Full-Stack Developer",
  description: "Building the future of research with AetherRise. Full-Stack Engineer specializing in Next.js, AI Orchestration, and Scalable SaaS.",
  keywords: ["Priom Das", "AI Engineer", "Full-Stack Developer", "AetherRise", "Next.js Specialist"],
  authors: [{ name: "Priom Das" }],
  icons: {
    icon: "/favicon.ico", // favicon.ico should be in the public folder
  },
  // Open Graph (LinkedIn/Facebook preview)
  openGraph: {
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Explorer of AI models and builder of autonomous systems.",
    url: "https://priom-das.github.io",
    siteName: "Priom Das Portfolio",
    images: [
      {
        url: "/og-image.png", // og-image.png should be in the public folder
        width: 1200,
        height: 630,
        alt: "Priom Das Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Priom Das | AI-Native Full-Stack Developer",
    description: "Building AI-powered products with Next.js & Supabase.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* 3. Apply font classes to the body */}
      <body className={`${jakarta.className} ${bebas.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}