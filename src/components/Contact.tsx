"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredBtn, setHoveredBtn] = useState(false);

  return (
    <section id="contact" style={{ background: "var(--cream-deep)", padding: "120px 0" }}>
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "100px" }} ref={ref}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}
            >
              <div style={{ width: "32px", height: "1px", background: "var(--forest-light)" }} />
              <span style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--forest-light)", fontFamily: "'DM Sans'" }}>
                Contact
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 4vw, 62px)", fontWeight: 300, color: "var(--forest)", lineHeight: 1.05, marginBottom: "32px" }}
            >
              Commençons<br />
              votre<br />
              <em style={{ color: "var(--forest-light)" }}>Escapade</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ fontFamily: "'DM Sans'", fontSize: "15px", lineHeight: 1.9, color: "var(--forest-mid)", marginBottom: "48px" }}
            >
              Notre équipe de conciergerie vous répond sous 24h pour composer
              votre expérience sur-mesure.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.8 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {[
                { icon: <Phone size={16} />, text: "+33 (0)1 42 00 12 34" },
                { icon: <Mail size={16} />, text: "bonjour@youartsquads.fr" },
                { icon: <MapPin size={16} />, text: "12 rue des Beaux-Arts, Paris 6e" },
              ].map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "16px", color: "var(--forest)", fontFamily: "'DM Sans'", fontSize: "14px" }}>
                  <div style={{ color: "var(--forest-light)" }}>{icon}</div>
                  {text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {[
              { label: "Nom complet", type: "text", placeholder: "Jean Dupont" },
              { label: "Email", type: "email", placeholder: "jean@example.com" },
            ].map(({ label, type, placeholder }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-mid)" }}>
                  {label}
                </label>
                <input
                  type={type}
                  placeholder={placeholder}
                  style={{
                    background: "transparent",
                    border: "none",
                    borderBottom: "1px solid rgba(28,58,46,0.25)",
                    padding: "12px 0",
                    fontFamily: "'DM Sans'",
                    fontSize: "15px",
                    color: "var(--forest)",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  onFocus={(e) => { e.target.style.borderBottomColor = "var(--forest)"; }}
                  onBlur={(e) => { e.target.style.borderBottomColor = "rgba(28,58,46,0.25)"; }}
                />
              </div>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-mid)" }}>
                Type d'expérience
              </label>
              <select
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(28,58,46,0.25)",
                  padding: "12px 0",
                  fontFamily: "'DM Sans'",
                  fontSize: "15px",
                  color: "var(--forest)",
                  outline: "none",
                  cursor: "pointer",
                }}
              >
                <option value="">Sélectionner...</option>
                <option>Excursion</option>
                <option>Restaurant</option>
                <option>Hébergement</option>
                <option>Séjour complet</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label style={{ fontFamily: "'DM Sans'", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--forest-mid)" }}>
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Décrivez vos envies..."
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid rgba(28,58,46,0.25)",
                  padding: "12px 0",
                  fontFamily: "'DM Sans'",
                  fontSize: "15px",
                  color: "var(--forest)",
                  outline: "none",
                  resize: "none",
                  lineHeight: 1.7,
                  transition: "border-color 0.3s",
                }}
                onFocus={(e) => { e.target.style.borderBottomColor = "var(--forest)"; }}
                onBlur={(e) => { e.target.style.borderBottomColor = "rgba(28,58,46,0.25)"; }}
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => setHoveredBtn(true)}
              onMouseLeave={() => setHoveredBtn(false)}
              style={{
                background: hoveredBtn ? "var(--gold)" : "var(--forest)",
                color: hoveredBtn ? "var(--forest-deep)" : "var(--cream)",
                border: "none",
                padding: "18px 40px",
                fontFamily: "'DM Sans'",
                fontSize: "12px",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                alignSelf: "flex-start",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                transform: hoveredBtn ? "translateY(-2px)" : "translateY(0)",
              }}
            >
              Envoyer ma demande
              <Send size={14} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
