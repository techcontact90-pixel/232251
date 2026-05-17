"use client";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

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
  { href: "https://www.tiktok.com/@youartlacrose", label: "TikTok", icon: <TikTokIcon size={18} /> },
  { href: "https://www.instagram.com/youartlacrose", label: "Instagram", icon: <InstagramIcon size={18} /> },
  { href: "https://www.facebook.com/share/1AWNWXNyG1/", label: "Facebook", icon: <FacebookIcon size={18} /> },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "white", padding: "72px 40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "48px", paddingBottom: "64px", borderBottom: "1px solid rgba(255,255,255,0.08)" }} className="footer-grid">

          {/* Brand */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo/youart-logo-light.svg" alt="You Art Lac Rose" style={{ height: "52px", width: "auto", marginBottom: "20px" }} />
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "28px", maxWidth: "280px" }}>
              Excursions quad, pirogue, chameau et cheval au cœur du Lac Rose — l'une des merveilles naturelles du Sénégal. Note 4.8 / 5 sur Google.
            </p>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", color: "white", padding: "11px 22px", borderRadius: "4px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              WhatsApp
            </a>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="social-icon"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px", borderRadius: "50%", background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.1)", textDecoration: "none", transition: "all 0.25s" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>Navigation</div>
            {[{ href: "/", label: "Accueil" }, { href: "/activites", label: "Activités" }, { href: "/reservation", label: "Réservation" }, { href: "/galerie", label: "Galerie" }, { href: "/contact", label: "Contact" }].map(l => (
              <Link key={l.href} href={l.href}
                style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.55)", textDecoration: "none", marginBottom: "12px", transition: "color 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--coral)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
              >{l.label}</Link>
            ))}
          </div>

          {/* Activities */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>Activités</div>
            {["Ballade en Quad", "Pirogue Lac Rose", "Balade en Chameau", "Balade à Cheval"].map(a => (
              <div key={a} style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)", marginBottom: "12px" }}>{a}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "20px" }}>Contact</div>
            {[
              { icon: <Phone size={13} />, text: "+221 77 386 53 45", href: "tel:+221773865345" },
              { icon: <MapPin size={13} />, text: "Lac Rose, Sénégal" },
              { icon: <Clock size={13} />, text: "9h00 – 19h00, 7j/7" },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.55)", fontSize: "14px", marginBottom: "14px" }}>
                <span style={{ color: "var(--coral)", flexShrink: 0 }}>{icon}</span>
                {href ? <a href={href} style={{ color: "inherit", textDecoration: "none" }}>{text}</a> : <span>{text}</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>© 2025 You Art Lac Rose. Tous droits réservés.</span>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="social-icon-sm"
                style={{ color: "rgba(255,255,255,0.25)", transition: "color 0.2s", textDecoration: "none" }}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
        .social-icon:hover { background: var(--coral) !important; color: white !important; border-color: var(--coral) !important; transform: translateY(-2px); }
        .social-icon-sm:hover { color: var(--coral) !important; }
      `}</style>
    </footer>
  );
}
