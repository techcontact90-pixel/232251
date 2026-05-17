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
      <div style={{ background: "var(--forest)", padding: "28px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          {[
            { val: "4.8 ★", label: "Note Google" },
            { val: "53", label: "Avis clients" },
            { val: "4", label: "Activités" },
            { val: "7j/7", label: "9h – 19h" },
          ].map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: "#F5A0B0", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginTop: "4px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ACTIVITIES STRIP (full-width photo panels) ── */}
      <section style={{ display: "flex", height: "clamp(320px, 45vw, 520px)" }}>
        {activities.map((act) => (
          <Link key={act.titre} href={act.href} className="act-panel" style={{ position: "relative", flex: 1, overflow: "hidden", textDecoration: "none", display: "block" }}>
            <Image src={act.image} alt={act.titre} fill style={{ objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }} sizes="25vw" />
            <div className="act-panel-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,61,36,0.9) 0%, rgba(14,61,36,0.3) 50%, transparent 100%)", transition: "background 0.4s" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(16px,2.5vw,32px)" }}>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>{act.sub}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 2.2vw, 26px)", fontWeight: 600, color: "white", lineHeight: 1.1 }}>{act.titre}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "12px", color: "#F5A0B0", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em" }}>
                Découvrir <ArrowRight size={13} />
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* ── INTRO EDITORIAL ── */}
      <section style={{ background: "var(--sand)", padding: "80px 24px" }}>
        <div className="editorial-grid" style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--coral)" }}>Notre histoire</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.05, margin: "12px 0 28px", fontStyle: "italic" }}>
              Lac Rose,<br /><strong style={{ fontStyle: "normal", fontWeight: 700 }}>merveille du Sénégal</strong>
            </h2>
            <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, marginBottom: "16px" }}>
              Le Lac Retba — connu sous le nom de Lac Rose — est l'un des sites naturels les plus fascinants d'Afrique de l'Ouest. Ses eaux teintées de rose, phénomène unique dû à une algue endémique, offrent un décor de rêve pour des aventures inoubliables.
            </p>
            <p style={{ fontSize: "16px", color: "#4A5568", lineHeight: 1.9, marginBottom: "36px" }}>
              You Art Lac Rose vous propose de vivre ce lieu d'exception avec intensité : à bord d'un quad, d'une pirogue colorée, sur le dos d'un chameau ou au galop sur la plage.
            </p>
            <Link href="/activites" className="btn-forest">Explorer les activités</Link>
          </div>
          <div className="editorial-mosaic" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", height: "480px" }}>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden", gridRow: "span 2" }}>
              <Image src="/images/pirogue/pirogue-1.jpg" alt="Pirogue Lac Rose" fill style={{ objectFit: "cover" }} sizes="300px" />
            </div>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/quad/quad-5.jpg" alt="Quad dunes" fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
            <div style={{ position: "relative", borderRadius: "4px", overflow: "hidden" }}>
              <Image src="/images/ambiance/groupe-1.jpg" alt="Groupe Lac Rose" fill style={{ objectFit: "cover" }} sizes="200px" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKS ── */}
      <section style={{ padding: "100px 40px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--coral)" }}>Nos offres</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400, marginTop: "10px", fontStyle: "italic" }}>Packs <strong style={{ fontStyle: "normal", fontWeight: 700 }}>&amp; Tarifs</strong></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {packs.map((pack) => (
              <div key={pack.name} style={{ position: "relative", border: pack.featured ? "2px solid var(--coral)" : "1px solid #E5E7EB", borderRadius: "6px", padding: "40px 32px", background: pack.featured ? "#fff8f9" : "white", boxShadow: pack.featured ? "0 20px 48px rgba(232,99,122,0.12)" : "none" }}>
                {pack.tag && (
                  <div style={{ position: "absolute", top: "-14px", left: "28px", background: pack.featured ? "var(--coral)" : "var(--forest)", color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", padding: "5px 14px", borderRadius: "100px" }}>{pack.tag}</div>
                )}
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, marginBottom: "12px", marginTop: "8px" }}>{pack.name}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "28px" }}>{pack.desc}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "6px", marginBottom: "28px" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "42px", fontWeight: 700, color: pack.featured ? "var(--coral)" : "var(--ink)", lineHeight: 1 }}>{pack.price}</span>
                  <span style={{ fontSize: "13px", color: "var(--muted)" }}>FCFA / pers.</span>
                </div>
                <Link href="/reservation" className={pack.featured ? "btn-coral" : "btn-primary"} style={{ display: "block", textAlign: "center" }}>Réserver ce pack</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY STRIP ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "260px" }}>
        {[
          "/images/pirogue/pirogue-6.jpg",
          "/images/quad/quad-4.jpg",
          "/images/cheval/cheval-2.jpg",
          "/images/ambiance/site-3.jpg",
          "/images/quad/quad-7.jpg",
        ].map((src, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }} className="strip-item">
            <Image src={src} alt={`You Art Lac Rose ${i+1}`} fill style={{ objectFit: "cover", transition: "transform 0.6s ease" }} sizes="20vw" />
          </div>
        ))}
      </div>

      {/* ── REVIEWS ── */}
      <section style={{ background: "var(--forest)", padding: "100px 40px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.8)" }}>Témoignages</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 400, color: "white", marginTop: "10px", fontStyle: "italic" }}>
              Ce qu&apos;ils <strong style={{ fontStyle: "normal", fontWeight: 700 }}>disent de nous</strong>
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", marginTop: "14px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="#C9990A" color="#C9990A" />)}
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginLeft: "6px" }}>4.8 · 53 avis Google</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {avis.map((a) => (
              <div key={a.nom} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "36px 28px", backdropFilter: "blur(8px)" }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "56px", color: "var(--coral)", lineHeight: 0.8, marginBottom: "16px", opacity: 0.6 }}>&ldquo;</div>
                <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: "24px", fontStyle: "italic" }}>{a.texte}</p>
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {Array.from({ length: a.note }).map((_, i) => <Star key={i} size={12} fill="#C9990A" color="#C9990A" />)}
                </div>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "white" }}>{a.nom}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "2px" }}>Via Google Maps</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ position: "relative", height: "480px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-2.jpg" alt="Lac Rose Sénégal" fill style={{ objectFit: "cover" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0.78)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "680px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.8)" }}>Réservez dès maintenant</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(34px, 5.5vw, 68px)", fontWeight: 300, color: "white", margin: "12px 0 20px", fontStyle: "italic", lineHeight: 1.05 }}>
            Votre aventure<br /><strong style={{ fontStyle: "normal", fontWeight: 700 }}>commence ici</strong>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "15px", lineHeight: 1.7, marginBottom: "40px" }}>Notre équipe vous accueille 7j/7 de 9h à 19h au bord du Lac Rose.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reservation" className="btn-coral">Réserver en ligne</Link>
            <a href="https://wa.me/221773865345" target="_blank" rel="noopener noreferrer" className="btn-ghost-white" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Phone size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── INFO BAR ── */}
      <div style={{ background: "var(--ink)", padding: "20px 40px", display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>
        {[
          { icon: <MapPin size={14} />, text: "Lac Rose, Sénégal" },
          { icon: <Clock size={14} />, text: "Ouvert 9h – 19h, 7j/7" },
          { icon: <Phone size={14} />, text: "+221 77 386 53 45" },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.5)", fontSize: "13px" }}>
            <span style={{ color: "var(--coral)" }}>{icon}</span>{text}
          </div>
        ))}
      </div>

      <style>{`
        .act-panel:hover img { transform: scale(1.08) !important; }
        .act-panel:hover .act-panel-overlay { background: linear-gradient(to top, rgba(14,61,36,0.75) 0%, rgba(14,61,36,0.2) 50%, transparent 100%) !important; }
        .strip-item:hover img { transform: scale(1.07) !important; }

        @media (max-width: 900px) {
          .editorial-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .editorial-mosaic { height: 280px !important; }
        }
        @media (max-width: 768px) {
          .act-panel { flex: none !important; width: 50% !important; }
          section[style*="clamp(320px"] { flex-wrap: wrap !important; height: auto !important; }
        }
        @media (max-width: 480px) {
          .act-panel { width: 100% !important; height: 220px !important; }
          div[style*="repeat(5, 1fr)"] { grid-template-columns: repeat(3, 1fr) !important; height: 160px !important; }
          .editorial-mosaic { display: block !important; height: 220px !important; }
          .editorial-mosaic > div:not(:first-child) { display: none !important; }
          div[style*="repeat(auto-fit, minmax(280px"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
