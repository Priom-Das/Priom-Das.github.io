"use client";
import React from "react";
import styles from "./styles/GitHubStats.module.css";

const stats = [
  { label: "Total Contributions", value: "112+", color: "cyan" },
  { label: "Public Repos", value: "10+", color: "purple" },
  { label: "Longest Streak", value: "4 Days", color: "coral" },
  { label: "Code Commits", value: "High", color: "lime" },
];

const langs = [
  { label: "TypeScript", pct: 97.8, color: "cyan" },
  { label: "JavaScript", pct: 1.8, color: "lime" },
  { label: "CSS/Other", pct: 0.4, color: "purple" },
];

export default function GitHubStats() {
  return (
    <section id="stats" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>— Open Source Activity</p>
        <h2 className={styles.heading}>
          CODE <span className={styles.headingAccent}>METRICS</span>
        </h2>

        <div className={styles.statsGrid}>
          {stats.map(s => (
            <div
              key={s.label}
              className={styles.statCard}
              data-color={s.color} 
            >
              <div className={styles.statNum}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.graphBox}>
          <p className={styles.graphLabel}>TOP LANGUAGES</p>
          
          <div className={styles.langBar}>
            {langs.map(l => (
              <div 
                key={l.label} 
                className={styles.langSegment}
                data-lang={l.label.toLowerCase().replace('/', '-')}
                title={`${l.label}: ${l.pct}%`}
              />
            ))}
          </div>

          <div className={styles.langRow}>
            {langs.map(l => (
              <div key={l.label} className={styles.langItem}>
                <span className={styles.langDot} data-color={l.color} />
                <span className={styles.langName}>{l.label}</span>
                <span className={styles.langPct} data-color={l.color}>
                  {l.pct}%
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.btnWrap}>
          <a 
            href="https://github.com/Priom-Das" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.githubBtn}
          >
            Explore Repositories ↗
          </a>
        </div>
      </div>
    </section>
  );
}