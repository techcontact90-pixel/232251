"use client";
import { useState, useEffect, Suspense, lazy } from "react";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

const activities = ["Quad", "Pirogue", "Chameau", "Cheval"];

export default function HomeHero() {
  const [actIdx, setActIdx] = useState(0);
  const [splineReady, setSplineReady] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setActIdx(i => (i + 1) % activities.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: "680px", overflow: "hidden", background: "#050505" }}>

      {/* Spline 3D scene */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, opacity: splineReady ? 1 : 0, transition: "opacity 1.2s ease" }}>
        <Suspense fallback={null}>
          <Spline
            scene="https://prod.spline.design/o1MGb6Rf2TcXp7MF/scene.splinecode"
            onLoad={() => setSplineReady(true)}
            style={{ width: "100%", height: "100%" }}
          />
        </Suspense>
      </div>

      {/* Ambient gradient glow (shown while Spline loads + overlay) */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(232,99,122,0.18) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(14,61,36,0.4) 0%, transparent 55%), linear-gradient(135deg, rgba(5,5,5,0.72) 0%, rgba(5,5,5,0.38) 60%, rgba(5,5,5,0.6) 100%)", pointerEvents: "none" }} />

      {/* Bottom fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "280px", background: "linear-gradient(to top, #050505, transparent)", zIndex: 2, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "1200px", margin: "0 auto", padding: "100px 48px 80px", width: "100%" }}>

        {/* Stars */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "22px" }}>
          {[1,2,3,4,5].map(i => <Star key={i} size={13} fill="#C9990A" color="#C9990A" />)}
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginLeft: "8px", letterSpacing: "0.04em" }}>4.8 / 5 · 53 avis Google</span>
        </motion.div>

        {/* Headline */}
        <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(62px, 11vw, 148px)", fontWeight: 300, color: "white", lineHeight: 0.88, marginBottom: "0", letterSpacing: "-0.02em" }}>
            L&apos;Aventure
          </h1>
        </motion.div>

        {/* Animated activity word */}
        <div style={{ height: "clamp(66px, 12vw, 158px)", overflow: "hidden", marginBottom: "32px" }}>
          <AnimatePresence mode="wait">
            <motion.div key={actIdx}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.32, 0, 0.67, 0] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(62px, 11vw, 148px)", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.02em", background: "linear-gradient(135deg, #E8637A 0%, #F5A0B0 50%, #C9990A 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              {activities[actIdx]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.9 }}
          style={{ fontSize: "clamp(14px, 1.3vw, 17px)", color: "rgba(255,255,255,0.55)", lineHeight: 1.9, maxWidth: "360px", marginBottom: "48px", letterSpacing: "0.01em" }}>
          Quad · Pirogue · Chameau · Cheval<br />
          Au cœur du Lac Retba, Sénégal.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.8 }}
          style={{ display: "flex", gap: "14px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/reservation" style={{ background: "var(--coral)", color: "white", padding: "16px 38px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", transition: "all 0.3s", display: "inline-flex", alignItems: "center", gap: "8px" }}
            className="hero-btn-primary">
            Réserver <ArrowRight size={13} />
          </Link>
          <Link href="/activites" style={{ background: "transparent", color: "rgba(255,255,255,0.75)", padding: "16px 32px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2px", transition: "all 0.3s", backdropFilter: "blur(8px)" }}
            className="hero-btn-ghost">
            Découvrir
          </Link>
        </motion.div>
      </div>

      {/* Slide indicator dots */}
      <div style={{ position: "absolute", bottom: "44px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "8px", zIndex: 10 }}>
        {activities.map((_, i) => (
          <button key={i} onClick={() => setActIdx(i)} aria-label={activities[i]}
            style={{ width: i === actIdx ? "28px" : "6px", height: "2px", background: i === actIdx ? "var(--coral)" : "rgba(255,255,255,0.25)", border: "none", cursor: "pointer", borderRadius: "1px", transition: "all 0.4s ease", padding: 0 }}
          />
        ))}
      </div>

      {/* Scroll line */}
      <div style={{ position: "absolute", bottom: "40px", right: "48px", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 10, color: "rgba(255,255,255,0.3)", fontSize: "8px", letterSpacing: "0.25em", textTransform: "uppercase" }} className="desktop-only">
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)", animation: "scrollBar 2.5s ease infinite" }} />
        Défiler
      </div>

      <style>{`
        .hero-btn-primary:hover { background: var(--coral-dark) !important; transform: translateY(-2px); box-shadow: 0 12px 32px rgba(232,99,122,0.4); }
        .hero-btn-ghost:hover { border-color: rgba(255,255,255,0.5) !important; color: white !important; background: rgba(255,255,255,0.06) !important; }
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
