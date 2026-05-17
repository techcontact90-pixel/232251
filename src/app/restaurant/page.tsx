import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, Flame, Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant - You Art Lac Rose | Grillades & Cuisine Sénégalaise",
  description: "Savourez nos grillades au feu de charbon, poisson frais, poulet, gambas et spécialités sénégalaises face au Lac Rose. Ouvert 7j/7.",
};

const platsGrillades = [
  {
    nom: "Poisson Grillé",
    desc: "Poisson frais grillé au feu de charbon, accompagné de riz blanc et crudités.",
    accomp: "Riz blanc · Aloco · Frites · Crudités",
    prix: "2 500",
    tag: null,
  },
  {
    nom: "Poisson Grillé",
    desc: "Poisson frais grillé au feu de charbon avec accompagnements enrichis.",
    accomp: "Riz blanc · Atièkè · Aloco · Frites · Crudités",
    prix: "3 000",
    tag: null,
  },
  {
    nom: "Poisson Grillé",
    desc: "Grande assiette de poisson frais grillé au feu de charbon.",
    accomp: "Riz blanc · Atièkè · Aloco · Frites · Crudités",
    prix: "3 500",
    tag: "Généreux",
  },
  {
    nom: "Poulet Entier Grillé",
    desc: "Poulet entier grillé au feu de charbon, juteux et savoureux.",
    accomp: "Riz blanc · Atièkè · Aloco · Frites · Crudités",
    prix: "5 000",
    tag: "Pour partager",
  },
  {
    nom: "Assiette Poulet Grillé",
    desc: "Assiette de morceaux de poulet grillé au feu de charbon.",
    accomp: "Riz blanc · Atièkè · Aloco · Frites · Crudités",
    prix: "3 000",
    tag: null,
  },
  {
    nom: "Brochette de Gambas",
    desc: "Gambas fraîches grillées au feu de charbon, tendres et parfumées.",
    accomp: "Riz blanc · Atièkè · Aloco · Frites · Crudités",
    prix: "3 000",
    tag: "Spécialité",
  },
];

const platsLocaux = [
  { nom: "Yassa Poulet", desc: "Poulet mijoté en sauce oignon et citron, un classique sénégalais.", prix: "1 500" },
  { nom: "Thiéboudienne", desc: "Le plat national — riz au poisson cuit dans une sauce tomate épicée.", prix: "1 500" },
  { nom: "Sebou", desc: "Spécialité locale savoureuse, préparée avec les herbes du terroir.", prix: "2 000" },
];

const boissons = [
  { nom: "Bissap", desc: "Jus d'hibiscus frais, légèrement sucré", prix: null },
  { nom: "Jus de Gingembre", desc: "Frais et tonique, fait maison", prix: null },
  { nom: "Coca-Cola", desc: "Boisson fraîche en cannette", prix: null },
  { nom: "Eau minérale", desc: "Eau fraîche", prix: null },
];

export default function RestaurantPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ position: "relative", paddingTop: "72px", height: "480px", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-4.jpg" alt="Restaurant You Art Lac Rose" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,61,36,0.75) 0%, rgba(14,61,36,0.85) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <div style={{ width: "64px", height: "64px", background: "rgba(232,99,122,0.15)", border: "1.5px solid rgba(232,99,122,0.45)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
            <UtensilsCrossed size={28} color="#F5A0B0" />
          </div>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.24em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>You Art Lac Rose</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95, marginBottom: "18px" }}>
            Notre <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Restaurant</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", letterSpacing: "0.04em" }}>Grillades au feu de charbon · Cuisine sénégalaise</p>
        </div>
      </div>

      {/* ── INTRO BAND ── */}
      <div style={{ background: "var(--forest)", padding: "28px 40px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          {[
            { icon: <Flame size={16} />, text: "Grillades au feu de charbon" },
            { icon: <MapPin size={16} />, text: "Face au Lac Rose" },
            { icon: <Clock size={16} />, text: "Ouvert 9h – 19h, 7j/7" },
          ].map(item => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.75)", fontSize: "13px", letterSpacing: "0.04em" }}>
              <span style={{ color: "#F5A0B0" }}>{item.icon}</span>{item.text}
            </div>
          ))}
        </div>
      </div>

      {/* ── GRILLADES ── */}
      <section style={{ background: "var(--sand)", padding: "90px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Section header */}
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
              <Flame size={20} color="var(--coral)" />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--coral)" }}>Au feu de charbon</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 400, lineHeight: 1, fontStyle: "italic" }}>
              Nos <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Grillades</strong>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "var(--coral)", marginTop: "16px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }} className="menu-grid">
            {platsGrillades.map((plat, i) => (
              <div key={i} className="menu-card"
                style={{ background: "white", padding: "36px 32px", borderTop: "1px solid #F0EDE8", borderLeft: "1px solid #F0EDE8", position: "relative", transition: "box-shadow 0.3s" }}>
                {plat.tag && (
                  <div style={{ position: "absolute", top: "20px", right: "20px", background: "var(--coral)", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "100px" }}>
                    {plat.tag}
                  </div>
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, marginBottom: "10px", paddingRight: plat.tag ? "80px" : "0" }}>
                  {plat.nom}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "16px" }}>{plat.desc}</p>
                <p style={{ fontSize: "11px", color: "var(--forest)", fontWeight: 600, letterSpacing: "0.06em", marginBottom: "24px", opacity: 0.7 }}>
                  {plat.accomp}
                </p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 700, color: "var(--coral)", lineHeight: 1 }}>{plat.prix}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)", letterSpacing: "0.06em" }}>FCFA</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUISINE LOCALE ── */}
      <section style={{ background: "white", padding: "90px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "56px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "10px" }}>
              <UtensilsCrossed size={20} color="var(--coral)" />
              <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--coral)" }}>Saveurs du terroir</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 400, lineHeight: 1, fontStyle: "italic" }}>
              Cuisine <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Sénégalaise</strong>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "var(--coral)", marginTop: "16px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {platsLocaux.map(plat => (
              <div key={plat.nom} className="menu-card"
                style={{ border: "1px solid #F0EDE8", borderRadius: "4px", padding: "36px 32px", display: "flex", flexDirection: "column", gap: "10px", transition: "box-shadow 0.3s, border-color 0.3s" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700 }}>{plat.nom}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, flex: 1 }}>{plat.desc}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginTop: "8px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 700, color: "var(--coral)", lineHeight: 1 }}>{plat.prix}</span>
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>FCFA</span>
                </div>
              </div>
            ))}
          </div>

          {/* Paella notice */}
          <div style={{ marginTop: "40px", background: "var(--sand)", borderRadius: "6px", padding: "28px 32px", border: "1px solid rgba(201,153,10,0.2)", display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ width: "6px", height: "6px", background: "var(--gold)", borderRadius: "50%", flexShrink: 0 }} />
            <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--ink)" }}>Paella sénégalaise</strong> — Renseignez-vous auprès de notre équipe pour les disponibilités et commandes à l'avance.
            </p>
          </div>
        </div>
      </section>

      {/* ── BOISSONS ── */}
      <section style={{ background: "var(--sand)", padding: "80px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ marginBottom: "48px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--coral)", display: "block", marginBottom: "10px" }}>Pour se rafraîchir</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5vw, 58px)", fontWeight: 400, fontStyle: "italic", lineHeight: 1 }}>
              Nos <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Boissons</strong>
            </h2>
            <div style={{ width: "48px", height: "2px", background: "var(--coral)", marginTop: "16px" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {boissons.map(b => (
              <div key={b.nom} style={{ background: "white", borderRadius: "4px", padding: "28px 24px", border: "1px solid #F0EDE8", textAlign: "center" }}>
                <div style={{ width: "40px", height: "40px", background: "rgba(232,99,122,0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <div style={{ width: "8px", height: "8px", background: "var(--coral)", borderRadius: "50%" }} />
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{b.nom}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉSERVATION ── */}
      <section style={{ background: "var(--forest)", padding: "80px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "620px", margin: "0 auto" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.8)", display: "block", marginBottom: "16px" }}>Réserver votre table</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "white", marginBottom: "18px", fontStyle: "italic", lineHeight: 1.1 }}>
            Venez savourer<br /><strong style={{ fontStyle: "normal", fontWeight: 700 }}>face au Lac Rose</strong>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>
            Pour plus d'informations ou pour réserver votre table, contactez-nous directement par WhatsApp ou par téléphone.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/221773865345?text=Bonjour%20You%20Art%20Lac%20Rose%20!%20Je%20voudrais%20r%C3%A9server%20une%20table%20au%20restaurant." target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "white", padding: "15px 32px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Réserver sur WhatsApp
            </a>
            <a href="tel:+221773865345"
              style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "15px 28px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.22)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Phone size={13} /> +221 77 386 53 45
            </a>
          </div>
        </div>
      </section>

      {/* ── BACK LINK ── */}
      <div style={{ background: "white", padding: "36px 24px", textAlign: "center" }}>
        <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "16px" }}>Découvrez aussi nos activités au Lac Rose :</p>
        <Link href="/activites" className="btn-forest">Voir les activités</Link>
      </div>

      <style>{`
        .menu-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,0.07) !important; }
        .menu-card:hover { border-color: rgba(232,99,122,0.2) !important; }
        @media (max-width: 640px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
