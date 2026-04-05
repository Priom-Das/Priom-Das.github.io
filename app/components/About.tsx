"use client";
import styles from "./styles/About.module.css";

const stats = [
  { num: "10+", label: "Projects Architected", color: "cyan" },
  { num: "2+", label: "Years of Dev", color: "coral" },
  { num: "5+", label: "AI Integrations", color: "lime" },
  { num: "∞", label: "Passion for Learning", color: "purple" },
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
              I’m a Full-Stack Developer based in Bangladesh, focused on the intersection of 
              <strong> Next.js, Cloud Infrastructure, and AI</strong>. I don’t just write code; 
              I build autonomous systems that solve friction in research and development.
            </p>

            <p className={styles.bio}>
              Through <strong className={styles.bioHighlight}>AetherRise</strong>, I’ve pioneered 
              how students interact with academic data using semantic analysis. My background in 
              statistical studies allows me to bridge the gap between <strong>complex data 
              insights</strong> and <strong>intuitive user interfaces</strong>.
            </p>

            <p className={styles.bio}>
              When I’m not shipping features, I’m deep-diving into Local LLMs, 
              Vector Databases, and the future of Agentic Workflows.
            </p>

            <div className={styles.ctaWrapper}>
              <a href="#contact" className={styles.cta}>Let’s build the future →</a>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {stats.map(s => (
              <div
                key={s.label}
                className={styles.statCard}
                data-color={s.color} // Pass the color name to CSS
              >
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