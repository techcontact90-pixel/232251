import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Réservation & Tarifs - Packs Excursions",
  description: "Réservez vos excursions au Lac Rose : packs quad + pirogue + chameau dès 25 000 FCFA. Contactez-nous au +221 77 386 53 45. Disponible 7j/7.",
};

const packs = [
  {
    name: "Pack Spécial 3 Activités",
    price: "25 000",
    tag: "Le plus populaire",
    highlight: true,
    inclus: ["Quad (1 heure)", "Pirogue (30 min)", "Chameau ou Cheval (15 min)", "Gilet de sécurité & casque", "Guide accompagnateur"],
  },
  {
    name: "Pack Aventure + Repas",
    price: "30 000",
    tag: "Tout inclus",
    inclus: ["Session Quad", "Balade Chameaux", "Repas complet inclus", "Boisson fraîche", "Photo souvenir"],
  },
  {
    name: "Offre Couple (2 Pers.)",
    price: "25 000",
    tag: "Romantique",
    inclus: ["2 personnes en Quad", "Balade en Pirogue romantique", "Cadre idyllique", "Photo couple offerte"],
  },
  {
    name: "Duo Chameaux",
    price: "35 000",
    tag: "Découverte des dunes",
    inclus: ["Pour 2 personnes", "Balade dans les dunes", "Coucher de soleil", "Option repas : 45 000 FCFA"],
  },
];

const activitesSeules = [
  { nom: "Quad 30 min", prix: "15 000 FCFA" },
  { nom: "Quad 1 heure", prix: "20 000 FCFA" },
  { nom: "Pirogue 30 min", prix: "10 000 FCFA" },
  { nom: "Chameau 15 min", prix: "10 000 FCFA" },
  { nom: "Chameau 30 min", prix: "15 000 FCFA" },
  { nom: "Cheval 15 min", prix: "10 000 FCFA" },
  { nom: "Cheval 30 min", prix: "15 000 FCFA" },
];

export default function ReservationPage() {
  return (
    <>
      <div style={{ paddingTop: "70px", background: "linear-gradient(135deg, #E8637A, #c44d65)", padding: "120px 24px 60px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>Réservation</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "white", marginTop: "8px" }}>Packs & Tarifs</h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", marginTop: "12px" }}>Choisissez votre aventure · Réservez par téléphone ou WhatsApp</p>
      </div>

      {/* Packs */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textAlign: "center", marginBottom: "48px" }}>Nos Packs Combinés</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {packs.map((pack) => (
              <div key={pack.name} style={{
                background: pack.highlight ? "var(--rose)" : "white",
                border: pack.highlight ? "none" : "1px solid #e5e7eb",
                borderRadius: "12px", padding: "32px",
                boxShadow: pack.highlight ? "0 16px 48px rgba(232,99,122,0.35)" : "0 2px 8px rgba(0,0,0,0.04)",
                position: "relative", transform: pack.highlight ? "scale(1.02)" : "none",
              }}>
                {pack.tag && <span style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: pack.highlight ? "#1A6B3C" : "var(--rose)", color: "white", fontSize: "11px", fontWeight: 600, padding: "5px 14px", borderRadius: "20px", whiteSpace: "nowrap" }}>{pack.tag}</span>}
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, marginBottom: "8px", color: pack.highlight ? "white" : "#1A1A1A" }}>{pack.name}</h3>
                <div style={{ fontSize: "36px", fontWeight: 700, color: pack.highlight ? "white" : "var(--rose)", marginBottom: "24px" }}>
                  {pack.price} <span style={{ fontSize: "14px", fontWeight: 400, opacity: 0.8 }}>FCFA</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  {pack.inclus.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: pack.highlight ? "rgba(255,255,255,0.9)" : "#374151" }}>
                      <CheckCircle size={15} color={pack.highlight ? "white" : "#1A6B3C"} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" style={{
                  display: "block", textAlign: "center", padding: "13px",
                  background: pack.highlight ? "white" : "var(--rose)",
                  color: pack.highlight ? "var(--rose)" : "white",
                  borderRadius: "4px", fontWeight: 600, fontSize: "14px",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}>Réserver via WhatsApp</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activités seules */}
      <section style={{ padding: "60px 24px", background: "#FAFAFA" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, textAlign: "center", marginBottom: "32px" }}>Activités à l'unité</h2>
          <div style={{ background: "white", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
            {activitesSeules.map((act, i) => (
              <div key={act.nom} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < activitesSeules.length - 1 ? "1px solid #f0f0f0" : "none" }}>
                <span style={{ fontSize: "15px", color: "#374151" }}>{act.nom}</span>
                <span style={{ fontWeight: 700, color: "var(--rose)", fontSize: "15px" }}>{act.prix}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact réservation */}
      <section style={{ padding: "60px 24px", background: "var(--vert)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "white", marginBottom: "12px" }}>Réservez dès maintenant</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "28px" }}>Par téléphone, WhatsApp ou email. Notre équipe répond 7j/7 de 9h à 19h.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              📱 WhatsApp
            </a>
            <a href="tel:+221773865345" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone size={16} />+221 77 386 53 45
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
