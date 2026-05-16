"use client";

import { motion } from "framer-motion";
import { Globe, Share2, Link } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "var(--forest-deep)", padding: "80px 0 40px", borderTop: "1px solid rgba(245,237,217,0.06)" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "64px", marginBottom: "64px" }}>
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "var(--cream)", letterSpacing: "0.04em", marginBottom: "20px" }}>
              You<em style={{ color: "var(--gold)" }}>Art</em>Squads
            </div>
            <p style={{ fontFamily: "'DM Sans'", fontSize: "13px", lineHeight: 1.9, color: "rgba(245,237,217,0.45)", maxWidth: "280px" }}>
              Des expériences de loisirs soigneusement sélectionnées,
              pour ceux qui exigent l'extraordinaire.
            </p>
            <div style={{ display: "flex", gap: "16px", marginTop: "28px" }}>
              {[Globe, Share2, Link].map((Icon, i) => (
                <a key={i} href="#" style={{
                  width: "36px", height: "36px",
                  border: "1px solid rgba(245,237,217,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(245,237,217,0.4)",
                  textDecoration: "none",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={(e) => { const el = e.currentTarget; el.style.borderColor = "var(--gold)"; el.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { const el = e.currentTarget; el.style.borderColor = "rgba(245,237,217,0.15)"; el.style.color = "rgba(245,237,217,0.4)"; }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Explorer", links: ["Excursions", "Restaurants", "Hébergements", "Séjours complets"] },
            { title: "Compagnie", links: ["À propos", "Nos valeurs", "Partenaires", "Presse"] },
            { title: "Aide", links: ["Contact", "FAQ", "Conditions", "Confidentialité"] },
          ].map(({ title, links }) => (
            <div key={title}>
              <div style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "24px" }}>
                {title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {links.map((l) => (
                  <a key={l} href="#" style={{
                    fontFamily: "'DM Sans'", fontSize: "13px", color: "rgba(245,237,217,0.45)",
                    textDecoration: "none", transition: "color 0.3s",
                  }}
                    onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--cream)"; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(245,237,217,0.45)"; }}
                  >
                    {l}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "32px", borderTop: "1px solid rgba(245,237,217,0.06)" }}>
          <span style={{ fontFamily: "'DM Sans'", fontSize: "12px", color: "rgba(245,237,217,0.25)" }}>
            © 2025 YouArtSquads. Tous droits réservés.
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", fontStyle: "italic", color: "rgba(245,237,217,0.2)" }}>
            Loisirs & Escapades de Prestige
          </span>
        </div>
      </div>
    </footer>
  );
}
