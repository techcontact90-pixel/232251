import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Activités - Quad, Pirogue, Chameau, Cheval",
  description: "Toutes nos activités au Lac Rose : quad sur les dunes, pirogue sur le lac rose, chameau dans le désert, cheval sur la plage. Sénégal.",
};

const activites = [
  {
    id: "quad",
    titre: "Ballade en Quad",
    tagline: "L'adrénaline au bord de l'Atlantique",
    description: "Enfilez votre casque et prenez les commandes d'un quad puissant. Dunes de sable blanc, plage sauvage, coucher de soleil — chaque virage révèle un nouveau paysage à couper le souffle. L'expérience parfaite pour les amoureux de sensations fortes.",
    details: ["Moniteur expérimenté inclus", "Équipement de sécurité fourni", "Durée : 1h à 2h", "Accessible débutants & confirmés"],
    prix: "15 000 FCFA",
    heroImage: "/images/quad/quad-2.jpg",
    galerie: ["/images/quad/quad-1.jpg", "/images/quad/quad-4.jpg", "/images/quad/quad-5.jpg", "/images/quad/quad-8.jpg"],
    accentColor: "#E8637A",
    bgColor: "white",
  },
  {
    id: "pirogue",
    titre: "Pirogue Lac Rose",
    tagline: "La magie des eaux roses de l'Afrique",
    description: "Le Lac Rose (Lac Retba) est classé patrimoine mondial de l'UNESCO. Ses eaux roses, teintées par une algue unique, créent un spectacle inoubliable. Embarquez à bord d'une pirogue colorée et laissez-vous porter par ce paysage hors du monde.",
    details: ["Gilet de sauvetage fourni", "Guide local bilingue", "Durée : 30 min à 1h", "Vue panoramique à 360°"],
    prix: "10 000 FCFA",
    heroImage: "/images/pirogue/pirogue-1.jpg",
    galerie: ["/images/pirogue/pirogue-2.jpg", "/images/pirogue/pirogue-5.jpg", "/images/pirogue/pirogue-7.jpg", "/images/pirogue/pirogue-8.jpg"],
    accentColor: "#0E3D24",
    bgColor: "#FAF3E8",
  },
  {
    id: "chameau",
    titre: "Balade en Chameau",
    tagline: "Un voyage dans le désert africain",
    description: "Vivez l'authenticité du Sahel sur le dos d'un chameau. Parcourez les dunes dorées et laissez le rythme lent de l'animal vous transporter dans un autre monde. Idéal pour les couples comme pour les familles, et parfait au coucher du soleil.",
    details: ["Balade guidée & sécurisée", "Photo souvenir incluse", "Durée : 15 min à 1h", "Parfait pour tous les âges"],
    prix: "10 000 FCFA",
    heroImage: "/images/ambiance/banner.jpg",
    galerie: ["/images/ambiance/site-1.jpg", "/images/ambiance/site-4.jpg", "/images/ambiance/groupe-1.jpg", "/images/ambiance/site-6.jpg"],
    accentColor: "#C9990A",
    bgColor: "white",
  },
  {
    id: "cheval",
    titre: "Balade à Cheval",
    tagline: "Galop libre sur la plage sénégalaise",
    description: "Galopez en liberté sur la plage ou promenez-vous tranquillement le long du lac, accompagné de nos guides expérimentés. Accessible à tous les niveaux, des cavaliers débutants aux plus confirmés. Un moment de grâce dans un cadre exceptionnel.",
    details: ["Accessible à tous niveaux", "Guide accompagnateur", "Durée : 15 min à 1h", "Sécurité maximale garantie"],
    prix: "10 000 FCFA",
    heroImage: "/images/cheval/cheval-1.jpg",
    galerie: ["/images/cheval/cheval-2.jpg", "/images/cheval/cheval-3.jpg", "/images/cheval/cheval-4.jpg", "/images/cheval/jeux-1.jpg"],
    accentColor: "#1A6B3C",
    bgColor: "#FAF3E8",
  },
];

export default function ActivitesPage() {
  return (
    <>
      {/* Page hero */}
      <div style={{ position: "relative", paddingTop: "72px", height: "400px", overflow: "hidden" }}>
        <Image src="/images/ambiance/banner-2.jpg" alt="Activités Lac Rose Sénégal" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(14,61,36,0.7), rgba(14,61,36,0.85))" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>You Art Lac Rose</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 84px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            Nos <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Activités</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginTop: "20px", maxWidth: "440px", lineHeight: 1.7 }}>
            Quad · Pirogue · Chameau · Cheval — vivez le Lac Rose comme jamais.
          </p>
        </div>
      </div>

      {/* Anchor links */}
      <div style={{ background: "var(--ink)", padding: "0 40px", display: "flex", justifyContent: "center", gap: "0", overflowX: "auto" }}>
        {activites.map((act) => (
          <a key={act.id} href={`#${act.id}`} className="act-anchor" style={{ padding: "18px 24px", fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textDecoration: "none", borderBottom: "2px solid transparent", transition: "all 0.2s", whiteSpace: "nowrap" }}
          >{act.titre}</a>
        ))}
      </div>

      {/* Activity sections */}
      {activites.map((act, i) => (
        <section key={act.id} id={act.id} style={{ background: act.bgColor, padding: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "55% 45%" : "45% 55%", minHeight: "600px" }} className="act-grid">

            {/* Image side */}
            <div style={{ position: "relative", order: i % 2 === 0 ? 0 : 1, minHeight: "500px" }} className="act-img-side">
              <Image src={act.heroImage} alt={act.titre} fill style={{ objectFit: "cover" }} sizes="55vw" />
              {/* Thumbnail strip */}
              <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
                {act.galerie.map((g, gi) => (
                  <div key={gi} style={{ position: "relative", height: "70px", borderRadius: "3px", overflow: "hidden", border: "2px solid rgba(255,255,255,0.7)" }}>
                    <Image src={g} alt={`${act.titre} ${gi+1}`} fill style={{ objectFit: "cover" }} sizes="80px" />
                  </div>
                ))}
              </div>
            </div>

            {/* Text side */}
            <div style={{ order: i % 2 === 0 ? 1 : 0, padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "center" }} className="act-text-side">
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <div style={{ width: "32px", height: "2px", background: act.accentColor }} />
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: act.accentColor }}>{act.tagline}</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, lineHeight: 1.05, marginBottom: "24px" }}>{act.titre}</h2>
              <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, marginBottom: "32px" }}>{act.description}</p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                {act.details.map(d => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px", color: "#374151" }}>
                    <span style={{ width: "22px", height: "22px", background: act.accentColor, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Check size={12} color="white" strokeWidth={3} />
                    </span>
                    {d}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "4px" }}>À partir de</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "40px", fontWeight: 700, color: act.accentColor, lineHeight: 1 }}>{act.prix}</div>
                </div>
                <Link href="/reservation" className="btn-coral">Réserver →</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section style={{ background: "var(--coral)", padding: "72px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>
          Prêt pour l&apos;aventure ?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "16px", lineHeight: 1.7, marginBottom: "36px" }}>
          Combinez plusieurs activités avec nos packs avantageux.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/reservation" className="btn-ghost-white">Voir les packs & tarifs</Link>
          <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" className="btn-ghost-white">WhatsApp</a>
        </div>
      </section>

      <style>{`
        .act-anchor:hover { color: white !important; border-bottom-color: var(--coral) !important; }
        @media (max-width: 900px) {
          .act-grid { grid-template-columns: 1fr !important; }
          .act-img-side { order: 0 !important; min-height: 380px !important; }
          .act-text-side { order: 1 !important; padding: 48px 24px !important; }
        }
      `}</style>
    </>
  );
}
