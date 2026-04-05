"use client";
import { useState, useEffect } from "react";
import styles from "./styles/Navbar.module.css";

const links = ["About", "Skills", "Projects", "Stats", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""} ${isOpen ? styles.navOpen : ""}`}>
      <div className={styles.inner}>
        {/* Removed inline style: cursor is now handled in CSS */}
        <span 
          className={styles.logo} 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          PD<span className={styles.dot}>.</span>
        </span>

        <div className={`${styles.links} ${isOpen ? styles.linksActive : ""}`}>
          {links.map(l => (
            <a 
              key={l} 
              href={`#${l.toLowerCase()}`} 
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {l}
            </a>
          ))}
          <a href="#contact" className={styles.navCTA} onClick={() => setIsOpen(false)}>
            Hire Me
          </a>
        </div>

        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ""}`} 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </button>
      </div>
    </nav>
  );
}