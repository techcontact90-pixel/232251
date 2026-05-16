"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section
      ref={ref}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--forest-deep)",
      }}
    >
      {/* Parallax bg image left */}
      <motion.div
        style={{
          y: yBg,
          scale,
          position: "absolute",
          inset: 0,
          backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.45)",
        }}
      />

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(105deg, rgba(15,35,24,0.92) 35%, rgba(15,35,24,0.2) 100%)",
      }} />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div style={{
          position: "relative",
          zIndex: 10,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 48px 0 80px",
          maxWidth: "900px",
        }}>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "32px",
            }}
          >
            <div style={{ width: "40px", height: "1px", background: "var(--gold)" }} />
            <span style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)" }}>
              Expériences d'exception
            </span>
          </motion.div>

          {/* Main title */}
          <div style={{ overflow: "hidden" }}>
            <motion.h1
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(64px, 8vw, 120px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--cream)",
                marginBottom: "0",
              }}
            >
              L'Art de<br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>Vivre</em>
              <span
                style={{
                  display: "inline-block",
                  fontStyle: "normal",
                  WebkitTextStroke: "1px rgba(245,237,217,0.4)",
                  color: "transparent",
                  marginLeft: "20px",
                }}
              >
                Libre
              </span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              fontFamily: "'DM Sans'",
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.8,
              color: "rgba(245,237,217,0.65)",
              maxWidth: "440px",
              marginTop: "32px",
              marginBottom: "48px",
            }}
          >
            Des excursions rares aux tables étoilées, nous orchestrons chaque escapade
            avec une attention obsessionnelle pour le détail.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}
          >
            <a
              href="#excursions"
              style={{
                fontFamily: "'DM Sans'",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--forest-deep)",
                background: "var(--gold)",
                padding: "16px 36px",
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--cream)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "var(--gold)";
                el.style.transform = "translateY(0)";
              }}
            >
              Explorer
            </a>
            <a
              href="#about"
              style={{
                fontFamily: "'DM Sans'",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(245,237,217,0.7)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--gold)"; }}
              onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(245,237,217,0.7)"; }}
            >
              <span>Notre histoire</span>
              <div style={{ width: "24px", height: "1px", background: "currentColor" }} />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Right panel — stats asymmetric */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "absolute",
          right: "48px",
          bottom: "120px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          zIndex: 10,
        }}
      >
        {[
          { num: "340+", label: "Expériences uniques" },
          { num: "12", label: "Destinations d'exception" },
          { num: "98%", label: "Clients comblés" },
        ].map((stat) => (
          <div key={stat.num} style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 300, color: "var(--gold-light)", lineHeight: 1 }}>
              {stat.num}
            </div>
            <div style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,237,217,0.5)", marginTop: "4px" }}>
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(245,237,217,0.4)",
        }}
      >
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, transparent, rgba(245,237,217,0.3))" }} />
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
