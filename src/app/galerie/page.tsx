import type { Metadata } from "next";
import Image from "next/image";
import GalerieClient from "@/components/youart/GalerieClient";

export const metadata: Metadata = {
  title: "Galerie Photos - Quad, Pirogue, Lac Rose, Cheval",
  description: "Galerie photos de You Art Lac Rose : quad sur les dunes, pirogue sur le Lac Rose, cheval et chameau au Sénégal.",
};

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: "relative", paddingTop: "72px", height: "340px", overflow: "hidden" }}>
        <Image src="/images/ambiance/site-4.jpg" alt="Galerie You Art Lac Rose" fill style={{ objectFit: "cover" }} priority sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "rgba(14,61,36,0.75)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(245,160,176,0.85)", marginBottom: "16px", display: "block" }}>Lac Rose, Sénégal</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(40px, 7vw, 84px)", fontWeight: 300, color: "white", fontStyle: "italic", lineHeight: 0.95 }}>
            Notre <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Galerie</strong>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", marginTop: "20px" }}>
            Quad · Pirogue · Chameau · Cheval — en images
          </p>
        </div>
      </div>

      <GalerieClient />
    </>
  );
}
