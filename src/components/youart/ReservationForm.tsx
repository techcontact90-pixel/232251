"use client";
import { useState } from "react";
import { Send, CheckCircle, User, Phone, Mail, Calendar, Users, MessageSquare, Zap } from "lucide-react";

const ACTIVITIES = [
  "Ballade en Quad",
  "Pirogue Lac Rose",
  "Balade en Chameau",
  "Balade à Cheval",
  "Pack 3 Activités (25 000 FCFA)",
  "Pack Aventure Complet (30 000 FCFA)",
  "Offre Duo Romantique (25 000 FCFA)",
];

type Field = { label: string; icon: React.ReactNode; name: string; type?: string; placeholder?: string; required?: boolean; options?: string[] };

export default function ReservationForm() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", activity: "", people: "2", date: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const d = form;
    const msg = [
      `Bonjour You Art Lac Rose !`,
      ``,
      `*Réservation via le site web*`,
      ``,
      `Nom : ${d.name}`,
      `Téléphone : ${d.phone}`,
      d.email ? `Email : ${d.email}` : null,
      `Activité : ${d.activity}`,
      `Personnes : ${d.people}`,
      `Date : ${d.date}`,
      d.message ? `Message : ${d.message}` : null,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/221773865345?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  if (sent) return (
    <div style={{ textAlign: "center", padding: "64px 24px" }}>
      <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #25D366, #128C7E)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px", boxShadow: "0 12px 40px rgba(37,211,102,0.3)" }}>
        <CheckCircle size={40} color="white" />
      </div>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 700, marginBottom: "12px" }}>Demande envoyée !</h3>
      <p style={{ color: "var(--muted)", fontSize: "15px", lineHeight: 1.7, maxWidth: "360px", margin: "0 auto 32px" }}>
        Votre demande a été transmise sur WhatsApp. Notre équipe vous contacte sous 2 heures maximum.
      </p>
      <button onClick={() => setSent(false)} style={{ background: "none", border: "1.5px solid #E5E7EB", padding: "11px 28px", borderRadius: "4px", cursor: "pointer", fontSize: "13px", color: "var(--muted)", fontFamily: "inherit", fontWeight: 500, transition: "border-color 0.2s" }}>
        Nouvelle demande
      </button>
    </div>
  );

  const inputStyle = (name: string) => ({
    width: "100%", padding: "14px 16px 14px 46px",
    border: `1.5px solid ${focused === name ? "var(--coral)" : "#E5E7EB"}`,
    borderRadius: "6px", fontSize: "14px", fontFamily: "inherit",
    outline: "none", transition: "border-color 0.25s, box-shadow 0.25s",
    boxShadow: focused === name ? "0 0 0 3px rgba(232,99,122,0.1)" : "none",
    background: "white",
  });

  const fieldWrap = (icon: React.ReactNode, children: React.ReactNode) => (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: focused ? "var(--coral)" : "var(--muted)", zIndex: 1, pointerEvents: "none", display: "flex" }}>
        {icon}
      </span>
      {children}
    </div>
  );

  return (
    <form onSubmit={submit}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
        {/* Name */}
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Prénom &amp; Nom *</label>
          {fieldWrap(<User size={15} />,
            <input name="name" required value={form.name} onChange={change} placeholder="Jean Dupont"
              style={inputStyle("name")}
              onFocus={() => setFocused("name")} onBlur={() => setFocused("")}
            />
          )}
        </div>
        {/* Phone */}
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>WhatsApp / Téléphone *</label>
          {fieldWrap(<Phone size={15} />,
            <input name="phone" required type="tel" value={form.phone} onChange={change} placeholder="+221 77 000 00 00"
              style={inputStyle("phone")}
              onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
            />
          )}
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Email (optionnel)</label>
        {fieldWrap(<Mail size={15} />,
          <input name="email" type="email" value={form.email} onChange={change} placeholder="votre@email.com"
            style={inputStyle("email")}
            onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
          />
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "16px", marginBottom: "16px" }} className="form-row">
        {/* Activity */}
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Activité souhaitée *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)", display: "flex", pointerEvents: "none", zIndex: 1 }}><Zap size={15} /></span>
            <select name="activity" required value={form.activity} onChange={change}
              style={{ ...inputStyle("activity"), appearance: "none", cursor: "pointer" }}
              onFocus={() => setFocused("activity")} onBlur={() => setFocused("")}
            >
              <option value="">Choisir...</option>
              {ACTIVITIES.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>
        {/* People */}
        <div>
          <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Personnes *</label>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--muted)", display: "flex", pointerEvents: "none", zIndex: 1 }}><Users size={15} /></span>
            <select name="people" required value={form.people} onChange={change}
              style={{ ...inputStyle("people"), appearance: "none", cursor: "pointer" }}
              onFocus={() => setFocused("people")} onBlur={() => setFocused("")}
            >
              {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} pers.</option>)}
              <option value="9+">9+ pers.</option>
            </select>
          </div>
        </div>
      </div>

      {/* Date */}
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Date souhaitée *</label>
        {fieldWrap(<Calendar size={15} />,
          <input name="date" required type="date" value={form.date} onChange={change}
            min={new Date().toISOString().split("T")[0]}
            style={inputStyle("date")}
            onFocus={() => setFocused("date")} onBlur={() => setFocused("")}
          />
        )}
      </div>

      {/* Message */}
      <div style={{ marginBottom: "28px" }}>
        <label style={{ display: "block", fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: "8px" }}>Message (optionnel)</label>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "14px", top: "16px", color: "var(--muted)", display: "flex", pointerEvents: "none" }}><MessageSquare size={15} /></span>
          <textarea name="message" value={form.message} onChange={change}
            placeholder="Questions spéciales, demandes particulières..."
            rows={3}
            style={{ ...inputStyle("message"), padding: "14px 16px 14px 46px", resize: "vertical" }}
            onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
          />
        </div>
      </div>

      <button type="submit" className="btn-coral" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", padding: "17px 24px", fontSize: "13px", borderRadius: "6px" }}>
        <Send size={16} />
        Envoyer ma réservation sur WhatsApp
      </button>
      <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "14px", lineHeight: 1.6 }}>
        Votre message est transmis directement à notre équipe. Réponse garantie sous 2 heures — paiement sur place uniquement.
      </p>

      <style>{`
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </form>
  );
}
