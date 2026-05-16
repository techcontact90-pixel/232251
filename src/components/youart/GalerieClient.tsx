"use client";
import Image from "next/image";
import { useState } from "react";

const categories = [
  { key: "all", label: "Tout voir" },
  { key: "quad", label: "Quad" },
  { key: "pirogue", label: "Pirogue" },
  { key: "cheval", label: "Cheval" },
  { key: "ambiance", label: "Ambiance" },
];

const photos = [
  { src: "/images/quad/quad-1.jpg", cat: "quad", alt: "Quad Lac Rose", h: 360 },
  { src: "/images/pirogue/pirogue-1.jpg", cat: "pirogue", alt: "Pirogue Lac Rose", h: 240 },
  { src: "/images/cheval/cheval-1.jpg", cat: "cheval", alt: "Cheval coucher de soleil", h: 220 },
  { src: "/images/ambiance/banner.jpg", cat: "ambiance", alt: "Lac Rose panoramique", h: 300 },
  { src: "/images/quad/quad-2.jpg", cat: "quad", alt: "Quad sur les dunes", h: 220 },
  { src: "/images/pirogue/pirogue-3.jpg", cat: "pirogue", alt: "Pirogue colorée", h: 360 },
  { src: "/images/cheval/cheval-2.jpg", cat: "cheval", alt: "Cheval plage", h: 220 },
  { src: "/images/ambiance/site-1.jpg", cat: "ambiance", alt: "Site Lac Rose", h: 220 },
  { src: "/images/quad/quad-4.jpg", cat: "quad", alt: "Quad dunes dorées", h: 260 },
  { src: "/images/pirogue/pirogue-5.jpg", cat: "pirogue", alt: "Pirogue coucher", h: 220 },
  { src: "/images/cheval/cheval-3.jpg", cat: "cheval", alt: "Balade cheval", h: 240 },
  { src: "/images/ambiance/groupe-1.jpg", cat: "ambiance", alt: "Groupe Lac Rose", h: 220 },
  { src: "/images/quad/quad-6.jpg", cat: "quad", alt: "Adrénaline quad", h: 220 },
  { src: "/images/pirogue/pirogue-7.jpg", cat: "pirogue", alt: "Eaux roses", h: 220 },
  { src: "/images/ambiance/site-3.jpg", cat: "ambiance", alt: "Paysage lac", h: 300 },
  { src: "/images/quad/quad-8.jpg", cat: "quad", alt: "Quad liberté", h: 220 },
  { src: "/images/pirogue/pirogue-8.jpg", cat: "pirogue", alt: "Pirogue soleil", h: 220 },
  { src: "/images/ambiance/site-5.jpg", cat: "ambiance", alt: "Lac Rose soleil", h: 360 },
  { src: "/images/cheval/cheval-4.jpg", cat: "cheval", alt: "Cheval liberté", h: 220 },
  { src: "/images/ambiance/site-6.jpg", cat: "ambiance", alt: "Ambiance lac", h: 220 },
];

export default function GalerieClient() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "all" ? photos : photos.filter(p => p.cat === active);

  return (
    <>
      {/* Filter tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", padding: "48px 24px 40px", flexWrap: "wrap" }}>
        {categories.map(cat => (
          <button key={cat.key} onClick={() => setActive(cat.key)}
            style={{
              padding: "10px 24px", fontSize: "12px", fontWeight: 600,
              letterSpacing: "0.12em", textTransform: "uppercase",
              background: active === cat.key ? "var(--coral)" : "transparent",
              color: active === cat.key ? "white" : "var(--muted)",
              border: `1.5px solid ${active === cat.key ? "var(--coral)" : "#E5E7EB"}`,
              borderRadius: "100px", cursor: "pointer", transition: "all 0.25s ease",
            }}
          >{cat.label}</button>
        ))}
      </div>

      {/* Masonry grid */}
      <div style={{ padding: "0 24px 80px", maxWidth: "1300px", margin: "0 auto" }}>
        <div style={{ columns: "4 240px", columnGap: "12px" }}>
          {filtered.map((photo, i) => (
            <div key={`${photo.src}-${i}`}
              onClick={() => setLightbox(photo.src)}
              style={{ position: "relative", marginBottom: "12px", overflow: "hidden", borderRadius: "4px", cursor: "zoom-in", breakInside: "avoid", height: `${photo.h}px` }}
              className="g-item"
            >
              <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)" }} sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 25vw" />
              <div className="g-overlay" style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.4s ease" }}>
                <span className="g-plus" style={{ color: "white", fontSize: "28px", fontWeight: 300, opacity: 0, transform: "scale(0.5)", transition: "all 0.3s ease" }}>⊕</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px", cursor: "zoom-out" }}>
          <button onClick={() => setLightbox(null)}
            style={{ position: "absolute", top: "20px", right: "28px", background: "none", border: "none", color: "white", fontSize: "40px", cursor: "pointer", lineHeight: 1 }}>×</button>
          <div style={{ position: "relative", width: "min(900px, 90vw)", height: "min(620px, 85vh)" }}>
            <Image src={lightbox} alt="You Art Lac Rose" fill style={{ objectFit: "contain" }} sizes="90vw" />
          </div>
        </div>
      )}

      <style>{`
        .g-item:hover img { transform: scale(1.08) !important; }
        .g-item:hover .g-overlay { background: rgba(14,61,36,0.42) !important; }
        .g-item:hover .g-plus { opacity: 1 !important; transform: scale(1) !important; }
      `}</style>
    </>
  );
}
