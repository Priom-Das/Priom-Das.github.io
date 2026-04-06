"use client";
import React from "react";
import styles from "./styles/GitHubStats.module.css";

const stats = [
  { label: "Total Contributions", value: "112+", id: "cyan" },
  { label: "Public Repos", value: "5", id: "purple" },
  { label: "Longest Streak", value: "4 Days", id: "coral" },
  { label: "Forks Received", value: "2", id: "lime" },
];

const langs = [
  // Rounded the percentages to nearest integers for CSS mapping
  { label: "TypeScript", pct: 98, id: "cyan" },
  { label: "JavaScript", pct: 2, id: "lime" },
  { label: "CSS/Other", pct: 1, id: "purple" },
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
          {stats.map((s) => (
            <div key={s.label} className={styles.statCard} data-color={s.id}>
              <div className={styles.statNum}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={styles.graphBox}>
          <p className={styles.graphLabel}>TOP LANGUAGES</p>
          <div className={styles.langBar}>
            {langs.map((l) => (
              <div 
                key={l.label} 
                className={styles.langSegment}
                data-color={l.id}
                data-pct={l.pct} // Passing width as data attribute
                title={`${l.label}: ${l.pct}%`}
              />
            ))}
          </div>

          <div className={styles.langRow}>
            {langs.map((l) => (
              <div key={l.label} className={styles.langItem} data-color={l.id}>
                <span className={styles.langDot} />
                <span className={styles.langName}>{l.label}</span>
                <span className={styles.langPct}>{l.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        {/* Button code remains same */}
      </div>
    </section>
  );
}