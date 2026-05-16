import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Réservation & Tarifs",
  description: "Réservez vos excursions au Lac Rose : quad, pirogue, chameau, cheval. Packs à partir de 25 000 FCFA. Réservation par WhatsApp ou téléphone.",
};

const packs = [
  {
    name: "Pack 3 Activités",
    price: "25 000",
    unit: "/ personne",
    desc: "La meilleure façon de découvrir le Lac Rose",
    items: ["Quad (1 heure)", "Pirogue sur le lac (30 min)", "Chameau ou Cheval (15 min)"],
    featured: false,
    tag: null,
  },
  {
    name: "Pack Aventure Complet",
    price: "30 000",
    unit: "/ personne",
    desc: "L'expérience totale incluant un repas traditionnel",
    items: ["Session Quad (1h30)", "Balade en Chameau (30 min)", "Repas traditionnel sénégalais inclus", "Guide privé dédié"],
    featured: true,
    tag: "Populaire",
  },
  {
    name: "Offre Duo Romantique",
    price: "25 000",
    unit: "pour 2 pers.",
    desc: "Un moment inoubliable pour les couples",
    items: ["2 personnes en Quad (1h)", "Pirogue romantique (30 min)", "Photo souvenir incluse"],
    featured: false,
    tag: "Couple",
  },
  {
    name: "Pack Duo Chameaux",
    price: "35 000",
    unit: "pour 2 pers.",
    desc: "Une traversée des dunes à deux",
    items: ["2 personnes en Chameau (1h)", "Balade panoramique guidée", "Option repas : +10 000 FCFA"],
    featured: false,
    tag: null,
  },
];

const alaCarte = [
  { act: "Ballade en Quad", duration: "1h", price: "15 000 FCFA" },
  { act: "Pirogue Lac Rose", duration: "30 min", price: "10 000 FCFA" },
  { act: "Balade en Chameau", duration: "15 min", price: "10 000 FCFA" },
  { act: "Balade à Cheval", duration: "15 min", price: "10 000 FCFA" },
];

export default function ReservationPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "72px", height: "360px", overflow: "hidden" }}>
        <Image src="/images/quad/quad-3.jpg" alt="Réservation Lac Rose" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0.80)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>Votre aventure commence ici</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 6vw, 80px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            Packs <strong style={{ fontStyle: "normal", fontWeight: 700 }}>&amp; Tarifs</strong>
          </h1>
        </div>
      </div>

      {/* Packs */}
      <section style={{ padding: "100px 40px", background: "var(--sand)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 400, fontStyle: "italic" }}>
              Nos <strong style={{ fontStyle: "normal", fontWeight: 700 }}>packs aventure</strong>
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "15px", marginTop: "14px" }}>Choisissez le pack qui correspond à vos envies — modifiable à votre arrivée.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px", alignItems: "start" }}>
            {packs.map((pack) => (
              <div key={pack.name} style={{ position: "relative", background: "white", borderRadius: "8px", padding: "40px 28px", border: pack.featured ? "2px solid var(--coral)" : "1px solid #E5E7EB", boxShadow: pack.featured ? "0 24px 56px rgba(232,99,122,0.14)" : "0 4px 16px rgba(0,0,0,0.04)" }}>
                {pack.tag && (
                  <div style={{ position: "absolute", top: "-14px", left: "24px", background: pack.featured ? "var(--coral)" : "var(--forest)", color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "100px" }}>{pack.tag}</div>
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, marginBottom: "8px", marginTop: pack.tag ? "12px" : "0" }}>{pack.name}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "24px" }}>{pack.desc}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "28px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", fontWeight: 700, color: pack.featured ? "var(--coral)" : "var(--ink)", lineHeight: 1 }}>{pack.price}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>FCFA {pack.unit}</span>
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                  {pack.items.map(item => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#374151" }}>
                      <Check size={14} color={pack.featured ? "var(--coral)" : "var(--forest-mid)"} style={{ marginTop: "2px", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer"
                  className={pack.featured ? "btn-coral" : "btn-primary"}
                  style={{ display: "block", textAlign: "center" }}>
                  Réserver ce pack
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À la carte */}
      <section style={{ padding: "80px 40px", background: "white" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--coral)" }}>Activités seules</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, marginTop: "10px" }}>À la carte</h2>
          </div>
          <div style={{ border: "1px solid #E5E7EB", borderRadius: "8px", overflow: "hidden" }}>
            {alaCarte.map((item, i) => (
              <div key={item.act} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "22px 32px", background: i % 2 === 0 ? "white" : "var(--sand)", borderBottom: i < alaCarte.length - 1 ? "1px solid #E5E7EB" : "none" }}>
                <div>
                  <div style={{ fontSize: "16px", fontWeight: 600 }}>{item.act}</div>
                  <div style={{ fontSize: "12px", color: "var(--muted)", marginTop: "3px" }}>Durée : {item.duration}</div>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, color: "var(--coral)" }}>{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to book */}
      <section style={{ background: "var(--forest)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>Comment réserver ?</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.8, marginBottom: "48px" }}>
            Rien de plus simple — contactez-nous par WhatsApp ou téléphone. Notre équipe vous répond en moins de 2 heures.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "white", padding: "16px 36px", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              📱 Réserver sur WhatsApp
            </a>
            <a href="tel:+221773865345"
              style={{ background: "rgba(255,255,255,0.08)", color: "white", padding: "16px 36px", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderRadius: "4px", border: "1.5px solid rgba(255,255,255,0.3)", display: "inline-flex", alignItems: "center", gap: "10px" }}>
              <Phone size={15} /> +221 77 386 53 45
            </a>
          </div>
          <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", marginTop: "32px", letterSpacing: "0.04em" }}>
            Paiement sur place · Annulation gratuite 24h à l&apos;avance · Pas de prépaiement
          </p>
        </div>
      </section>
    </>
  );
}
