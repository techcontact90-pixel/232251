"use client";
import Image from "next/image";

const categories = [
  {
    id: "quad", label: "🏍️ Quad & Aventure", color: "#E8637A",
    photos: [
      { src: "/images/quad/quad-1.jpg", alt: "Quad plage Lac Rose" },
      { src: "/images/quad/quad-2.jpg", alt: "Groupe quad Sénégal" },
      { src: "/images/quad/quad-5.jpg", alt: "Excursion quad You Art" },
      { src: "/images/quad/quad-8.jpg", alt: "Ballade quad Lac Rose" },
    ],
  },
  {
    id: "pirogue", label: "🚣 Pirogue & Lac Rose", color: "#1A6B3C",
    photos: [
      { src: "/images/pirogue/pirogue-1.jpg", alt: "Pirogues colorées Lac Rose" },
      { src: "/images/pirogue/pirogue-2.jpg", alt: "Pirogue Sénégal" },
      { src: "/images/pirogue/pirogue-8.jpg", alt: "Tour du Lac Rose pirogue" },
      { src: "/images/pirogue/pirogue-4.jpg", alt: "Lac Rose excursion" },
    ],
  },
  {
    id: "cheval", label: "🐴 Cheval & Chameau", color: "#D4A017",
    photos: [
      { src: "/images/cheval/cheval-1.jpg", alt: "Cheval Lac Rose" },
      { src: "/images/cheval/cheval-2.jpg", alt: "Balade cheval Sénégal" },
      { src: "/images/cheval/cheval-3.jpg", alt: "Horse riding Sénégal" },
      { src: "/images/cheval/jeux-1.jpg", alt: "Jeux You Art Lac Rose" },
    ],
  },
  {
    id: "ambiance", label: "🌅 Ambiance & Moments", color: "#7C3AED",
    photos: [
      { src: "/images/ambiance/site-1.jpg", alt: "You Art Lac Rose entrée" },
      { src: "/images/ambiance/groupe-1.jpg", alt: "Groupe touristes Lac Rose" },
      { src: "/images/ambiance/site-5.jpg", alt: "Ambiance You Art" },
      { src: "/images/ambiance/site-6.jpg", alt: "Lac Rose Sénégal" },
    ],
  },
];

export default function GalerieClient() {
  return (
    <>
      <div style={{ paddingTop: "70px", background: "linear-gradient(135deg, #1A1A1A, #374151)", padding: "120px 24px 60px", textAlign: "center" }}>
        <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Nos Souvenirs</span>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 700, color: "white", marginTop: "8px" }}>Galerie Photos</h1>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "16px", marginTop: "12px" }}>Quad · Pirogue · Cheval · Ambiance</p>
      </div>

      <style>{`
        .gal-img { transition: transform 0.4s ease; }
        .gal-img:hover { transform: scale(1.06); }
      `}</style>

      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} style={{ padding: "64px 24px", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
              <div style={{ width: "4px", height: "32px", background: cat.color, borderRadius: "2px" }} />
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700 }}>{cat.label}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
              {cat.photos.map((photo, i) => (
                <div key={i} style={{ position: "relative", overflow: "hidden", borderRadius: "6px", aspectRatio: "4/3" }}>
                  <Image className="gal-img" src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover" }} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
