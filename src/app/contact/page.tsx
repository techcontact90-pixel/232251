import type { Metadata } from "next";
import { Phone, MapPin, Clock, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Localisation - You Art Lac Rose",
  description: "Contactez You Art Lac Rose : +221 77 386 53 45. Situé au Lac Rose (Lac Retba), Sénégal. Ouvert 7j/7 de 9h à 19h. Réservations WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <div style={{ paddingTop: "70px", background: "linear-gradient(135deg, #1A6B3C, #2E8B57)", padding: "120px 24px 60px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>Nous trouver</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "white", marginTop: "8px" }}>Contact</h1>
      </div>

      <section style={{ padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          {/* Infos */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, marginBottom: "32px" }}>Informations pratiques</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {[
                { icon: <Phone size={20} color="#E8637A" />, titre: "Téléphone & WhatsApp", contenu: "+221 77 386 53 45", href: "tel:+221773865345" },
                { icon: <MapPin size={20} color="#1A6B3C" />, titre: "Adresse", contenu: "Lac Rose (Lac Retba), Sénégal", href: "https://maps.google.com/?q=Lac+Rose+Senegal" },
                { icon: <Clock size={20} color="#D4A017" />, titre: "Horaires", contenu: "Ouvert 7j/7 · 9h00 – 19h00" },
              ].map(({ icon, titre, contenu, href }) => (
                <div key={titre} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#FAFAFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, border: "1px solid #f0f0f0" }}>{icon}</div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: "4px" }}>{titre}</div>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A", textDecoration: "none" }}>{contenu}</a>
                    ) : (
                      <div style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A" }}>{contenu}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Note Google */}
            <div style={{ marginTop: "40px", padding: "24px", background: "#FFFBEB", border: "1px solid #FDE68A", borderRadius: "8px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#D4A017" color="#D4A017" />)}
                <span style={{ fontWeight: 700, fontSize: "20px" }}>4.8</span>
              </div>
              <p style={{ fontSize: "13px", color: "#92400E" }}>53 avis Google · "Vous êtes les meilleurs au Lac Rose"</p>
            </div>

            {/* CTA WhatsApp */}
            <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px" }}>
                📱 Réserver via WhatsApp
              </a>
              <a href="tel:+221773865345" className="btn-outline" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", padding: "14px 24px" }}>
                <Phone size={16} /> Appeler maintenant
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, marginBottom: "24px" }}>Nous trouver</h2>
            <div style={{ borderRadius: "8px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.1)", height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.5!2d-17.2333!3d14.8333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10b4d0000000%3A0x0!2sLac%20Rose%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1234567890"
                width="100%"
                height="400"
                style={{ border: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="You Art Lac Rose - Localisation"
              />
            </div>
            <p style={{ fontSize: "13px", color: "#9CA3AF", marginTop: "12px", textAlign: "center" }}>
              📍 Lac Rose (Lac Retba) · À 35 km de Dakar
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
