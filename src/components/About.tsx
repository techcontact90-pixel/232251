"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const values = [
  { num: "01", title: "Singularité", desc: "Chaque expérience est conçue sur-mesure, jamais répétée à l'identique." },
  { num: "02", title: "Intimité", desc: "Groupes limités, adresses secrètes — loin des flux touristiques." },
  { num: "03", title: "Durabilité", desc: "Nos partenaires respectent les territoires qu'ils habitent." },
];

export default function About() {
  const ref = useRef(null);
  const imgRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({ target: imgRef, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="about" style={{ background: "var(--forest)", padding: "140px 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px", alignItems: "center" }}>
          {/* Left: image parallax */}
          <div ref={imgRef} style={{ position: "relative" }}>
            <div style={{ position: "relative", overflow: "hidden", height: "600px" }}>
              <motion.div
                style={{
                  y: yImg,
                  position: "absolute",
                  inset: "-10%",
                  backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(0.75) saturate(0.85)",
                }}
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              style={{
                position: "absolute",
                bottom: "-28px",
                right: "-28px",
                width: "160px",
                height: "160px",
                background: "var(--gold)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "24px",
              }}
            >
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "44px", fontWeight: 300, color: "var(--forest-deep)", lineHeight: 1 }}>
                12
              </span>
              <span style={{ fontFamily: "'DM Sans'", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-deep)", textAlign: "center", marginTop: "4px" }}>
                ans d'excellence
              </span>
            </motion.div>
          </div>

          {/* Right: text */}
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "var(--gold)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", fontFamily: "'DM Sans'" }}>
                Notre vision
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 60px)", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1, marginBottom: "32px" }}
            >
              Nous créons des<br />
              <em style={{ color: "var(--gold-light)" }}>moments</em> qui<br />
              demeurent.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{ fontFamily: "'DM Sans'", fontSize: "15px", lineHeight: 2, color: "rgba(245,237,217,0.65)", marginBottom: "60px" }}
            >
              YouArtSquads est né d'une conviction : les expériences les plus précieuses
              sont celles qui sortent du cadre. Depuis 2012, nous sélectionnons avec
              exigence des lieux, des tables et des guides qui partagent notre obsession
              pour l'authenticité et la qualité sans compromis.
            </motion.p>

            {/* Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {values.map((v, i) => (
                <motion.div
                  key={v.num}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.12 }}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr",
                    gap: "24px",
                    padding: "24px 0",
                    borderBottom: "1px solid rgba(245,237,217,0.08)",
                    alignItems: "start",
                  }}
                >
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", color: "var(--gold)", opacity: 0.6 }}>
                    {v.num}
                  </span>
                  <div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--cream)", marginBottom: "6px" }}>
                      {v.title}
                    </div>
                    <div style={{ fontFamily: "'DM Sans'", fontSize: "14px", color: "rgba(245,237,217,0.5)", lineHeight: 1.7 }}>
                      {v.desc}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
