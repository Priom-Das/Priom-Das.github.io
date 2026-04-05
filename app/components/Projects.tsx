"use client";
import React from "react";
import styles from "./styles/Projects.module.css";

const projects = [
  {
    title: "AetherRise",
    tag: "AI Research SaaS",
    desc: "An AI-native research engine that synchronizes physical notes with digital intelligence. Features semantic search across PDF/Voice data and automated GitHub documentation sync.",
    stack: ["Next.js 15", "Supabase", "Gemini AI", "Vector DB"],
    live: "https://aether-rise.vercel.app",
    github: "https://github.com/Priom-Das/AetherRise",
    color: "cyan",
  },
  {
    title: "Aura-Core",
    tag: "Autonomous Agent",
    desc: "A personal 'Digital Shadow' agent that automates developer workflows. It monitors environment changes and generates real-time documentation using local LLM orchestration.",
    stack: ["Node.js", "LangChain", "Automation", "LLMs"],
    live: null,
    github: "https://github.com/Priom-Das/Aura-Core",
    color: "purple",
  },
  {
    title: "Real-Time Data Pipeline",
    tag: "Big Data & Infrastructure",
    desc: "Engineered a high-throughput pipeline to process streaming data. Implements real-time visualization of complex datasets with enterprise-grade reliability.",
    stack: ["Apache Kafka", "Spark", "PostgreSQL", "Django"],
    live: null,
    github: "https://github.com/Priom-Das/Real-Time-Data-Pipeline-With-Kafka-Spark-Hadoop-Postgresql-Django",
    color: "lime",
  }
];

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.tag}>— Selected Works</p>
      <h2 className={styles.heading}>
        ENGINEERING <span className={styles.headingAccent}>SOLUTIONS</span>
      </h2>

      <div className={styles.grid}>
        {projects.map(p => (
          <div
            key={p.title}
            className={styles.card}
            data-color={p.color}
          >
            {/* The glow effect is now fully controlled in CSS */}
            <div className={styles.glow} />
            
            <div className={styles.cardTop}>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <span className={styles.cardTag}>{p.tag}</span>
            </div>

            <p className={styles.cardDesc}>{p.desc}</p>

            <div className={styles.stackWrap}>
              {p.stack.map(s => (
                <span key={s} className={styles.stackTag}>{s}</span>
              ))}
            </div>

            <div className={styles.cardLinks}>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                Source Code ↗
              </a>
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer" className={`${styles.cardLink} ${styles.liveLink}`}>
                  Launch App ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}