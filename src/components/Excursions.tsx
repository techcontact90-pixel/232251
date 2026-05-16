"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Users, ArrowUpRight } from "lucide-react";

const excursions = [
  {
    title: "Forêt de Brocéliande",
    subtitle: "Randonnée & Légendes",
    duration: "Journée complète",
    group: "2–8 pers.",
    location: "Bretagne, France",
    price: "380€",
    tag: "Nature & Mystère",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=80",
  },
  {
    title: "Gorges du Verdon",
    subtitle: "Kayak & Falaises",
    duration: "2 jours",
    group: "4–12 pers.",
    location: "Alpes-de-Haute-Provence",
    price: "620€",
    tag: "Aventure Aquatique",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=80",
  },
  {
    title: "Camargue Sauvage",
    subtitle: "Safari équestre & Delta",
    duration: "3 jours",
    group: "2–6 pers.",
    location: "Bouches-du-Rhône",
    price: "890€",
    tag: "Éco-Prestige",
    image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=900&q=80",
  },
];

function ExcursionCard({ item, index }: { item: typeof excursions[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--forest-deep)",
        cursor: "pointer",
        gridColumn: index === 0 ? "span 2" : "span 1",
        minHeight: index === 0 ? "480px" : "360px",
      }}
      whileHover="hover"
    >
      {/* Image */}
      <motion.div
        variants={{ hover: { scale: 1.05 } }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url('${item.image}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.55)",
        }}
      />

      {/* Gradient */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to top, rgba(15,35,24,0.95) 30%, transparent 70%)",
      }} />

      {/* Tag */}
      <div style={{
        position: "absolute",
        top: "24px",
        left: "24px",
        background: "rgba(201,169,110,0.15)",
        border: "1px solid rgba(201,169,110,0.4)",
        color: "var(--gold-light)",
        fontFamily: "'DM Sans'",
        fontSize: "10px",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        padding: "6px 14px",
        backdropFilter: "blur(8px)",
      }}>
        {item.tag}
      </div>

      {/* Arrow icon */}
      <motion.div
        variants={{ hover: { opacity: 1, scale: 1 } }}
        initial={{ opacity: 0, scale: 0.8 }}
        style={{
          position: "absolute",
          top: "24px",
          right: "24px",
          width: "40px",
          height: "40px",
          background: "var(--gold)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--forest-deep)",
        }}
      >
        <ArrowUpRight size={18} />
      </motion.div>

      {/* Content */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "32px",
      }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: index === 0 ? "42px" : "30px", fontWeight: 300, color: "var(--cream)", lineHeight: 1.1, marginBottom: "8px" }}>
          {item.title}
        </h3>
        <p style={{ fontFamily: "'DM Sans'", fontSize: "14px", color: "rgba(245,237,217,0.6)", marginBottom: "20px" }}>
          {item.subtitle}
        </p>
        <div style={{ display: "flex", gap: "24px", alignItems: "center", flexWrap: "wrap" }}>
          {[
            { icon: <MapPin size={12} />, text: item.location },
            { icon: <Clock size={12} />, text: item.duration },
            { icon: <Users size={12} />, text: item.group },
          ].map(({ icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(245,237,217,0.5)", fontSize: "12px", fontFamily: "'DM Sans'" }}>
              {icon}<span>{text}</span>
            </div>
          ))}
          <div style={{ marginLeft: "auto", fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 300, color: "var(--gold)" }}>
            {item.price}<span style={{ fontSize: "13px", fontFamily: "'DM Sans'", color: "rgba(245,237,217,0.4)", marginLeft: "4px" }}>/pers.</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Excursions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="excursions" style={{ background: "var(--cream)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "end", marginBottom: "72px" }}>
          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "var(--forest-light)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--forest-light)", fontFamily: "'DM Sans'" }}>
                Nos escapades
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 300, color: "var(--forest)", lineHeight: 1 }}
            >
              Excursions<br />
              <em style={{ fontStyle: "italic", color: "var(--forest-light)" }}>Singulières</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontSize: "16px", lineHeight: 1.9, color: "var(--forest-mid)", fontFamily: "'DM Sans'", fontWeight: 300, maxWidth: "400px", justifySelf: "end" }}
          >
            Chaque expédition est conçue comme une œuvre — guidée par des experts passionnés,
            dans des territoires préservés loin des sentiers touristiques.
          </motion.p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px" }}>
          {excursions.map((item, i) => (
            <ExcursionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
