"use client";
import React from "react";
import Image from "next/image";
import styles from "./styles/Projects.module.css";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const projects = [
  {
    title: "AetherRise",
    tag: "AI Research SaaS",
    tagEmoji: "⭐",
    desc: "Production-grade AI research platform with semantic analysis, OCR scanner, voice-to-text capture, and GitHub Sync. Built for scholars who think in systems.",
    stack: ["Next.js 15", "TypeScript", "Supabase", "Gemini AI", "PWA"],
    live: "https://aether-rise.vercel.app",
    github: "https://github.com/Priom-Das/AetherRise",
    logo: "/assets/images/aetherrise-logo.png",
    color: "cyan",
    featured: true,
  },
  {
    title: "Aura-Core",
    tag: "Autonomous Agent",
    tagEmoji: "🤖",
    desc: "An AI-driven Shadow Agent that monitors your dev environment, automates repetitive workflows, and generates real-time documentation autonomously.",
    stack: ["Node.js", "JavaScript", "AI Automation"],
    live: null,
    github: "https://github.com/Priom-Das/Aura-Core",
    color: "purple",
    featured: false,
  },
  {
    title: "Real-Time Data Pipeline",
    tag: "Big Data & Infrastructure",
    tagEmoji: "⚡",
    desc: "High-throughput streaming data pipeline with real-time visualization of complex datasets. Engineered for enterprise-grade reliability and performance.",
    stack: ["Apache Kafka", "Spark", "PostgreSQL", "Django"],
    live: null,
    github: "https://github.com/Priom-Das/Real-Time-Data-Pipeline-With-Kafka-Spark-Hadoop-Postgresql-Django",
    color: "lime",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>— Selected Works</p>
        <h2 className={styles.heading}>
          ENGINEERING <span className={styles.headingAccent}>SOLUTIONS</span>
        </h2>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div
              key={p.title}
              className={`${styles.card} ${p.featured ? styles.featured : ""}`}
              data-color={p.color}
            >
              <div className={styles.glow} />

              {p.featured && (
                <div className={styles.featuredBadge}>✦ Featured Project</div>
              )}


              <div className={styles.cardTop}>
                <div className={styles.titleWrapper}>
                  {p.logo && (
                    <div className={styles.inlineLogo}>
                      <Image 
                        src={p.logo} 
                        alt={`${p.title} logo`} 
                        width={32} 
                        height={32} 
                        className={styles.brandIcon}
                      />
                    </div>
                  )}
                  <h3 className={styles.cardTitle}>{p.title}</h3>
                </div>
                
                <span className={styles.cardTag}>
                  {p.tagEmoji} {p.tag}
                </span>
              </div>

              <p className={styles.cardDesc}>{p.desc}</p>

              <div className={styles.stackWrap}>
                {p.stack.map(s => (
                  <span key={s} className={styles.stackTag}>{s}</span>
                ))}
              </div>

              <div className={styles.cardLinks}>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  <GitHubIcon /> Source
                </a>
                
                {p.live && (
                  <div className={styles.demoGroup}>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardLink} ${styles.liveLink}`}
                    >
                      <ExternalIcon /> Demo
                    </a>
                    
                    {/* Launch App  */}
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.quickLaunch}
                    >
                      Launch App
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}