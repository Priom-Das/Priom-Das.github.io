"use client";
import styles from "./styles/ResumeDownload.module.css";

export default function ResumeDownload() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Sub-heading for context */}
        <p className={styles.tag}>— Curriculum Vitae</p>
        
        <h2 className={styles.text}>
          WANT TO DEEP DIVE INTO MY <br />
          <span className={styles.headingAccent}>TECHNICAL JOURNEY?</span>
        </h2>
        
        <p className={styles.subText}>
          Download my comprehensive resume to see my full experience, 
          academic background, and technical certifications.
        </p>

        <div className={styles.btnGroup}>
          <a 
            href="/resume.pdf" 
            download="Priom_Das_Resume.pdf" 
            className={styles.btnPrimary}
          >
            <span className={styles.icon}>↓</span> Download Resume (PDF)
          </a>
          
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.btnSecondary}
          >
            <span className={styles.icon}>👁</span> View Online
          </a>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className={styles.bgGlow} />
    </section>
  );
}