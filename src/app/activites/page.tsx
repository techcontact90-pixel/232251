import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activités - Quad, Pirogue, Chameau, Cheval",
  description: "Toutes nos activités au Lac Rose : ballade en quad sur la plage, pirogue sur le lac rose, balade en chameau dans les dunes, cheval au coucher du soleil. Sénégal.",
};

const activites = [
  {
    id: "quad",
    icon: "🏍️",
    titre: "Ballade en Quad",
    tagline: "L'adrénaline au bord de l'Atlantique",
    description: "Enfilez votre casque et prenez le contrôle d'un quad puissant pour explorer les dunes de sable blanc et longer la plage sauvage. Une expérience unique qui combine sensations fortes et paysages à couper le souffle.",
    details: ["Guidé par un moniteur expérimenté", "Équipement de sécurité fourni", "Durée : 1h à 2h selon le pack", "Adapté aux débutants et confirmés"],
    prix: "15 000 FCFA",
    image: "/images/quad/quad-2.jpg",
    galerie: ["/images/quad/quad-1.jpg", "/images/quad/quad-5.jpg", "/images/quad/quad-8.jpg"],
    color: "#E8637A",
  },
  {
    id: "pirogue",
    icon: "🚣",
    titre: "Pirogue sur le Lac Rose",
    tagline: "La magie des eaux roses de l'Afrique",
    description: "Le Lac Rose (Lac Retba) est l'un des sites naturels les plus exceptionnels du Sénégal. Embarquez à bord d'une pirogue colorée aux couleurs du drapeau sénégalais et glissez sur ses eaux teintées de rose, un phénomène dû à une algue unique.",
    details: ["Gilet de sauvetage fourni", "Guide local bilingue", "Durée : 30 min à 1h", "Vue panoramique sur le lac"],
    prix: "10 000 FCFA",
    image: "/images/pirogue/pirogue-1.jpg",
    galerie: ["/images/pirogue/pirogue-2.jpg", "/images/pirogue/pirogue-8.jpg", "/images/pirogue/pirogue-4.jpg"],
    color: "#1A6B3C",
  },
  {
    id: "chameau",
    icon: "🐪",
    titre: "Balade en Chameau",
    tagline: "Un voyage dans le désert africain",
    description: "Vivez l'expérience authentique du Sahel sur le dos d'un chameau. Parcourez les dunes dorées au coucher du soleil pour des photos et des souvenirs inoubliables. Idéal pour les couples comme pour les familles.",
    details: ["Balade guidée", "Photo souvenir incluse", "Durée : 15 min à 1h", "Parfait pour tous les âges"],
    prix: "10 000 FCFA",
    image: "/images/ambiance/banner.jpg",
    galerie: ["/images/ambiance/site-1.jpg", "/images/ambiance/groupe-1.jpg", "/images/ambiance/site-5.jpg"],
    color: "#D4A017",
  },
  {
    id: "cheval",
    icon: "🐴",
    titre: "Balade à Cheval",
    tagline: "Galop libre sur la plage sénégalaise",
    description: "Galopez sur la plage ou promenez-vous tranquillement à cheval, accompagné de nos guides. Une activité accessible à tous les niveaux, des débutants aux cavaliers confirmés. Le cadre naturel du Lac Rose offre un décor exceptionnel.",
    details: ["Tous niveaux bienvenus", "Guide accompagnateur", "Durée : 15 min à 1h", "Sécurité maximale"],
    prix: "10 000 FCFA",
    image: "/images/cheval/cheval-1.jpg",
    galerie: ["/images/cheval/cheval-2.jpg", "/images/cheval/cheval-3.jpg", "/images/cheval/jeux-1.jpg"],
    color: "#7C3AED",
  },
];

export default function ActivitesPage() {
  return (
    <>
      {/* Header */}
      <div style={{ paddingTop: "70px", background: "linear-gradient(135deg, #1A6B3C 0%, #2E8B57 100%)", padding: "120px 24px 60px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>You Art Lac Rose</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "white", marginTop: "8px" }}>Nos Activités</h1>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", marginTop: "12px", maxWidth: "480px", margin: "12px auto 0" }}>
          Quad, pirogue, chameau, cheval — vivez le Lac Rose comme jamais.
        </p>
      </div>

      {/* Activités */}
      {activites.map((act, i) => (
        <section key={act.id} id={act.id} style={{ padding: "80px 24px", background: i % 2 === 0 ? "white" : "#FAFAFA" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            {/* Image */}
            <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
              <div style={{ position: "relative", height: "400px", borderRadius: "8px", overflow: "hidden" }}>
                <Image src={act.image} alt={act.titre} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              {/* Mini galerie */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px", marginTop: "8px" }}>
                {act.galerie.map((g, gi) => (
                  <div key={gi} style={{ position: "relative", height: "90px", borderRadius: "4px", overflow: "hidden" }}>
                    <Image src={g} alt={`${act.titre} ${gi+1}`} fill style={{ objectFit: "cover" }} sizes="150px" />
                  </div>
                ))}
              </div>
            </div>

            {/* Texte */}
            <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>{act.icon}</div>
              <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: act.color }}>{act.tagline}</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, margin: "8px 0 16px" }}>{act.titre}</h2>
              <p style={{ fontSize: "15px", color: "#6B7280", lineHeight: 1.8, marginBottom: "24px" }}>{act.description}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                {act.details.map(d => (
                  <li key={d} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px", color: "#374151" }}>
                    <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: act.color, flexShrink: 0 }} />
                    {d}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.1em" }}>À partir de</div>
                  <div style={{ fontSize: "28px", fontWeight: 700, color: act.color }}>{act.prix}</div>
                </div>
                <Link href="/reservation" className="btn-primary">Réserver cette activité</Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div[style] { grid-template-columns: 1fr !important; }
          div[style*="order: 1"] { order: 0 !important; }
        }
      `}</style>
    </>
  );
}
