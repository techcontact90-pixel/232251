import type { Metadata } from "next";
import GalerieClient from "@/components/youart/GalerieClient";

export const metadata: Metadata = {
  title: "Galerie Photos - Quad, Pirogue, Lac Rose, Cheval",
  description: "Galerie photos de You Art Lac Rose : excursions quad, pirogues colorées sur le Lac Rose, balades à cheval et chameau au Sénégal.",
};

export default function GaleriePage() {
  return <GalerieClient />;
}
