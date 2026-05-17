import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/youart/Navigation";
import Footer from "@/components/youart/Footer";
import ChatBot from "@/components/youart/ChatBot";
import MobileNav from "@/components/youart/MobileNav";

export const metadata: Metadata = {
  metadataBase: new URL("https://youartsquads.netlify.app"),
  title: {
    default: "You Art Lac Rose - Excursions Quad, Pirogue, Chameau | Sénégal",
    template: "%s | You Art Lac Rose"
  },
  description: "Excursions au Lac Rose du Sénégal : ballade en quad, pirogue, chameau, cheval. Note Google 4.8/5. Réservations : +221 77 386 53 45. Situé au Lac Rose, Sénégal.",
  keywords: ["lac rose sénégal", "excursion quad lac rose", "pirogue lac rose", "chameau sénégal", "tourisme dakar", "you art lac rose", "activités lac rose", "visite lac rose"],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: "You Art Lac Rose",
    title: "You Art Lac Rose - Excursions & Aventures au Lac Rose",
    description: "Vivez une expérience inoubliable au Lac Rose du Sénégal. Quad, pirogue, chameau, cheval. Note 4.8/5 sur Google. Réservez maintenant.",
    images: [{ url: "/images/ambiance/site-1.jpg", width: 1200, height: 630, alt: "You Art Lac Rose - Entrée du site" }],
  },
  twitter: { card: "summary_large_image", title: "You Art Lac Rose", description: "Excursions au Lac Rose : quad, pirogue, chameau, cheval. Note 4.8/5." },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://youartsquads.netlify.app" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navigation />
        <main style={{ paddingBottom: "0" }} className="main-content">{children}</main>
        <Footer />
        <ChatBot />
        <MobileNav />
      </body>
    </html>
  );
}
