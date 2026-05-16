"use client";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#1A1A1A", color: "white", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px", marginBottom: "48px" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px" }}>
              You Art <span style={{ color: "var(--rose)" }}>Lac Rose</span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "20px" }}>
              Excursions quad, pirogue, chameau et cheval au Lac Rose du Sénégal. Note 4.8⭐/5.
            </p>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25D366", color: "white", padding: "10px 18px", borderRadius: "4px", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
              📱 WhatsApp
            </a>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Navigation</div>
            {[{ href: "/", label: "Accueil" }, { href: "/activites", label: "Activités" }, { href: "/reservation", label: "Réservation" }, { href: "/galerie", label: "Galerie" }, { href: "/contact", label: "Contact" }].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontSize: "14px", color: "rgba(255,255,255,0.65)", textDecoration: "none", marginBottom: "10px", transition: "color 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "var(--rose)"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(255,255,255,0.65)"; }}
              >{l.label}</Link>
            ))}
          </div>

          {/* Activités */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Activités</div>
            {["Ballade en Quad", "Pirogue Lac Rose", "Balade en Chameau", "Balade à Cheval"].map(a => (
              <div key={a} style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", marginBottom: "10px" }}>{a}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "16px" }}>Contact</div>
            {[
              { icon: <Phone size={14} />, text: "+221 77 386 53 45", href: "tel:+221773865345" },
              { icon: <MapPin size={14} />, text: "Lac Rose, Sénégal" },
              { icon: <Clock size={14} />, text: "9h00 – 19h00, 7j/7" },
            ].map(({ icon, text, href }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.65)", fontSize: "14px", marginBottom: "12px" }}>
                <span style={{ color: "var(--rose)" }}>{icon}</span>
                {href ? <a href={href} style={{ color: "inherit", textDecoration: "none" }}>{text}</a> : <span>{text}</span>}
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>© 2025 You Art Lac Rose. Tous droits réservés.</span>
          <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)" }}>youartstourquads.sn · Lac Retba, Sénégal</span>
        </div>
      </div>
    </footer>
  );
}
