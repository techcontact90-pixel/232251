import type { Metadata } from "next";
import Image from "next/image";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Localisation - You Art Lac Rose",
  description: "Contactez You Art Lac Rose : +221 77 386 53 45. Situé au Lac Rose, Sénégal. Ouvert 7j/7 de 9h à 23h. Réservations WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "72px", height: "340px", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-2.jpg" alt="Contact You Art Lac Rose" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0.78)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>Nous trouver</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Contact</strong>
          </h1>
        </div>
      </div>

      {/* Contact section */}
      <section style={{ padding: "100px 40px", background: "var(--sand)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "start" }} className="contact-grid">

          {/* Info column */}
          <div>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--coral)", marginBottom: "16px", display: "block" }}>Informations pratiques</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "40px" }}>
              Venez vivre<br />l&apos;aventure
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "28px", marginBottom: "48px" }}>
              {[
                { icon: <Phone size={18} />, color: "var(--coral)", titre: "Téléphone & WhatsApp", contenu: "+221 77 386 53 45", href: "tel:+221773865345" },
                { icon: <MapPin size={18} />, color: "var(--forest)", titre: "Localisation", contenu: "Lac Rose (Lac Retba) · À 35 km de Dakar", href: "https://maps.app.goo.gl/dGjff68Wogq2pjwN6" },
                { icon: <Clock size={18} />, color: "var(--gold)", titre: "Horaires d'ouverture", contenu: "Lundi – Dimanche · 9h00 – 23h00" },
              ].map(({ icon, color, titre, contenu, href }) => (
                <div key={titre} style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "8px", background: "white", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px rgba(0,0,0,0.06)", color }}>
                    {icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "5px" }}>{titre}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: "16px", fontWeight: 500, color: "var(--ink)", textDecoration: "none" }}>{contenu}</a>
                    ) : (
                      <div style={{ fontSize: "16px", fontWeight: 500, color: "var(--ink)" }}>{contenu}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Rating badge */}
            <div style={{ background: "white", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "24px 28px", marginBottom: "36px", display: "flex", alignItems: "center", gap: "20px" }}>
              <div>
                <div style={{ display: "flex", gap: "3px", marginBottom: "6px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#C9990A" color="#C9990A" />)}
                </div>
                <div style={{ fontSize: "13px", color: "var(--muted)" }}>53 avis Google</div>
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontWeight: 700, color: "var(--ink)", lineHeight: 1 }}>4.8</div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer"
                style={{ background: "#25D366", color: "white", padding: "16px 24px", fontSize: "14px", fontWeight: 600, textDecoration: "none", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                Réserver via WhatsApp
              </a>
              <a href="tel:+221773865345"
                className="btn-forest"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Phone size={15} /> Appeler maintenant
              </a>
            </div>
          </div>

          {/* Map */}
          <div>
            <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.1)", height: "460px", marginBottom: "16px", position: "relative" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.123!2d-17.233!3d14.833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10dca0b9f2bed%3A0x6ba78b461b0d3e6f!2sLac%20Rose%20(Lac%20Retba)!5e0!3m2!1sfr!2ssn!4v1700000000000!5m2!1sfr!2ssn"
                width="100%"
                height="460"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="You Art Lac Rose - Localisation Google Maps"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/dGjff68Wogq2pjwN6"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", background: "var(--forest)", color: "white", padding: "15px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 600, textDecoration: "none", letterSpacing: "0.04em", transition: "background 0.2s" }}
              className="btn-map"
            >
              <MapPin size={15} /> Ouvrir dans Google Maps
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        .btn-map:hover { background: var(--forest-mid) !important; }
      `}</style>
    </>
  );
}
