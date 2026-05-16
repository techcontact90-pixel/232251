"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const restaurants = [
  {
    name: "L'Atelier des Cimes",
    chef: "Thomas Gérard",
    stars: 2,
    style: "Gastronomie alpine",
    location: "Chamonix-Mont-Blanc",
    desc: "Cuisine de haute altitude où les cimes inspirent une poésie culinaire unique. Vue panoramique sur le Mont-Blanc.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    accent: "#3D7054",
  },
  {
    name: "Maison Sylvestre",
    chef: "Élise Moreau",
    stars: 1,
    style: "Bistronomie forêt",
    location: "Dordogne",
    desc: "Produits du terroir périgourdin sublimés par une cuisine de saison empreinte de simplicité raffinée.",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    accent: "#C9A96E",
  },
  {
    name: "Le Rivage Sauvage",
    chef: "Antoine Fabre",
    stars: 1,
    style: "Fruits de mer & Littoral",
    location: "Côte Sauvage, Bretagne",
    desc: "Face à l'Atlantique, une carte dictée par les marées et les pêcheurs du matin.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    accent: "#2D5540",
  },
  {
    name: "Sous les Chênes",
    chef: "Marc & Isabelle Vidal",
    stars: 2,
    style: "Table d'exception",
    location: "Périgord Noir",
    desc: "L'élégance d'un manoir du XVIIe siècle, la précision d'une cuisine doublement étoilée.",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80",
    accent: "#1C3A2E",
  },
];

export default function Restaurants() {
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="restaurants" style={{ background: "var(--forest-deep)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Background texture */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=20')",
        backgroundSize: "cover",
        opacity: 0.04,
      }} />

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "80px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "'DM Sans'" }}>
                Tables d'exception
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "var(--cream)", lineHeight: 1 }}
            >
              Gastronomie<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>& Terroir</em>
            </motion.h2>
          </div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(245,237,217,0.5)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              transition: "color 0.3s",
            }}
            whileHover={{ color: "var(--gold)" } as never}
          >
            Voir toutes les tables
            <div style={{ width: "32px", height: "1px", background: "currentColor" }} />
          </motion.a>
        </div>

        {/* Asymmetric grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr",
          gridTemplateRows: "auto auto",
          gap: "2px",
        }}>
          {restaurants.map((r, i) => {
            const ref = useRef(null);
            const visible = useInView(ref, { once: true, margin: "-60px" });

            return (
              <motion.article
                key={r.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: i < 2 ? "420px" : "320px",
                  cursor: "pointer",
                  gridColumn: i === 2 ? "span 2" : "auto",
                }}
                whileHover="hover"
              >
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url('${r.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.4) saturate(0.9)",
                  }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,35,24,0.97) 25%, transparent 65%)" }} />

                {/* Stars */}
                <div style={{ position: "absolute", top: "24px", right: "24px", display: "flex", gap: "4px" }}>
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <Star key={si} size={14} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>

                <div style={{ position: "absolute", bottom: "28px", left: "28px", right: "28px" }}>
                  <div style={{ fontFamily: "'DM Sans'", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "8px" }}>
                    {r.style} — {r.location}
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: i === 3 ? "38px" : "28px", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1, marginBottom: "8px" }}>
                    {r.name}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: "13px", color: "rgba(245,237,217,0.55)", lineHeight: 1.7, marginBottom: "12px", maxWidth: "480px" }}>
                    {r.desc}
                  </p>
                  <div style={{ fontSize: "11px", color: "rgba(245,237,217,0.35)", fontFamily: "'DM Sans'", letterSpacing: "0.05em" }}>
                    Chef {r.chef}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
