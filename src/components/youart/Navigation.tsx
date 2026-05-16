"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/activites", label: "Activités" },
  { href: "/reservation", label: "Réservation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: transparent ? "transparent" : "rgba(255,255,255,0.97)",
      backdropFilter: transparent ? "none" : "blur(16px)",
      borderBottom: transparent ? "none" : "1px solid rgba(0,0,0,0.06)",
      transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
      boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/youart-logo.svg"
            alt="You Art Lac Rose"
            style={{ height: "50px", width: "auto", filter: transparent ? "brightness(0) invert(1)" : "none", transition: "filter 0.4s ease" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "2px", alignItems: "center" }} className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              style={{
                padding: "8px 14px",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.04em",
                textDecoration: "none",
                color: transparent ? "rgba(255,255,255,0.85)" : (pathname === l.href ? "var(--coral)" : "#374151"),
                borderBottom: pathname === l.href && !transparent ? "2px solid var(--coral)" : "2px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget).style.color = transparent ? "white" : "var(--coral)"; }}
              onMouseLeave={e => { (e.currentTarget).style.color = transparent ? "rgba(255,255,255,0.85)" : (pathname === l.href ? "var(--coral)" : "#374151"); }}
            >{l.label}</Link>
          ))}
          <a href="tel:+221773865345"
            style={{ marginLeft: "16px", background: "var(--coral)", color: "white", padding: "10px 20px", borderRadius: "2px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px", transition: "background 0.2s" }}
            onMouseEnter={e => { (e.currentTarget).style.background = "var(--coral-dark)"; }}
            onMouseLeave={e => { (e.currentTarget).style.background = "var(--coral)"; }}
          >
            <Phone size={13} /> Appeler
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: transparent ? "white" : "var(--ink)", padding: "8px" }} className="nav-mobile-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "white", borderTop: "1px solid #f0f0f0", padding: "16px 24px 28px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "15px 0", fontSize: "17px", fontWeight: 500, textDecoration: "none",
              color: pathname === l.href ? "var(--coral)" : "var(--ink)", borderBottom: "1px solid #f5f5f5",
              fontFamily: "'Cormorant Garamond', serif",
            }}>{l.label}</Link>
          ))}
          <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", background: "#25D366", color: "white",
            padding: "14px 20px", borderRadius: "4px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
          }}>
            📱 WhatsApp — Réserver
          </a>
          <a href="tel:+221773865345" style={{
            display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", background: "var(--coral)", color: "white",
            padding: "14px 20px", borderRadius: "4px", fontSize: "14px", fontWeight: 600, textDecoration: "none",
          }}>
            <Phone size={15} /> +221 77 386 53 45
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .nav-mobile-btn { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
      `}</style>
    </header>
  );
}
