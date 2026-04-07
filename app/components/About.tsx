"use client";
import styles from "./styles/About.module.css";

const stats = [
  { num: "5+", label: "Projects Shipped", color: "cyan" },
  { num: "2+", label: "Years of Dev", color: "coral" },
  { num: "3", label: "AI Integrations", color: "lime" },
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

           <div className={styles.bioContainer}>
  {/* The Hook*/}
  <p className={styles.bioLead}>
    I am a <strong className={styles.highlightWhite}>Full-Stack Architect & AI Engineer</strong> specialized in 
    designing intelligent, scalable systems using 
    <span className={styles.techStack}> Next.js 15, Supabase, and Generative AI</span>.
  </p>

  {/*Philosophy*/}
  <p className={styles.bioValue}>
    I don’t just write code; I architect ecosystems that <strong className={styles.highlightCyan}>bridge the gap between complex AI logic and intuitive user experiences</strong>. 
    My goal is to eliminate friction and build products that feel like magic.
  </p>

  {/* The Masterpiece: AetherRise */}
  <div className={styles.featuredBox}>
    <p className={styles.bioProject}>
      Currently scaling <strong className={styles.aetherText}>AetherRise</strong> — 
      a production-grade AI research engine. By integrating <span className={styles.highlightWhite}>Semantic Search, OCR, and Automated Workflows</span>, 
      I’ve built a platform that treats research notes with the same rigor as version-controlled code.
    </p>
  </div>

  {/* Future Focus */}
  <p className={styles.bioFuture}>
    Deeply invested in <strong className={styles.highlightLime}>Agentic Workflows, Local LLM Orchestration</strong>, 
    and the next generation of autonomous developer tools. 
    <span className={styles.remoteReady}> Available for High-Impact Remote Projects Worldwide.</span>
  </p>
</div>
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
