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
      }, 400); // Fade out and in effect 400ms delay --- IGNORE ---
    }, 3000); // Change role every 3 seconds --- IGNORE ---
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className={styles.section}>
      <div className={styles.blobPurple} />
      <div className={styles.blobCyan} />
      
      <div className={styles.content}>
        {/* Availability Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>Open for AI & Web Collaborations</span>
        </div>

        {/* Main Name Heading */}
        <h1 className={styles.name}>
          <span className={styles.nameFirst}>PRIOM</span>
          <span className={styles.nameLast}>DAS</span>
        </h1>

        {/* Dynamic Role Section with ARIA for SEO/Accessibility */}
        <div className={styles.roleWrapper} aria-live="polite">
          <p className={`${styles.role} ${visible ? styles.roleVisible : styles.roleHidden}`}>
            <span className={styles.accentText}>⚡</span> {roles[roleIdx]}
          </p>
        </div>

        {/* Bio Section - Stronger Hook */}
        <p className={styles.bio}>
          Transforming complex ideas into <span className={styles.bioHighlight}>intelligent SaaS solutions</span>. 
          Expertise in Next.js, AI Orchestration, and building the future of research with 
          <span className={styles.bioHighlight}> AetherRise</span>.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="#projects" className={styles.ctaPrimary}>
            Explore My Work <span className={styles.arrow}>→</span>
          </a>
          <a 
            href="https://github.com/Priom-Das" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaSecondary}
          >
            GitHub Profile ↗
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollHint}>
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>SCROLL TO DISCOVER</span>
        </div>
      </div>
    </section>
  );
}