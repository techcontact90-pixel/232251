"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Wifi, Coffee, TreePine, Waves } from "lucide-react";

const stays = [
  {
    name: "Le Domaine des Hautes Futaies",
    type: "Château & Spa",
    location: "Sologne, Loire",
    price: "580",
    nights: "nuit",
    rooms: "24 suites",
    amenities: [<TreePine size={14} key="t" />, <Coffee size={14} key="c" />, <Wifi size={14} key="w" />],
    desc: "Château du XVIIIe niché dans 120 hectares de forêt privée, spa thermal et cuisine du domaine.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
    wide: true,
  },
  {
    name: "Cabanes Suspendues du Périgord",
    type: "Éco-lodge",
    location: "Périgord Vert",
    price: "290",
    nights: "nuit",
    rooms: "8 cabanes",
    amenities: [<TreePine size={14} key="t" />, <Coffee size={14} key="c" />],
    desc: "Huit cabanes nichées à 8 mètres de hauteur dans les chênes centenaires.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    wide: false,
  },
  {
    name: "Villa Littoral",
    type: "Villa privée & Piscine",
    location: "Cap Ferret",
    price: "1200",
    nights: "nuit",
    rooms: "Villa entière",
    amenities: [<Waves size={14} key="w" />, <Coffee size={14} key="c" />, <Wifi size={14} key="wi" />],
    desc: "Villa contemporaine face au Bassin d'Arcachon, terrasse panoramique, piscine chauffée.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80",
    wide: false,
  },
];

export default function Hebergements() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const inView = useInView(headerRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section id="hebergements" ref={sectionRef} style={{ background: "var(--cream)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Decorative large text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "-20px",
        transform: "translateY(-50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "280px",
        fontWeight: 300,
        WebkitTextStroke: "1px rgba(28,58,46,0.06)",
        color: "transparent",
        lineHeight: 1,
        userSelect: "none",
        pointerEvents: "none",
        whiteSpace: "nowrap",
      }}>
        Séjours
      </div>

      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: "80px" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}
          >
            <div style={{ width: "32px", height: "1px", background: "var(--forest-light)" }} />
            <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--forest-light)", fontFamily: "'DM Sans'" }}>
              Nos refuges
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "var(--forest)", lineHeight: 1 }}
          >
            Hébergements<br />
            <em style={{ fontStyle: "italic", color: "var(--forest-light)" }}>d'Exception</em>
          </motion.h2>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gridTemplateRows: "auto auto", gap: "24px" }}>
          {stays.map((stay, i) => {
            const ref = useRef(null);
            const visible = useInView(ref, { once: true, margin: "-60px" });

            return (
              <motion.article
                key={stay.name}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  gridColumn: stay.wide ? "span 2" : "span 1",
                  background: "white",
                  overflow: "hidden",
                  cursor: "pointer",
                  boxShadow: "0 4px 40px rgba(28,58,46,0.08)",
                  transition: "box-shadow 0.4s ease, transform 0.4s ease",
                  display: "grid",
                  gridTemplateColumns: stay.wide ? "1.2fr 1fr" : "1fr",
                }}
                whileHover={{ y: -4, boxShadow: "0 16px 60px rgba(28,58,46,0.16)" } as never}
              >
                {/* Image */}
                <div style={{ position: "relative", overflow: "hidden", minHeight: stay.wide ? "400px" : "260px" }}>
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundImage: `url('${stay.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: "20px",
                    left: "20px",
                    background: "var(--forest)",
                    color: "var(--cream)",
                    fontFamily: "'DM Sans'",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                  }}>
                    {stay.type}
                  </div>
                </div>

                {/* Info */}
                <div style={{ padding: "36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: "11px", color: "var(--forest-light)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px" }}>
                      {stay.location}
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: stay.wide ? "34px" : "26px", fontWeight: 300, color: "var(--forest)", lineHeight: 1.15, marginBottom: "16px" }}>
                      {stay.name}
                    </h3>
                    <p style={{ fontFamily: "'DM Sans'", fontSize: "14px", color: "var(--forest-mid)", lineHeight: 1.8, marginBottom: "24px" }}>
                      {stay.desc}
                    </p>
                    <div style={{ display: "flex", gap: "12px", marginBottom: "28px" }}>
                      {stay.amenities.map((icon, ai) => (
                        <div key={ai} style={{ width: "36px", height: "36px", border: "1px solid rgba(28,58,46,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--forest-mid)" }}>
                          {icon}
                        </div>
                      ))}
                      <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--forest-mid)", fontSize: "12px", fontFamily: "'DM Sans'" }}>
                        {stay.rooms}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "24px", borderTop: "1px solid rgba(28,58,46,0.1)" }}>
                    <div>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 300, color: "var(--forest)" }}>
                        {stay.price}€
                      </span>
                      <span style={{ fontFamily: "'DM Sans'", fontSize: "12px", color: "var(--forest-mid)", marginLeft: "4px" }}>
                        / {stay.nights}
                      </span>
                    </div>
                    <motion.a
                      href="#contact"
                      whileHover={{ x: 4 }}
                      style={{
                        fontFamily: "'DM Sans'",
                        fontSize: "11px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "var(--forest)",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        transition: "color 0.3s",
                      }}
                    >
                      Réserver
                      <div style={{ width: "24px", height: "1px", background: "currentColor" }} />
                    </motion.a>
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
