"use client";
import styles from "./styles/Footer.module.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Left Side: Logo & Status */}
        <div className={styles.brand}>
          {/* Inline style removed for clean code */}
          <span className={styles.logo} onClick={scrollToTop}>
            PD.
          </span>
          <div className={styles.status}>
            <span className={styles.statusDot} />
            <span className={styles.statusText}>Systems Operational</span>
          </div>
        </div>

        {/* Center: Tech Stack Info */}
        <div className={styles.info}>
          <p className={styles.credit}>
            Engineered with <strong>Next.js 15</strong> & <strong>TypeScript</strong>
          </p>
          <p className={styles.deployment}>
            Deployed via GitHub Actions on GitHub Pages
          </p>
        </div>

        {/* Right Side: Copyright & Year */}
        <div className={styles.copyright}>
          <p className={styles.copy}>© 2026 Priom Das</p>
          <p className={styles.rights}>All Rights Reserved.</p>
        </div>
      </div>
      
      {/* Visual Separator - Bottom Glow Line */}
      <div className={styles.bottomGlow} />
    </footer>
  );
}