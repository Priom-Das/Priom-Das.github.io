"use client";
import React, { useState } from "react";
import styles from "./styles/Footer.module.css";

// SVG Icons defined locally to kill any library/TS errors
const Icons = {
  Github: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
  ),
  Linkedin: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
  ),
  Twitter: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L21 4.5z"></path></svg>
  ),
  Facebook: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
  ),
  Telegram: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
  ),
  Download: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  ),
  Copy: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
  ),
  External: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 22 3 22 10"></polyline><line x1="14" y1="11" x2="22" y2="3"></line></svg>
  )
};

const socialLinks = [
  { name: "GitHub", handle: "@Priom-Das", Svg: Icons.Github, url: "https://github.com/Priom-Das", color: "cyan" },
  { name: "LinkedIn", handle: "Priom Das", Svg: Icons.Linkedin, url: "https://www.linkedin.com/in/priom-das-731958241/", color: "blue" },
  { name: "Twitter / X", handle: "@PriomDas57", Svg: Icons.Twitter, url: "https://x.com/PriomDas57", color: "sky" },
  { name: "WhatsApp", handle: "+880 1718 843589", Svg: Icons.WhatsApp, url: "https://wa.me/8801718843589", color: "green" },
  { name: "Facebook", handle: "Priom Das", Svg: Icons.Facebook, url: "https://www.facebook.com/priom.das.923", color: "fb" },
  { name: "Telegram", handle: "+880 1718 843589", Svg: Icons.Telegram, url: "https://t.me/+8801718843589", color: "tg" },
];

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "priomdas9@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.ctaSection}>
          <p className={styles.tag}>— Collaboration</p>
          <h2 className={styles.heading}>
            LET&apos;S ARCHITECT <span className={styles.headingAccent}>THE FUTURE</span>
          </h2>
          <div className={styles.actionGrid}>
            <div className={styles.actionBox}>
              <p className={styles.boxLabel}>Direct Inquiry</p>
              <div className={styles.emailRow}>
                <span className={styles.emailText}>{email}</span>
                <button 
                  onClick={handleCopy} 
                  className={`${styles.copyBtn} ${copied ? styles.copied : ""}`}
                >
                  {copied ? <Icons.Check /> : <Icons.Copy />}
                  <span>{copied ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>
            <div className={styles.actionBox}>
              <p className={styles.boxLabel}>Curriculum Vitae</p>
              <div className={styles.resumeActions}>
                <a href="/resume.pdf" download className={styles.resumeBtn}>
                  <Icons.Download /> Download
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                  <Icons.External /> View Online
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <p className={styles.socialLabel}>Find Me On</p>
        <div className={styles.socialGrid}>
          {socialLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialCard}
              data-color={link.color}
            >
              <div className={styles.socialIcon}><link.Svg /></div>
              <div className={styles.socialMeta}>
                <span className={styles.socialName}>{link.name}</span>
                <span className={styles.socialHandle}>{link.handle}</span>
              </div>
              <span className={styles.socialArrow}>↗</span>
            </a>
          ))}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>PD<span>.</span></h3>
            <p className={styles.status}><span className={styles.dot}></span> SYSTEMS OPERATIONAL</p>
          </div>
          <div className={styles.copyright}>
            <p>© 2026 Priom Das. Built with Next.js 15 & Passion.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}