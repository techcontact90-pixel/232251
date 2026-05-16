import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YouArtSquads — Loisirs & Escapades de Prestige",
  description: "Excursions exclusives, restaurants gastronomiques et hébergements d'exception.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="grain-overlay antialiased">{children}</body>
    </html>
  );
}
