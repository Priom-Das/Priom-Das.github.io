"use client";
import styles from "./styles/About.module.css";

const stats = [
  { num: "5+",  label: "Projects Shipped", color: "cyan" },
  { num: "2+",  label: "Years of Dev",     color: "coral" },
  { num: "3",   label: "AI Integrations",  color: "lime" },
  { num: "∞",   label: "Passion for Learning", color: "purple" },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <p className={styles.tag}>— My Story</p>
            <h2 className={styles.heading}>
              CRAFTING DIGITAL<br />
              <span className={styles.headingAccent}>INTELLIGENCE</span>
            </h2>

            <p className={styles.bio}>
              I&apos;m a Full-Stack Developer from Dinajpur, Bangladesh — focused on the
              intersection of <strong>Next.js, Supabase, and AI</strong>. I don&apos;t just write
              code; I build systems that solve real problems for real people.
            </p>

            <p className={styles.bio}>
              Through <strong className={styles.bioHighlight}>AetherRise</strong>, I&apos;ve
              built how students interact with academic data — combining semantic AI analysis,
              voice capture, OCR, and GitHub Sync into one research platform.
            </p>

            <p className={styles.bio}>
              When I&apos;m not shipping features, I&apos;m exploring Local LLMs,
              Agentic Workflows, and the next generation of developer tools.
            </p>

            <div className={styles.ctaWrapper}>
              <a href="#contact" className={styles.cta}>Let&apos;s build the future →</a>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div key={s.label} className={styles.statCard} data-color={s.color}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
