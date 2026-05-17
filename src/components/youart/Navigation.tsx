"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
    </svg>
  );
}
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}
function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const SOCIALS = [
  { href: "https://www.tiktok.com/@youartlacrose", label: "TikTok", icon: <TikTokIcon size={17} /> },
  { href: "https://www.instagram.com/youartlacrose", label: "Instagram", icon: <InstagramIcon size={17} /> },
  { href: "https://www.facebook.com/share/1AWNWXNyG1/", label: "Facebook", icon: <FacebookIcon size={17} /> },
];

const links = [
  { href: "/", label: "Accueil" },
  { href: "/activites", label: "Activités" },
  { href: "/reservation", label: "Réservation" },
  { href: "/galerie", label: "Galerie" },
  { href: "/restaurant", label: "Restaurant" },
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
      background: transparent ? "transparent" : "rgba(8,8,8,0.92)",
      backdropFilter: transparent ? "none" : "blur(20px)",
      borderBottom: transparent ? "none" : "1px solid rgba(255,255,255,0.06)",
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
                color: transparent ? "rgba(255,255,255,0.75)" : (pathname === l.href ? "var(--coral)" : "rgba(255,255,255,0.65)"),
                borderBottom: pathname === l.href && !transparent ? "2px solid var(--coral)" : "2px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget).style.color = "var(--coral)"; }}
              onMouseLeave={e => { (e.currentTarget).style.color = transparent ? "rgba(255,255,255,0.75)" : (pathname === l.href ? "var(--coral)" : "rgba(255,255,255,0.65)"); }}
            >{l.label}</Link>
          ))}

          {/* Social icons desktop */}
          <div style={{ display: "flex", gap: "6px", marginLeft: "8px", alignItems: "center" }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="nav-social"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "50%", color: transparent ? "rgba(255,255,255,0.7)" : "var(--muted)", textDecoration: "none", transition: "all 0.2s" }}>
                {s.icon}
              </a>
            ))}
          </div>

          <a href="tel:+221773865345"
            style={{ marginLeft: "8px", background: "var(--coral)", color: "white", padding: "10px 20px", borderRadius: "2px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", display: "flex", alignItems: "center", gap: "7px", transition: "background 0.2s" }}
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
        <div style={{ background: "rgba(8,8,8,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "16px 24px 28px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              display: "block", padding: "15px 0", fontSize: "17px", fontWeight: 500, textDecoration: "none",
              color: pathname === l.href ? "var(--coral)" : "rgba(255,255,255,0.7)", borderBottom: "1px solid rgba(255,255,255,0.05)",
              fontFamily: "'Cormorant Garamond', serif",
            }}>{l.label}</Link>
          ))}
          <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" style={{
            display: "flex", alignItems: "center", gap: "8px", marginTop: "20px", background: "#25D366", color: "white",
            padding: "14px 20px", borderRadius: "2px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none",
          }}>
            WhatsApp — Réserver
          </a>
          <a href="tel:+221773865345" style={{
            display: "flex", alignItems: "center", gap: "8px", marginTop: "10px", background: "var(--coral)", color: "white",
            padding: "14px 20px", borderRadius: "2px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textDecoration: "none",
          }}>
            <Phone size={15} /> +221 77 386 53 45
          </a>
          {/* Social icons mobile menu */}
          <div style={{ display: "flex", gap: "12px", marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "42px", height: "42px", borderRadius: "50%", background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.55)", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 769px) { .nav-mobile-btn { display: none !important; } }
        @media (max-width: 768px) { .nav-desktop { display: none !important; } }
        .nav-social:hover { color: var(--coral) !important; background: rgba(232,99,122,0.08) !important; }
      `}</style>
    </header>
  );
}
