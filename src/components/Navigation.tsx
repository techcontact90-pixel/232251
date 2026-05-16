"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Excursions", href: "#excursions" },
  { label: "Restaurants", href: "#restaurants" },
  { label: "Hébergements", href: "#hebergements" },
  { label: "À Propos", href: "#about" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? "12px 48px" : "28px 48px",
          background: scrolled ? "rgba(245, 237, 217, 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(28,58,46,0.1)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 300, color: scrolled ? "var(--forest)" : "var(--cream)", letterSpacing: "0.05em", transition: "color 0.5s" }}>
            You<span style={{ fontStyle: "italic", color: "var(--gold)" }}>Art</span>Squads
          </div>
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: scrolled ? "var(--forest)" : "rgba(245,237,217,0.85)",
                textDecoration: "none",
                position: "relative",
                transition: "color 0.3s",
              }}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--cream)",
              background: "var(--forest)",
              padding: "10px 24px",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={(e) => { (e.target as HTMLElement).style.background = "var(--gold)"; }}
            onMouseLeave={(e) => { (e.target as HTMLElement).style.background = "var(--forest)"; }}
          >
            Réserver
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", color: scrolled ? "var(--forest)" : "var(--cream)", display: "none" }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      <style>{`
        @media (max-width: 768px) {
          nav > div:nth-child(2) { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--gold) !important; }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--gold);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after { width: 100%; }
      `}</style>
    </>
  );
}
