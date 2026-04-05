"use client";
import styles from "./styles/Skills.module.css";

const skillGroups = [
  {
    category: "AI & Intelligence",
    items: [
      { name: "Gemini AI / LLMs", level: 85, color: "purple" },
      { name: "LangChain", level: 75, color: "cyan" },
      { name: "Vector Databases", level: 70, color: "lime" },
    ]
  },
  {
    category: "Full-Stack Engine",
    items: [
      { name: "Next.js 15 / React", level: 95, color: "cyan" },
      { name: "TypeScript", level: 90, color: "purple" },
      { name: "Supabase / PostgreSQL", level: 85, color: "coral" },
      { name: "Node.js / Python", level: 80, color: "lime" },
    ]
  }
];

const tools = ["Docker", "GitHub Actions", "Vercel", "Postman", "Figma", "Git", "Linux"];
const learning = ["Rust", "Agentic Workflows", "Ollama (Local LLMs)"];

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.tag}>— Tech Stack & Expertise</p>
        <h2 className={styles.heading}>
          SOLVING WITH <span className={styles.headingAccent}>CODE</span>
        </h2>

        <div className={styles.grid}>
          <div className={styles.skillsWrapper}>
            {skillGroups.map(group => (
              <div key={group.category} className={styles.categoryBox}>
                <h3 className={styles.subHeading}>{group.category}</h3>
                <div className={styles.skillList}>
                  {group.items.map(skill => (
                    <div key={skill.name} className={styles.skillRow}>
                      <div className={styles.skillMeta}>
                        <span className={styles.skillName}>{skill.name}</span>
                        <span className={styles.skillPct}>{skill.level}%</span>
                      </div>
                      <div className={styles.barTrack}>
                        {/* NO INLINE STYLES HERE anymore */}
                        <div 
                          className={styles.barFill} 
                          data-level={skill.level}
                          data-color={skill.color}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.toolsColumn}>
            <div className={styles.toolCard}>
              <h3 className={styles.subHeading}>Ecosystem & DevOps</h3>
              <div className={styles.toolsWrap}>
                {tools.map(tool => (
                  <span key={tool} className={styles.toolTag}>
                    <span className={styles.dot}>•</span> {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.learningBox}>
              <div className={styles.learningHeader}>
                <div className={styles.pulse} />
                <p className={styles.learningTitle}>Next Frontier</p>
              </div>
              <div className={styles.learningTags}>
                {learning.map(item => (
                  <span key={item} className={styles.learningTag}>{item}</span>
                ))}
              </div>
              <p className={styles.learningNote}>
                Currently exploring <strong>Rust</strong> for high-performance AI kernels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}