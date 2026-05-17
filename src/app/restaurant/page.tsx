import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant - You Art Lac Rose",
  description: "Le restaurant de You Art Lac Rose — cuisine sénégalaise traditionnelle au bord du Lac Rose. Ouverture bientôt. Réservations : +221 77 386 53 45.",
};

export default function RestaurantPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "72px", height: "420px", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-4.jpg" alt="Restaurant You Art Lac Rose" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0.82)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <div style={{ width: "72px", height: "72px", background: "rgba(232,99,122,0.15)", border: "1.5px solid rgba(232,99,122,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <UtensilsCrossed size={32} color="#F5A0B0" />
          </div>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>You Art Lac Rose</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 84px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            Notre <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Restaurant</strong>
          </h1>
        </div>
      </div>

      {/* Coming soon section */}
      <section style={{ padding: "100px 40px", background: "var(--sand)", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(201,153,10,0.12)", border: "1px solid rgba(201,153,10,0.3)", color: "var(--gold)", padding: "8px 20px", borderRadius: "100px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "36px" }}>
            <span style={{ width: "6px", height: "6px", background: "var(--gold)", borderRadius: "50%", animation: "pulse 2s ease infinite", display: "inline-block" }} />
            Bientôt disponible
          </div>

          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.05, marginBottom: "24px" }}>
            La cuisine sénégalaise<br />
            <em style={{ fontStyle: "italic", color: "var(--coral)" }}>au bord du Lac Rose</em>
          </h2>

          <p style={{ fontSize: "17px", color: "var(--muted)", lineHeight: 1.85, marginBottom: "48px" }}>
            Nous préparons pour vous une expérience culinaire authentique — saveurs traditionnelles du Sénégal dans un cadre naturel exceptionnel, face aux eaux roses du Lac Retba.
          </p>

          {/* Placeholder info cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "56px" }} className="info-grid">
            {[
              { icon: <UtensilsCrossed size={22} />, title: "Cuisine traditionnelle", desc: "Tiéboudienne, Yassa, Mafé et spécialités locales" },
              { icon: <MapPin size={22} />, title: "Vue sur le Lac Rose", desc: "Terrasse panoramique face aux eaux uniques du lac Retba" },
              { icon: <Clock size={22} />, title: "Horaires à venir", desc: "Informations publiées prochainement" },
            ].map(item => (
              <div key={item.title} style={{ background: "white", borderRadius: "8px", padding: "28px 20px", border: "1px solid rgba(0,0,0,0.06)", textAlign: "center" }}>
                <div style={{ color: "var(--coral)", marginBottom: "12px", display: "flex", justifyContent: "center" }}>{item.icon}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Notify CTA */}
          <div style={{ background: "var(--forest)", borderRadius: "12px", padding: "40px 32px" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 700, color: "white", marginBottom: "12px" }}>
              Soyez informé en premier
            </h3>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.7, marginBottom: "28px" }}>
              Contactez-nous sur WhatsApp pour être notifié de l'ouverture du restaurant et bénéficier d'une offre de lancement exclusive.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://wa.me/221773865345?text=Bonjour%20You%20Art%20Lac%20Rose%20!%20Je%20souhaite%20%C3%AAtre%20inform%C3%A9(e)%20de%20l%27ouverture%20du%20restaurant." target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "white", padding: "14px 28px", fontSize: "13px", fontWeight: 600, textDecoration: "none", borderRadius: "4px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                Nous prévenir sur WhatsApp
              </a>
              <a href="tel:+221773865345"
                style={{ background: "rgba(255,255,255,0.1)", color: "white", padding: "14px 28px", fontSize: "13px", fontWeight: 600, textDecoration: "none", borderRadius: "4px", border: "1.5px solid rgba(255,255,255,0.25)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
                <Phone size={14} /> Appeler
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to activities */}
      <div style={{ background: "white", padding: "40px 24px", textAlign: "center" }}>
        <p style={{ color: "var(--muted)", fontSize: "14px", marginBottom: "16px" }}>En attendant, découvrez nos activités :</p>
        <Link href="/activites" className="btn-coral">Voir les activités</Link>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (max-width: 600px) {
          .info-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
