"use client";
import { useState } from "react";
import styles from "./styles/Contact.module.css";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/priomdas",
    icon: "GH",
    color: "cyan", // Just the identifier
    handle: "@priomdas"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/priomdas",
    icon: "LI",
    color: "blue",
    handle: "@priomdas"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/priomdas",
    icon: "TW",
    color: "indigo",
    handle: "@priomdas"
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "priomdas9@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>— Collaboration</p>
        <h2 className={styles.heading}>
          LET&apos;S ARCHITECT<br />
          <span className={styles.headingAccent}>THE FUTURE</span>
        </h2>
        
        <p className={styles.bio}>
          I&apos;m currently open to <strong>Full-time roles</strong>, AI research collaborations, 
          and high-impact freelance projects. If you have a vision, let&apos;s build it.
        </p>

        <div className={styles.mainActions}>
          <div className={styles.emailBox}>
            <p className={styles.emailLabel}>Direct Inquiry</p>
            <div className={styles.emailRow}>
              <span className={styles.emailText}>{email}</span>
              <button
                onClick={handleCopy}
                className={`${styles.copyBtn} ${copied ? styles.copiedBtn : styles.copyDefault}`}
              >
                {copied ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className={styles.resumeBox}>
            <p className={styles.emailLabel}>Looking for my CV?</p>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              className={styles.resumeBtn}
            >
              Download Resume (PDF) 📥
            </a>
          </div>
        </div>

        <p className={styles.socialsLabel}>Digital Footprint</p>
        <div className={styles.socialsGrid}>
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              data-color={s.color} // Move style logic here
            >
              <span className={styles.socialIcon}>{s.icon}</span>
              <div className={styles.socialMeta}>
                <div className={styles.socialName}>{s.name}</div>
                <div className={styles.socialHandle}>{s.handle}</div>
              </div>
              <span className={styles.socialArrow}>↗</span>
            </a>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>© 2026 Priom Das. Built with Next.js & Passion.</p>
        </footer>
      </div>
    </section>
  );
}