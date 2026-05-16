import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, Phone, MapPin, Clock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "You Art Lac Rose - Excursions Quad, Pirogue, Chameau au Sénégal",
  description: "Découvrez You Art Lac Rose : excursions quad, pirogue, chameau, cheval au Lac Rose du Sénégal. Note Google 4.8⭐/5. Réservez votre aventure : +221 77 386 53 45.",
};

const activities = [
  { icon: "🏍️", title: "Ballade en Quad", desc: "Explorez les dunes et la plage à bord de nos quads puissants.", href: "/activites#quad", price: "À partir de 15 000 FCFA" },
  { icon: "🚣", title: "Pirogue sur le Lac Rose", desc: "Glissez sur les eaux roses du lac mythique du Sénégal.", href: "/activites#pirogue", price: "À partir de 10 000 FCFA" },
  { icon: "🐪", title: "Balade en Chameau", desc: "Vivez le désert africain sur le dos d'un chameau.", href: "/activites#chameau", price: "À partir de 10 000 FCFA" },
  { icon: "🐴", title: "Balade à Cheval", desc: "Galop sur la plage pour tous les niveaux.", href: "/activites#cheval", price: "À partir de 10 000 FCFA" },
];

const packs = [
  { name: "Pack Spécial 3 Activités", price: "25 000", desc: "Quad (1h) + Pirogue (30 min) + Chameau ou Cheval (15 min)", tag: "Populaire", highlight: true },
  { name: "Pack Aventure + Repas", price: "30 000", desc: "Session Quad + Balade Chameaux + Repas complet inclus", tag: "Complet" },
  { name: "Offre Couple (2 Pers.)", price: "25 000", desc: "2 pers. en Quad + Balade en Pirogue romantique", tag: "Romantique" },
  { name: "Duo Chameaux", price: "35 000", desc: "Pour 2 personnes · Option repas : 45 000 FCFA", tag: "Duo" },
];

const avis = [
  { nom: "Xarala You Bess Yii", note: 5, texte: "Vous êtes les meilleurs au Lac Rose. Je vous le conseille vraiment !", date: "il y a 2 mois" },
  { nom: "Abdourahmane DIAGNE", note: 5, texte: "Très sympa, site à visiter. You Art 👍🔥 Cuisine : 5 étoiles.", date: "il y a 2 mois" },
  { nom: "Fatimata Thiam", note: 5, texte: "Un endroit cool, à visiter. Cuisine : 5 étoiles.", date: "il y a 3 heures" },
];

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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        .act-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.1); border-color: var(--rose) !important; }
        .img-strip img { transition: transform 0.5s ease; }
        .img-strip div:hover img { transform: scale(1.06); }
        .hero-btn:hover { transform: translateY(-2px); }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: "600px", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/quad/quad-2.jpg" alt="Excursion quad au Lac Rose Sénégal" fill style={{ objectFit: "cover" }} priority quality={85} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,26,26,0.85) 50%, rgba(26,26,26,0.3))" }} />
        </div>
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "70px 24px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="#D4A017" color="#D4A017" />)}
            <span style={{ color: "rgba(255,255,255,0.9)", fontSize: "14px", marginLeft: "4px" }}>4.8/5 · 53 avis Google</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: "20px" }}>
            L'Aventure au<br /><span style={{ color: "#F5A0B0" }}>Lac Rose</span><br />vous attend
          </h1>
          <p style={{ fontSize: "clamp(15px, 2vw, 18px)", color: "rgba(255,255,255,0.8)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "36px" }}>
            Excursions quad, pirogue, chameau et cheval au cœur du Lac Rose — l'une des merveilles naturelles du Sénégal.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/reservation" className="btn-primary hero-btn">Réserver maintenant</Link>
            <Link href="/activites" className="btn-outline hero-btn" style={{ color: "white", borderColor: "rgba(255,255,255,0.6)" }}>Voir les activités</Link>
          </div>
          <div style={{ display: "flex", gap: "24px", marginTop: "48px", flexWrap: "wrap" }}>
            {[{ icon: <MapPin size={14} />, text: "Lac Rose, Sénégal" }, { icon: <Clock size={14} />, text: "Ouvert 9h–19h" }, { icon: <Phone size={14} />, text: "+221 77 386 53 45" }].map(({ icon, text }) => (
              <div key={text} style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.7)", fontSize: "13px" }}>{icon}<span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIVITÉS */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rose)" }}>Nos Activités</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: "8px" }}>Des expériences uniques</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {activities.map((act) => (
              <Link key={act.title} href={act.href} className="act-card" style={{ textDecoration: "none", background: "white", border: "1px solid #f0f0f0", borderRadius: "8px", padding: "28px", transition: "all 0.3s ease", display: "block" }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{act.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "#1A1A1A" }}>{act.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.6, marginBottom: "16px" }}>{act.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--rose)" }}>{act.price}</span>
                  <ChevronRight size={16} color="var(--rose)" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="img-strip" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", height: "260px", overflow: "hidden" }}>
        {["/images/pirogue/pirogue-1.jpg", "/images/quad/quad-5.jpg", "/images/cheval/cheval-1.jpg", "/images/ambiance/groupe-1.jpg"].map((src, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }}>
            <Image src={src} alt={`You Art Lac Rose ${i+1}`} fill style={{ objectFit: "cover" }} sizes="25vw" />
          </div>
        ))}
      </div>

      {/* PACKS */}
      <section style={{ padding: "80px 24px", background: "#FDE8ED" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rose)" }}>Nos Offres</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: "8px" }}>Packs & Tarifs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {packs.map((pack) => (
              <div key={pack.name} style={{ background: "white", borderRadius: "8px", padding: "28px", boxShadow: "0 4px 16px rgba(0,0,0,0.06)", border: pack.highlight ? "2px solid var(--rose)" : "1px solid #f0f0f0", position: "relative" }}>
                {pack.tag && <span style={{ position: "absolute", top: "-12px", left: "20px", background: "var(--rose)", color: "white", fontSize: "11px", fontWeight: 600, padding: "4px 12px", borderRadius: "20px" }}>{pack.tag}</span>}
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, marginBottom: "10px", marginTop: "8px" }}>{pack.name}</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.6, marginBottom: "20px" }}>{pack.desc}</p>
                <div style={{ fontSize: "30px", fontWeight: 700, color: "var(--rose)", marginBottom: "20px" }}>{pack.price} <span style={{ fontSize: "13px", color: "#9CA3AF", fontWeight: 400 }}>FCFA</span></div>
                <Link href="/reservation" className="btn-primary" style={{ display: "block", textAlign: "center", padding: "12px" }}>Réserver</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section style={{ padding: "80px 24px", background: "white" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--rose)" }}>Ils nous font confiance</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, marginTop: "8px" }}>Avis clients</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#D4A017" color="#D4A017" />)}
              <span style={{ fontSize: "24px", fontWeight: 700 }}>4.8</span>
              <span style={{ color: "#9CA3AF" }}>· 53 avis Google</span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
            {avis.map((a) => (
              <div key={a.nom} style={{ background: "#FAFAFA", border: "1px solid #f0f0f0", borderRadius: "8px", padding: "24px" }}>
                <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
                  {Array.from({ length: a.note }).map((_, i) => <Star key={i} size={14} fill="#D4A017" color="#D4A017" />)}
                </div>
                <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>"{a.texte}"</p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 600, fontSize: "13px" }}>{a.nom}</span>
                  <span style={{ fontSize: "12px", color: "#9CA3AF" }}>{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 24px", background: "var(--vert)", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 700, color: "white", marginBottom: "16px" }}>Prêt pour l'aventure ?</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px", lineHeight: 1.7, marginBottom: "32px" }}>Notre équipe vous accueille 7j/7 de 9h à 19h au Lac Rose.</p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/reservation" className="btn-primary">Réserver en ligne</Link>
            <a href="tel:+221773865345" className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.5)", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <Phone size={16} />Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
