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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(232,99,122,0.15)",
      transition: "all 0.3s ease",
      boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo/youart-logo.svg"
            alt="You Art Lac Rose"
            style={{ height: "54px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "4px", alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "8px 16px", fontSize: "14px", fontWeight: 500, textDecoration: "none",
              color: pathname === l.href ? "var(--rose)" : "#374151",
              borderBottom: pathname === l.href ? "2px solid var(--rose)" : "2px solid transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--rose)"; }}
            onMouseLeave={e => { if (pathname !== l.href) (e.target as HTMLElement).style.color = "#374151"; }}
            >{l.label}</Link>
          ))}
          <a href="tel:+221773865345" style={{
            marginLeft: "12px", background: "var(--rose)", color: "white",
            padding: "10px 18px", borderRadius: "2px", fontSize: "13px", fontWeight: 500,
            textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => { (e.currentTarget).style.background = "#c44d65"; }}
          onMouseLeave={e => { (e.currentTarget).style.background = "var(--rose)"; }}
          >
            <Phone size={14} />+221 77 386 53 45
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "#1A1A1A", padding: "8px" }} className="mobile-btn">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: "white", borderTop: "1px solid #f0f0f0",
          padding: "16px 24px 24px",
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "14px 0",
              fontSize: "16px", fontWeight: 500, textDecoration: "none",
              color: pathname === l.href ? "var(--rose)" : "#1A1A1A",
              borderBottom: "1px solid #f5f5f5",
            }}>{l.label}</Link>
          ))}
          <a href="tel:+221773865345" style={{
            display: "flex", alignItems: "center", gap: "8px", marginTop: "16px",
            background: "var(--rose)", color: "white", padding: "14px 20px",
            borderRadius: "4px", fontSize: "15px", fontWeight: 500, textDecoration: "none",
          }}>
            <Phone size={16} />+221 77 386 53 45
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .mobile-btn { display: none !important; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } }
      `}</style>
    </header>
  );
}
