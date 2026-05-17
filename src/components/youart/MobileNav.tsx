"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, CalendarCheck, Images, UtensilsCrossed } from "lucide-react";

const tabs = [
  { href: "/",           label: "Accueil",     icon: Home },
  { href: "/activites",  label: "Activités",   icon: Compass },
  { href: "/reservation",label: "Réserver",    icon: CalendarCheck },
  { href: "/galerie",    label: "Galerie",     icon: Images },
  { href: "/restaurant", label: "Restaurant",  icon: UtensilsCrossed },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: "blur(16px)",
      borderTop: "1px solid rgba(0,0,0,0.08)",
      display: "flex",
      height: "64px",
      paddingBottom: "env(safe-area-inset-bottom, 0px)",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.08)",
    }} className="mobile-bottom-nav">
      {tabs.map(({ href, label, icon: Icon }) => {
        const active = pathname === href;
        return (
          <Link key={href} href={href} style={{
            flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "3px",
            textDecoration: "none", padding: "8px 4px", position: "relative",
            color: active ? "var(--coral)" : "#9CA3AF",
            transition: "color 0.2s",
          }}>
            {active && (
              <span style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "24px", height: "2px", background: "var(--coral)", borderRadius: "0 0 2px 2px" }} />
            )}
            <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
            <span style={{ fontSize: "9px", fontWeight: active ? 700 : 500, letterSpacing: "0.04em", textTransform: "uppercase", lineHeight: 1 }}>{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
