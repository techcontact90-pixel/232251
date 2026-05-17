"use client";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

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
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>youartsquads.sn · Lac Retba, Sénégal</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
