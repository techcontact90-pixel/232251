import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Phone, ArrowRight, MapPin, Clock } from "lucide-react";
import HomeHero from "@/components/youart/HomeHero";

export const metadata: Metadata = {
  title: "You Art Lac Rose - Excursions Quad, Pirogue, Chameau au Sénégal",
  description: "Découvrez You Art Lac Rose : excursions quad, pirogue, chameau, cheval au Lac Rose du Sénégal. Note Google 4.8⭐/5. Réservez : +221 77 386 53 45.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "Restaurant"],
  name: "You Art Lac Rose",
  description: "Excursions quad, pirogue, chameau, cheval au Lac Rose du Sénégal",
  telephone: "+221773865345",
  address: { "@type": "PostalAddress", addressLocality: "Lac Rose", addressCountry: "SN" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "53" },
  openingHours: "Mo-Su 09:00-19:00",
};

const activities = [
  { titre: "Ballade en Quad", sub: "Adrénaline & dunes", image: "/images/quad/quad-2.jpg", href: "/activites#quad" },
  { titre: "Pirogue Lac Rose", sub: "Eaux roses mythiques", image: "/images/pirogue/pirogue-3.jpg", href: "/activites#pirogue" },
  { titre: "Balade en Chameau", sub: "Désert africain", image: "/images/ambiance/banner.jpg", href: "/activites#chameau" },
  { titre: "Balade à Cheval", sub: "Galop sur la plage", image: "/images/cheval/cheval-1.jpg", href: "/activites#cheval" },
];

const packs = [
  { name: "Pack 3 Activités", price: "25 000", desc: "Quad (1h) + Pirogue (30 min) + Chameau ou Cheval", tag: null },
  { name: "Pack Aventure Complet", price: "30 000", desc: "Quad + Balades + Repas traditionnel sénégalais inclus", tag: "Populaire", featured: true },
  { name: "Offre Duo Romantique", price: "25 000", desc: "Pour 2 personnes — Quad + Pirogue au coucher du soleil", tag: "Couple" },
];

const avis = [
  { nom: "Xarala You Bess Yii", note: 5, texte: "Vous êtes les meilleurs au Lac Rose. Je vous le conseille vraiment !" },
  { nom: "Abdourahmane DIAGNE", note: 5, texte: "Très sympa, site à visiter. You Art — Cuisine : 5 étoiles absolument." },
  { nom: "Fatimata Thiam", note: 5, texte: "Un endroit cool, à visiter absolument. Service impeccable, cadre magnifique." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <HomeHero />

      {/* ── STATS BAND ── */}
      <div style={{ background: "#0C0C0C", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "32px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "24px" }}>
          {[
            { val: "4.8", unit: "★", label: "Note Google" },
            { val: "53", unit: "+", label: "Avis clients" },
            { val: "4", unit: "", label: "Activités exclusives" },
            { val: "7j/7", unit: "", label: "9h – 19h" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "center", gap: "3px" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, background: "linear-gradient(135deg, #E8637A, #C9990A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1 }}>{s.val}</span>
                {s.unit && <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 28px)", fontWeight: 400, color: "var(--coral)", lineHeight: 1 }}>{s.unit}</span>}
              </div>
              <div style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginTop: "6px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACTIVITIES STRIP ── */}
      <section style={{ display: "flex", height: "clamp(340px, 48vw, 560px)", background: "#050505" }}>
        {activities.map((act) => (
          <Link key={act.titre} href={act.href} className="act-panel" style={{ position: "relative", flex: 1, overflow: "hidden", textDecoration: "none", display: "block" }}>
            <Image src={act.image} alt={act.titre} fill style={{ objectFit: "cover", transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)", filter: "brightness(0.7) saturate(1.1)" }} sizes="25vw" />
            <div className="act-panel-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.3) 55%, transparent 100%)", transition: "background 0.5s" }} />
            {/* Side separator */}
            <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "100%", background: "rgba(255,255,255,0.06)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(18px,2.8vw,36px)" }}>
              <div style={{ color: "var(--coral)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px", opacity: 0.8 }}>{act.sub}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 2.4vw, 28px)", fontWeight: 600, color: "white", lineHeight: 1.1 }}>{act.titre}</div>
              <div className="act-cta" style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "14px", color: "rgba(255,255,255,0.4)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", transition: "color 0.3s" }}>
                Découvrir <ArrowRight size={12} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ── EDITORIAL ── */}
      <section style={{ background: "#080808", padding: "120px 40px" }}>
        <div className="editorial-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--coral)" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--coral)" }}>Notre histoire</span>
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 5.5vw, 72px)", fontWeight: 300, lineHeight: 0.95, margin: "0 0 32px", color: "white", letterSpacing: "-0.01em" }}>
              Lac Rose,<br /><strong style={{ fontWeight: 700, background: "linear-gradient(135deg, #E8637A, #F5A0B0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>merveille du Sénégal</strong>
            </h2>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.95, marginBottom: "18px" }}>
              Le Lac Retba — connu sous le nom de Lac Rose — est l'un des sites naturels les plus fascinants d'Afrique de l'Ouest. Ses eaux teintées de rose, phénomène unique dû à une algue endémique, offrent un décor de rêve.
            </p>
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.95, marginBottom: "44px" }}>
              You Art Lac Rose vous propose de vivre ce lieu d'exception avec intensité : à bord d'un quad, d'une pirogue colorée, sur le dos d'un chameau ou au galop sur la plage.
            </p>
            <Link href="/activites" style={{ background: "transparent", color: "white", padding: "16px 36px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "10px", transition: "all 0.3s" }} className="btn-outline-dark">
              Explorer les activités <ArrowRight size={13} />
            </Link>
          </div>
          <div className="editorial-mosaic" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", height: "520px" }}>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", gridRow: "span 2", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image src="/images/pirogue/pirogue-1.jpg" alt="Pirogue Lac Rose" fill style={{ objectFit: "cover", objectPosition: "center 45%" }} sizes="300px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.5), transparent)" }} />
            </div>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image src="/images/quad/quad-5.jpg" alt="Quad dunes" fill style={{ objectFit: "cover", objectPosition: "center 35%" }} sizes="200px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.4), transparent)" }} />
            </div>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
              <Image src="/images/cheval/cheval-2.jpg" alt="Cheval plage" fill style={{ objectFit: "cover", objectPosition: "center 20%" }} sizes="200px" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,5,5,0.4), transparent)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section style={{ padding: "120px 40px", background: "#050505" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--coral)" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--coral)" }}>Nos offres</span>
              <div style={{ width: "32px", height: "1px", background: "var(--coral)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 300, color: "white", margin: 0, letterSpacing: "-0.01em" }}>
              Packs <em style={{ fontStyle: "italic" }}>&</em> <strong style={{ fontWeight: 700 }}>Tarifs</strong>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "2px" }} className="packs-grid">
            {packs.map((pack) => (
              <div key={pack.name} className={pack.featured ? "pack-card pack-featured" : "pack-card"}
                style={{ position: "relative", padding: "48px 36px", background: pack.featured ? "rgba(232,99,122,0.07)" : "rgba(255,255,255,0.02)", border: pack.featured ? "1px solid rgba(232,99,122,0.35)" : "1px solid rgba(255,255,255,0.06)", transition: "all 0.4s" }}>
                {pack.tag && (
                  <div style={{ position: "absolute", top: "24px", right: "24px", background: pack.featured ? "var(--coral)" : "rgba(255,255,255,0.1)", color: "white", fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", padding: "5px 12px", borderRadius: "100px" }}>{pack.tag}</div>
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 600, marginBottom: "14px", color: "white" }}>{pack.name}</h3>
                <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)", lineHeight: 1.75, marginBottom: "32px" }}>{pack.desc}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "36px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "52px", fontWeight: 700, lineHeight: 1, background: pack.featured ? "linear-gradient(135deg, #E8637A, #C9990A)" : "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{pack.price}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>FCFA / pers.</span>
                </div>
                <Link href="/reservation" style={{ display: "block", textAlign: "center", padding: "15px 24px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", background: pack.featured ? "var(--coral)" : "transparent", color: "white", border: pack.featured ? "none" : "1px solid rgba(255,255,255,0.2)", transition: "all 0.3s" }}
                  className={pack.featured ? "pack-btn-primary" : "pack-btn-ghost"}>
                  Réserver ce pack
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "280px" }}>
        {[
          "/images/pirogue/pirogue-6.jpg",
          "/images/quad/quad-4.jpg",
          "/images/cheval/cheval-2.jpg",
          "/images/ambiance/site-3.jpg",
          "/images/quad/quad-7.jpg",
        ].map((src, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }} className="strip-item">
            <Image src={src} alt={`You Art Lac Rose ${i+1}`} fill style={{ objectFit: "cover", filter: "brightness(0.75) saturate(1.15)", transition: "transform 0.7s ease, filter 0.4s ease" }} sizes="20vw" />
            <div style={{ position: "absolute", inset: 0, background: "rgba(5,5,5,0.25)", transition: "opacity 0.3s" }} className="strip-overlay" />
          </div>
        ))}
      </div>

      {/* ── REVIEWS ── */}
      <section style={{ background: "#080808", padding: "120px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "72px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "18px" }}>
              <div style={{ width: "32px", height: "1px", background: "var(--coral)" }} />
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--coral)" }}>Témoignages</span>
              <div style={{ width: "32px", height: "1px", background: "var(--coral)" }} />
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5.5vw, 68px)", fontWeight: 300, color: "white", margin: "0 0 20px", letterSpacing: "-0.01em" }}>
              Ce qu&apos;ils <strong style={{ fontWeight: 700 }}>disent de nous</strong>
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#C9990A" color="#C9990A" />)}
              <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", marginLeft: "8px" }}>4.8 · 53 avis Google</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "2px" }}>
            {avis.map((a) => (
              <div key={a.nom} className="review-card"
                style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", padding: "44px 36px", transition: "border-color 0.3s, background 0.3s" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "72px", lineHeight: 0.7, marginBottom: "20px", background: "linear-gradient(135deg, rgba(232,99,122,0.6), transparent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>&ldquo;</div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.85, marginBottom: "28px", fontStyle: "italic" }}>{a.texte}</p>
                <div style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
                  {Array.from({ length: a.note }).map((_, i) => <Star key={i} size={11} fill="#C9990A" color="#C9990A" />)}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>{a.nom}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", marginTop: "3px", letterSpacing: "0.08em" }}>Via Google Maps</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: "relative", height: "520px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <Image src="/images/ambiance/banner-2.jpg" alt="Lac Rose Sénégal" fill style={{ objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.4) saturate(1.2)" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(232,99,122,0.12), transparent 70%), linear-gradient(to bottom, rgba(5,5,5,0.6), rgba(5,5,5,0.6))" }} />
        {/* Decorative glow */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse, rgba(232,99,122,0.15), transparent 70%)", filter: "blur(40px)", pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "700px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{ width: "32px", height: "1px", background: "rgba(232,99,122,0.6)" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(232,99,122,0.8)" }}>Réservez dès maintenant</span>
            <div style={{ width: "32px", height: "1px", background: "rgba(232,99,122,0.6)" }} />
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 300, color: "white", margin: "0 0 20px", letterSpacing: "-0.02em", lineHeight: 0.95 }}>
            Votre aventure<br /><strong style={{ fontWeight: 700 }}>commence ici</strong>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.8, marginBottom: "48px" }}>Notre équipe vous accueille 7j/7 de 9h à 19h au bord du Lac Rose.</p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reservation" style={{ background: "var(--coral)", color: "white", padding: "17px 42px", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s" }} className="cta-primary">
              Réserver en ligne
            </Link>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer"
              style={{ background: "transparent", color: "rgba(255,255,255,0.8)", padding: "17px 36px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "2px", display: "inline-flex", alignItems: "center", gap: "8px", transition: "all 0.3s", backdropFilter: "blur(8px)" }} className="cta-ghost">
              <Phone size={13} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <div style={{ background: "#0C0C0C", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "22px 40px", display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap" }}>
        {[
          { icon: <MapPin size={13} />, text: "Lac Rose, Sénégal" },
          { icon: <Clock size={13} />, text: "Ouvert 9h – 19h, 7j/7" },
          { icon: <Phone size={13} />, text: "+221 77 386 53 45" },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.3)", fontSize: "12px", letterSpacing: "0.04em" }}>
            <span style={{ color: "var(--coral)", opacity: 0.7 }}>{icon}</span>{text}
          </div>
        ))}
      </div>

      <style>{`
        .act-panel:hover img { transform: scale(1.1) !important; filter: brightness(0.85) saturate(1.2) !important; }
        .act-panel:hover .act-cta { color: var(--coral) !important; }
        .strip-item:hover img { transform: scale(1.08) !important; filter: brightness(0.9) saturate(1.3) !important; }
        .strip-item:hover .strip-overlay { opacity: 0 !important; }
        .btn-outline-dark:hover { background: rgba(255,255,255,0.06) !important; border-color: rgba(255,255,255,0.45) !important; }
        .pack-card:hover { background: rgba(255,255,255,0.04) !important; transform: translateY(-4px); }
        .pack-featured:hover { background: rgba(232,99,122,0.1) !important; }
        .pack-btn-primary:hover { background: var(--coral-dark) !important; box-shadow: 0 8px 28px rgba(232,99,122,0.35); }
        .pack-btn-ghost:hover { background: rgba(255,255,255,0.06) !important; border-color: rgba(255,255,255,0.35) !important; }
        .review-card:hover { background: rgba(255,255,255,0.05) !important; border-color: rgba(232,99,122,0.2) !important; }
        .cta-primary:hover { background: var(--coral-dark) !important; box-shadow: 0 12px 36px rgba(232,99,122,0.4); transform: translateY(-2px); }
        .cta-ghost:hover { border-color: rgba(255,255,255,0.45) !important; color: white !important; }

        @media (max-width: 900px) {
          .editorial-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .editorial-mosaic { height: 300px !important; }
        }
        @media (max-width: 768px) {
          .act-panel { flex: none !important; width: 50% !important; }
          section[style*="clamp(340px"] { flex-wrap: wrap !important; height: auto !important; }
          .packs-grid { grid-template-columns: 1fr !important; gap: 2px !important; }
        }
        @media (max-width: 480px) {
          .act-panel { width: 100% !important; height: 220px !important; }
          div[style*="repeat(5, 1fr)"] { grid-template-columns: repeat(3, 1fr) !important; height: 160px !important; }
          .editorial-mosaic { display: block !important; height: 240px !important; }
          .editorial-mosaic > div:not(:first-child) { display: none !important; }
        }
      `}</style>
    </>
  );
}
