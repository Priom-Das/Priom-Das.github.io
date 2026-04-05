"use client";
import styles from "./styles/Skills.module.css";

const skillGroups = [
  {
    category: "AI & Intelligence",
    items: [
      { name: "Gemini AI / LLMs", level: 85, color: "purple" },
      { name: "Computer Vision (ViT)", level: 75, color: "cyan" },
      { name: "AI Automation", level: 70, color: "lime" },
    ]
  },
  {
    category: "Full-Stack Engine",
    items: [
      { name: "Next.js 15 / React", level: 92, color: "cyan" },
      { name: "TypeScript", level: 88, color: "purple" },
      { name: "Supabase / PostgreSQL", level: 82, color: "coral" },
      { name: "Node.js / Python", level: 75, color: "lime" },
    ]
  }
];

const tools = ["GitHub Actions", "Vercel", "Postman", "Figma", "Git", "VS Code", "Canva", "MySQL"];
const learning = ["Rust", "LangChain", "Ollama (Local LLMs)", "Agentic Workflows"];

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

          <div className={styles.rightCol}>
            <h3 className={styles.subHeading}>Ecosystem & DevOps</h3>
            <div className={styles.toolsWrap}>
              {tools.map(tool => (
                <span key={tool} className={styles.toolTag}>{tool}</span>
              ))}
            </div>

            <div className={styles.learningBox}>
              <p className={styles.learningTitle}>🚀 Next Frontier</p>
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
