"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const slides = [
  { src: "/images/quad/quad-2.jpg", alt: "Quad au Lac Rose Sénégal", label: "Quad" },
  { src: "/images/pirogue/pirogue-3.jpg", alt: "Pirogue sur le Lac Rose", label: "Pirogue" },
  { src: "/images/cheval/cheval-1.jpg", alt: "Cheval au coucher du soleil", label: "Cheval" },
  { src: "/images/ambiance/banner.jpg", alt: "Lac Rose Sénégal vue panoramique", label: "Chameau" },
];

export default function HomeHero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "640px", overflow: "hidden" }}>

      {/* Cycling background */}
      <AnimatePresence>
        <motion.div key={idx}
          style={{ position: "absolute", inset: 0 }}
          initial={{ opacity: 0, scale: 1.07 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <Image src={slides[idx].src} alt={slides[idx].alt} fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(14,61,36,0.88) 0%, rgba(14,61,36,0.55) 55%, rgba(14,61,36,0.15) 100%)", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "220px", background: "linear-gradient(to top, rgba(14,61,36,0.5), transparent)", zIndex: 1 }} />

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1200px", margin: "0 auto", padding: "100px 40px 60px", width: "100%" }}>

        {/* Live activity badge */}
        <AnimatePresence mode="wait">
          <motion.div key={`badge-${idx}`}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(232,99,122,0.88)", backdropFilter: "blur(8px)", color: "white", padding: "7px 18px", borderRadius: "100px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "24px", width: "fit-content" }}
          >
            <span style={{ width: "6px", height: "6px", background: "white", borderRadius: "50%", animation: "pulse 2s ease infinite" }} />
            {slides[idx].label}
          </motion.div>
        </AnimatePresence>

        {/* Stars */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "18px" }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#C9990A" color="#C9990A" />)}
          <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "13px", marginLeft: "8px" }}>4.8 / 5 · 53 avis Google</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(58px, 10.5vw, 136px)", fontWeight: 300, color: "white", lineHeight: 0.9, marginBottom: "28px", letterSpacing: "-0.01em" }}
        >
          L&apos;Aventure<br />
          <em style={{ fontStyle: "italic", fontWeight: 600, color: "#F5A0B0" }}>Lac Rose</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          style={{ fontSize: "clamp(14px, 1.4vw, 17px)", color: "rgba(255,255,255,0.72)", lineHeight: 1.85, maxWidth: "380px", marginBottom: "44px" }}
        >
          Quad · Pirogue · Chameau · Cheval<br />
          Au cœur du Lac Retba, Sénégal.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
        >
          <Link href="/reservation" className="btn-coral">Réserver maintenant</Link>
          <Link href="/activites" className="btn-ghost-white">Découvrir</Link>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 10 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: i === idx ? "32px" : "8px", height: "3px", background: i === idx ? "#E8637A" : "rgba(255,255,255,0.35)", border: "none", cursor: "pointer", borderRadius: "2px", transition: "all 0.4s ease", padding: 0 }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "36px", right: "40px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10, color: "rgba(255,255,255,0.45)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }} className="desktop-only">
        <div style={{ width: "1px", height: "44px", background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)", animation: "scrollBar 2.5s ease infinite" }} />
        Défiler
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.75); }
        }
        @keyframes scrollBar {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
        }
      `}</style>
    </section>
  );
}
