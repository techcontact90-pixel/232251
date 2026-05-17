import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { UtensilsCrossed, Phone, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant - You Art Lac Rose | Grillades & Cuisine Sénégalaise",
  description: "Savourez nos grillades au feu de charbon, poisson frais, poulet, gambas et spécialités sénégalaises face au Lac Rose. Ouvert 7j/7.",
};

export default function RestaurantPage() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ position: "relative", paddingTop: "72px", height: "420px", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-4.jpg" alt="Restaurant You Art Lac Rose" fill style={{ objectFit: "cover", objectPosition: "center 40%" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,61,36,0.72) 0%, rgba(14,61,36,0.88) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <UtensilsCrossed size={28} color="#F5A0B0" style={{ marginBottom: "18px" }} />
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "14px", display: "block" }}>You Art Lac Rose</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px, 8vw, 96px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            Notre <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Restaurant</strong>
          </h1>
          <div style={{ display: "flex", gap: "32px", marginTop: "24px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { icon: <MapPin size={13} />, text: "Face au Lac Rose" },
              { icon: <Clock size={13} />, text: "9h – 19h · 7j/7" },
            ].map(item => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.6)", fontSize: "12px", letterSpacing: "0.06em" }}>
                <span style={{ color: "#F5A0B0" }}>{item.icon}</span>{item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU CARD ── */}
      <section style={{ background: "#FAF6EF", padding: "72px 24px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Menu envelope */}
          <div style={{ background: "#FFFDF9", border: "1px solid #E8DFD0", boxShadow: "0 8px 48px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)", padding: "clamp(32px, 6vw, 72px) clamp(24px, 6vw, 64px)" }}>

            {/* Menu title */}
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginBottom: "18px" }}>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C9990A)" }} />
                <div style={{ width: "6px", height: "6px", background: "var(--coral)", borderRadius: "50%", flexShrink: 0 }} />
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C9990A)" }} />
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400, fontStyle: "italic", color: "#1A1208", letterSpacing: "0.01em", lineHeight: 1 }}>
                La Carte
              </h2>
              <p style={{ fontSize: "12px", color: "#9A8A70", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "10px" }}>Grillades au feu de charbon · Cuisine du terroir</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "14px", marginTop: "18px" }}>
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #C9990A)" }} />
                <div style={{ width: "6px", height: "6px", background: "var(--coral)", borderRadius: "50%", flexShrink: 0 }} />
                <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #C9990A)" }} />
              </div>
            </div>

            {/* ── GRILLADES ── */}
            <MenuSection title="Grillades" subtitle="Grillées au feu de charbon">
              <MenuItem
                nom="Poisson Grillé"
                desc="Poisson frais · Riz blanc, Aloco, Frites, Crudités"
                prix="2 500"
              />
              <MenuItem
                nom="Poisson Grillé"
                desc="Poisson frais · Riz blanc, Atièkè, Aloco, Frites, Crudités"
                prix="3 000"
              />
              <MenuItem
                nom="Poisson Grillé"
                desc="Grande assiette · Riz blanc, Atièkè, Aloco, Frites, Crudités"
                prix="3 500"
              />
              <MenuItem
                nom="Poulet Entier Grillé"
                desc="Poulet entier · Riz blanc, Atièkè, Aloco, Frites, Crudités"
                prix="5 000"
                note="Pour partager"
              />
              <MenuItem
                nom="Assiette Poulet Grillé"
                desc="Morceaux de poulet · Riz blanc, Atièkè, Aloco, Frites, Crudités"
                prix="3 000"
              />
              <MenuItem
                nom="Brochette de Gambas"
                desc="Gambas fraîches · Riz blanc, Atièkè, Aloco, Frites, Crudités"
                prix="3 000"
                note="Spécialité"
              />
            </MenuSection>

            <Divider />

            {/* ── CUISINE SENEGALAISE ── */}
            <MenuSection title="Cuisine Sénégalaise" subtitle="Saveurs authentiques du terroir">
              <MenuItem
                nom="Yassa Poulet"
                desc="Poulet mijoté en sauce oignon et citron"
                prix="1 500"
              />
              <MenuItem
                nom="Thiéboudienne"
                desc="Riz au poisson, sauce tomate — le plat national"
                prix="1 500"
              />
              <MenuItem
                nom="Sebou"
                desc="Spécialité locale, préparée à la façon traditionnelle"
                prix="2 000"
              />
            </MenuSection>

            {/* Paella note */}
            <div style={{ marginTop: "8px", marginBottom: "36px", padding: "14px 20px", border: "1px dashed #D4C4A0", borderRadius: "2px", textAlign: "center" }}>
              <p style={{ fontSize: "13px", color: "#9A8A70", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>
                Paella sénégalaise — sur commande, renseignez-vous
              </p>
            </div>

            <Divider />

            {/* ── BOISSONS ── */}
            <MenuSection title="Boissons" subtitle="Pour se rafraîchir">
              <MenuItem nom="Bissap" desc="Jus d'hibiscus frais, légèrement sucré" prix={null} />
              <MenuItem nom="Jus de Gingembre" desc="Tonique et frais, fait maison" prix={null} />
              <MenuItem nom="Coca-Cola" desc="Boisson fraîche" prix={null} />
              <MenuItem nom="Eau Minérale" desc="Bouteille fraîche" prix={null} />
            </MenuSection>

            {/* Footer menu */}
            <div style={{ textAlign: "center", marginTop: "44px", paddingTop: "36px", borderTop: "1px solid #E8DFD0" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "14px", color: "#9A8A70", fontStyle: "italic", marginBottom: "6px" }}>
                Tous les prix sont indiqués en FCFA · Prix par personne
              </div>
              <div style={{ fontSize: "11px", color: "#B8A88A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                You Art Lac Rose · Lac Retba, Sénégal
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉSERVER ── */}
      <section style={{ background: "var(--forest)", padding: "72px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "580px", margin: "0 auto" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.8)", display: "block", marginBottom: "16px" }}>Réserver votre table</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "white", marginBottom: "18px", fontStyle: "italic", lineHeight: 1.1 }}>
            Venez savourer<br /><strong style={{ fontStyle: "normal", fontWeight: 700 }}>face au Lac Rose</strong>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.8, marginBottom: "36px" }}>
            Contactez-nous pour réserver votre table ou commander à l'avance.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/221773865345?text=Bonjour%20You%20Art%20Lac%20Rose%20!%20Je%20voudrais%20r%C3%A9server%20une%20table%20au%20restaurant." target="_blank" rel="noopener noreferrer"
              style={{ background: "#25D366", color: "white", padding: "15px 32px", fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              Réserver sur WhatsApp
            </a>
            <a href="tel:+221773865345"
              style={{ background: "rgba(255,255,255,0.08)", color: "white", padding: "15px 28px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", border: "1px solid rgba(255,255,255,0.2)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Phone size={13} /> Appeler
            </a>
          </div>
        </div>
      </section>

      <div style={{ background: "white", padding: "32px 24px", textAlign: "center" }}>
        <Link href="/activites" className="btn-forest">Découvrir nos activités</Link>
      </div>
    </>
  );
}

/* ── Sub-components ── */

function MenuSection({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "36px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 700, color: "#1A1208", letterSpacing: "0.01em" }}>{title}</h3>
        <p style={{ fontSize: "11px", color: "var(--coral)", letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, marginTop: "4px" }}>{subtitle}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {children}
      </div>
    </div>
  );
}

function MenuItem({ nom, desc, prix, note }: { nom: string; desc: string; prix: string | null; note?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: "8px", padding: "14px 0", borderBottom: "1px solid #F0E8D8" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 2.5vw, 20px)", fontWeight: 600, color: "#1A1208" }}>{nom}</span>
          {note && (
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--coral)", border: "1px solid rgba(232,99,122,0.35)", padding: "2px 8px", borderRadius: "100px" }}>{note}</span>
          )}
        </div>
        <p style={{ fontSize: "15px", color: "#9A8A70", marginTop: "3px", fontStyle: "italic", fontFamily: "'Cormorant Garamond', serif" }}>{desc}</p>
      </div>
      {prix && (
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 2.5vw, 21px)", fontWeight: 700, color: "#1A1208", whiteSpace: "nowrap" }}>{prix} <span style={{ fontSize: "11px", fontWeight: 500, color: "#9A8A70" }}>F</span></span>
        </div>
      )}
    </div>
  );
}

function Divider() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "14px", margin: "36px 0" }}>
      <div style={{ flex: 1, height: "1px", background: "#E8DFD0" }} />
      <div style={{ display: "flex", gap: "6px" }}>
        <div style={{ width: "4px", height: "4px", background: "#C9990A", borderRadius: "50%", opacity: 0.5 }} />
        <div style={{ width: "4px", height: "4px", background: "var(--coral)", borderRadius: "50%" }} />
        <div style={{ width: "4px", height: "4px", background: "#C9990A", borderRadius: "50%", opacity: 0.5 }} />
      </div>
      <div style={{ flex: 1, height: "1px", background: "#E8DFD0" }} />
    </div>
  );
}
