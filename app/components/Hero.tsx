"use client";
import { useEffect, useState } from "react";
import styles from "./styles/Hero.module.css";

const roles = [
  "AI Engineer", 
  "Full-Stack Architect", 
  "SaaS Developer", 
  "Next.js Specialist"
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setRoleIdx(i => (i + 1) % roles.length);
        setVisible(true);
      }, 400); 
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.blobPurple} />
      <div className={styles.blobCyan} />
      
      <div className={styles.content}>
        {/* Phase 1: Availability Badge updated for better visibility */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Available for Remote AI & Web Projects</span>
        </div>

        <h1 className={styles.name}>
          <span className={styles.nameFirst}>PRIOM</span>
          <span className={styles.nameLast}>DAS</span>
        </h1>

        <div className={styles.roleWrapper} aria-live="polite">
          <p className={`${styles.role} ${visible ? styles.roleVisible : styles.roleHidden}`}>
            <span className={styles.accentText}>⚡</span> {roles[roleIdx]}
          </p>
        </div>

        <p className={styles.bio}>
          Transforming complex ideas into <span className={styles.bioHighlight}>intelligent SaaS solutions</span>. 
          Expertise in Next.js, AI Orchestration, and building the future of research with 
          <span className={styles.bioHighlight}> AetherRise</span>.
        </p>

        {/* Phase 1 Upgrade: Stronger CTAs with Hire Me button */}
        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>
            View Projects <span className={styles.arrow}>→</span>
          </a>
          
          {/* Marketplace Polish: Dedicated Hire/Contact button */}
          <a 
            href="#contact" 
            className={styles.ctaHire}
          >
           Contact ✉️
          </a>

          <a 
            href="https://github.com/Priom-Das" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaSecondary}
          >
            GitHub ↗
          </a>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>SCROLL TO DISCOVER</span>
        </div>
      </div>
    </section>
  );
}