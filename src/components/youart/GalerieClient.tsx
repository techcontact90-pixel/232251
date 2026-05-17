"use client";
import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

const CATEGORIES = [
  { key: "quad",     label: "Quad",     subtitle: "Adrénaline & dunes",     cover: "/images/quad/quad-2.jpg",        coverPos: "center 35%" },
  { key: "pirogue",  label: "Pirogue",  subtitle: "Eaux roses mythiques",    cover: "/images/pirogue/pirogue-1.jpg",  coverPos: "center 45%" },
  { key: "cheval",   label: "Cheval",   subtitle: "Galop sur la plage",      cover: "/images/cheval/cheval-1.jpg",   coverPos: "center 20%" },
  { key: "ambiance", label: "Ambiance", subtitle: "L'âme du Lac Rose",       cover: "/images/ambiance/site-2.jpg",   coverPos: "center 40%" },
];

const PHOTOS: Record<string, { src: string; alt: string; pos?: string }[]> = {
  quad: [
    { src: "/images/quad/quad-1.jpg", alt: "Quad Lac Rose", pos: "center 40%" },
    { src: "/images/quad/quad-2.jpg", alt: "Quad sur les dunes", pos: "center 35%" },
    { src: "/images/quad/quad-3.jpg", alt: "Quad adrénaline", pos: "center 30%" },
    { src: "/images/quad/quad-4.jpg", alt: "Quad dunes dorées", pos: "center 40%" },
    { src: "/images/quad/quad-5.jpg", alt: "Quad plage", pos: "center 35%" },
    { src: "/images/quad/quad-6.jpg", alt: "Quad liberté", pos: "center 40%" },
    { src: "/images/quad/quad-7.jpg", alt: "Quad coucher de soleil", pos: "center 45%" },
    { src: "/images/quad/quad-8.jpg", alt: "Quad aventure", pos: "center 35%" },
  ],
  pirogue: [
    { src: "/images/pirogue/pirogue-1.jpg", alt: "Pirogue Lac Rose", pos: "center 45%" },
    { src: "/images/pirogue/pirogue-2.jpg", alt: "Pirogue colorée", pos: "center 50%" },
    { src: "/images/pirogue/pirogue-3.jpg", alt: "Pirogue eaux roses", pos: "center 40%" },
    { src: "/images/pirogue/pirogue-4.jpg", alt: "Pirogue coucher de soleil", pos: "center 45%" },
    { src: "/images/pirogue/pirogue-5.jpg", alt: "Pirogue Sénégal", pos: "center 40%" },
    { src: "/images/pirogue/pirogue-6.jpg", alt: "Pirogue lac retba", pos: "center 50%" },
    { src: "/images/pirogue/pirogue-7.jpg", alt: "Pirogue panoramique", pos: "center 45%" },
    { src: "/images/pirogue/pirogue-8.jpg", alt: "Pirogue aventure", pos: "center 40%" },
  ],
  cheval: [
    { src: "/images/cheval/cheval-1.jpg", alt: "Cheval coucher de soleil", pos: "center 25%" },
    { src: "/images/cheval/cheval-2.jpg", alt: "Cheval sur la plage", pos: "center 20%" },
    { src: "/images/cheval/cheval-3.jpg", alt: "Balade à cheval", pos: "center 25%" },
    { src: "/images/cheval/cheval-4.jpg", alt: "Cheval liberté", pos: "center 20%" },
    { src: "/images/cheval/jeux-1.jpg", alt: "Jeux chevaux", pos: "center 30%" },
  ],
  ambiance: [
    { src: "/images/ambiance/banner.jpg", alt: "Lac Rose panoramique", pos: "center 40%" },
    { src: "/images/ambiance/banner-2.jpg", alt: "Lac Rose vue", pos: "center 35%" },
    { src: "/images/ambiance/site-1.jpg", alt: "Site Lac Rose", pos: "center 40%" },
    { src: "/images/ambiance/site-2.jpg", alt: "Ambiance Lac Rose", pos: "center 45%" },
    { src: "/images/ambiance/site-3.jpg", alt: "Paysage Lac Rose", pos: "center 40%" },
    { src: "/images/ambiance/site-4.jpg", alt: "Lac Rose nature", pos: "center 45%" },
    { src: "/images/ambiance/site-5.jpg", alt: "Lac Rose coucher", pos: "center 40%" },
  ],
};

export default function GalerieClient() {
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const photos = activeCat ? PHOTOS[activeCat] : [];

  const selectCat = (key: string) => {
    setActiveCat(key);
    setSlideIdx(0);
    setTimeout(() => {
      document.getElementById("gallery-viewer")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const prev = useCallback(() => setSlideIdx(i => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setSlideIdx(i => (i + 1) % photos.length), [photos.length]);

  return (
    <>
      {/* ── Category Cards ── */}
      <div style={{ padding: "48px 24px 40px", maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="cat-grid">
          {CATEGORIES.map(cat => (
            <button key={cat.key} onClick={() => selectCat(cat.key)}
              className="cat-card"
              style={{ position: "relative", height: "260px", border: activeCat === cat.key ? "3px solid var(--coral)" : "3px solid transparent", borderRadius: "8px", overflow: "hidden", cursor: "pointer", padding: 0, background: "none", transition: "transform 0.3s, border-color 0.3s", outline: "none" }}>
              <Image src={cat.cover} alt={cat.label} fill style={{ objectFit: "cover", objectPosition: cat.coverPos, transition: "transform 0.5s ease" }} sizes="(max-width: 768px) 50vw, 25vw" />
              <div style={{ position: "absolute", inset: 0, background: activeCat === cat.key ? "rgba(232,99,122,0.35)" : "rgba(14,61,36,0.5)", transition: "background 0.3s" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "16px" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px,3vw,26px)", fontWeight: 700, color: "white", marginBottom: "6px" }}>{cat.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em", textAlign: "center" }}>{cat.subtitle}</div>
                <div style={{ marginTop: "12px", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: activeCat === cat.key ? "#FFD" : "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.5)", padding: "4px 12px", borderRadius: "100px" }}>
                  {activeCat === cat.key ? "En cours" : `${PHOTOS[cat.key].length} photos`}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ── Slideshow Viewer ── */}
      {activeCat && photos.length > 0 && (
        <div id="gallery-viewer" style={{ background: "var(--ink)", padding: "0 0 60px" }}>
          {/* Category header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 32px 20px" }}>
            <div>
              <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>Galerie</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "white" }}>
                {CATEGORIES.find(c => c.key === activeCat)?.label}
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>{slideIdx + 1} / {photos.length}</span>
              <button onClick={() => setActiveCat(null)} style={{ background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Main slide */}
          <div style={{ position: "relative", maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", borderRadius: "8px", overflow: "hidden", cursor: "zoom-in" }}
              onClick={() => setLightbox(photos[slideIdx])}>
              <Image src={photos[slideIdx].src} alt={photos[slideIdx].alt} fill style={{ objectFit: "cover", objectPosition: photos[slideIdx].pos ?? "center 35%" }} sizes="(max-width: 768px) 100vw, 1100px" priority />
              <div style={{ position: "absolute", inset: 0, background: "transparent", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }} className="slide-zoom-hint">
                <div style={{ background: "rgba(0,0,0,0.5)", borderRadius: "50%", width: "56px", height: "56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <ZoomIn size={24} color="white" />
                </div>
              </div>
            </div>

            {/* Prev / Next */}
            {photos.length > 1 && (
              <>
                <button onClick={prev} style={{ position: "absolute", left: "36px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", transition: "background 0.2s", zIndex: 2 }}
                  onMouseEnter={e => (e.currentTarget).style.background = "rgba(232,99,122,0.7)"}
                  onMouseLeave={e => (e.currentTarget).style.background = "rgba(255,255,255,0.12)"}
                ><ChevronLeft size={22} /></button>
                <button onClick={next} style={{ position: "absolute", right: "36px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: "48px", height: "48px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white", transition: "background 0.2s", zIndex: 2 }}
                  onMouseEnter={e => (e.currentTarget).style.background = "rgba(232,99,122,0.7)"}
                  onMouseLeave={e => (e.currentTarget).style.background = "rgba(255,255,255,0.12)"}
                ><ChevronRight size={22} /></button>
              </>
            )}
          </div>

          {/* Thumbnail strip */}
          <div ref={scrollRef} style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "16px 32px 0", scrollbarWidth: "none", msOverflowStyle: "none", maxWidth: "1100px", margin: "0 auto" }} className="thumb-strip">
            {photos.map((p, i) => (
              <button key={i} onClick={() => setSlideIdx(i)}
                style={{ position: "relative", width: "80px", height: "56px", borderRadius: "4px", overflow: "hidden", flexShrink: 0, border: i === slideIdx ? "2px solid var(--coral)" : "2px solid transparent", cursor: "pointer", padding: 0, opacity: i === slideIdx ? 1 : 0.55, transition: "opacity 0.2s, border-color 0.2s" }}>
                <Image src={p.src} alt={p.alt} fill style={{ objectFit: "cover", objectPosition: p.pos ?? "center 35%" }} sizes="80px" />
              </button>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "20px" }} className="dots-mobile">
            {photos.map((_, i) => (
              <button key={i} onClick={() => setSlideIdx(i)}
                style={{ width: i === slideIdx ? "24px" : "6px", height: "6px", borderRadius: "3px", background: i === slideIdx ? "var(--coral)" : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s" }} />
            ))}
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightbox && (
        <div onClick={() => setLightbox(null)}
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out" }}>
          <button onClick={() => setLightbox(null)} style={{ position: "absolute", top: "20px", right: "24px", background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
            <X size={20} />
          </button>
          <div style={{ position: "relative", width: "min(1000px,95vw)", height: "min(680px,88vh)" }}>
            <Image src={lightbox.src} alt={lightbox.alt} fill style={{ objectFit: "contain" }} sizes="95vw" />
          </div>
        </div>
      )}

      <style>{`
        .thumb-strip::-webkit-scrollbar { display: none; }
        .cat-card:hover img { transform: scale(1.06) !important; }
        .slide-zoom-hint { opacity: 0 !important; }
        .slide-zoom-hint:hover { opacity: 1 !important; }
        @media (max-width: 768px) {
          .cat-grid { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
          .cat-card { height: 190px !important; }
          .dots-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .dots-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
