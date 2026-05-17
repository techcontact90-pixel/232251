"use client";
import { useState, useRef, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string; options?: string[] };
type Step = "welcome" | "name" | "activity" | "people" | "date" | "extra" | "done";

const WA_ICON = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 1C6.48 1 2 5.48 2 11c0 1.78.47 3.45 1.28 4.9L2 21l5.3-1.38C8.65 20.43 10.27 21 12 21c5.52 0 10-4.48 10-10S17.52 1 12 1z"/>
  </svg>
);

const ACTIVITIES = ["Ballade en Quad", "Pirogue Lac Rose", "Balade en Chameau", "Balade à Cheval", "Pack 3 Activités", "Pack Aventure Complet"];
const PEOPLE_OPTS = ["1 personne", "2 personnes", "3 personnes", "4 personnes", "5+ personnes"];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [msgs, setMsgs] = useState<Msg[]>([{
    from: "bot",
    text: "Bonjour ! Je suis votre assistant You Art Lac Rose. Comment puis-je vous aider ?",
    options: ["Réserver une activité", "Voir les tarifs", "Appeler maintenant"],
  }]);
  const [input, setInput] = useState("");
  const [data, setData] = useState({ name: "", activity: "", people: "", date: "", extra: "" });
  const [unread, setUnread] = useState(1);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const bot = (text: string, options?: string[]) => {
    setTimeout(() => setMsgs(p => [...p, { from: "bot", text, options }]), 500);
  };

  const user = (text: string) => setMsgs(p => [...p, { from: "user", text }]);

  const handleOption = (opt: string) => {
    user(opt);

    if (opt === "Appeler maintenant") { window.location.href = "tel:+221773865345"; return; }

    if (opt === "Voir les tarifs") {
      bot("Voici nos tarifs :\n\n· Quad : 15 000 FCFA\n· Pirogue : 10 000 FCFA\n· Chameau : 10 000 FCFA\n· Cheval : 10 000 FCFA\n· Pack 3 Activités : 25 000 FCFA\n· Pack Complet + Repas : 30 000 FCFA", ["Réserver maintenant", "Retour"]);
      return;
    }

    if (opt === "Retour") { bot("Comment puis-je vous aider ?", ["Réserver une activité", "Voir les tarifs", "Appeler maintenant"]); return; }

    if (opt === "Réserver une activité" || opt === "Réserver maintenant") {
      setStep("name");
      bot("Super ! Pour commencer, quel est votre prénom ?");
      return;
    }

    if (ACTIVITIES.includes(opt)) {
      setData(d => ({ ...d, activity: opt }));
      setStep("people");
      bot("Pour combien de personnes ?", PEOPLE_OPTS);
      return;
    }

    if (PEOPLE_OPTS.includes(opt)) {
      setData(d => ({ ...d, people: opt }));
      setStep("date");
      bot("Quelle date vous convient ? (Ex : 25 juin 2025)");
      return;
    }

    if (opt === "Non, envoyer ma demande") {
      finalize({ ...data, extra: "" });
      return;
    }
  };

  const handleInput = (e?: React.FormEvent) => {
    e?.preventDefault();
    const val = input.trim();
    if (!val) return;
    setInput("");
    user(val);

    if (step === "name") {
      setData(d => ({ ...d, name: val }));
      setStep("activity");
      bot(`Bonjour ${val} ! Quelle activité vous intéresse ?`, ACTIVITIES);
      return;
    }
    if (step === "date") {
      setData(d => ({ ...d, date: val }));
      setStep("extra");
      bot("Avez-vous des questions ou demandes particulières ?", ["Non, envoyer ma demande"]);
      return;
    }
    if (step === "extra") {
      finalize({ ...data, extra: val });
      return;
    }
  };

  const finalize = (d: typeof data) => {
    setStep("done");
    const msg = `Bonjour You Art Lac Rose !\n\n*Demande de réservation — Site Web*\n\nNom : ${d.name}\nActivité : ${d.activity}\nPersonnes : ${d.people}\nDate : ${d.date}${d.extra ? `\nMessage : ${d.extra}` : ""}\n\nMerci !`;
    bot("Votre demande est prête. Je vous redirige sur WhatsApp — notre équipe répond sous 2 heures !");
    setTimeout(() => {
      window.open(`https://wa.me/221773865345?text=${encodeURIComponent(msg)}`, "_blank");
    }, 1200);
  };

  const needsInput = step === "name" || step === "date" || step === "extra";

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Ouvrir le chat"
        style={{ position: "fixed", bottom: "28px", right: "28px", zIndex: 9000, width: "60px", height: "60px", borderRadius: "50%", background: "#25D366", border: "none", cursor: "pointer", boxShadow: "0 8px 32px rgba(37,211,102,0.45)", display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.3s, box-shadow 0.3s" }}
        onMouseEnter={e => { (e.currentTarget).style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { (e.currentTarget).style.transform = "scale(1)"; }}
      >
        {open ? <X size={22} color="white" /> : WA_ICON}
        {!open && unread > 0 && (
          <span style={{ position: "absolute", top: "-4px", right: "-4px", width: "20px", height: "20px", background: "var(--coral)", borderRadius: "50%", color: "white", fontSize: "11px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white" }}>{unread}</span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div style={{ position: "fixed", bottom: "100px", right: "28px", zIndex: 9000, width: "360px", maxHeight: "530px", background: "white", borderRadius: "16px", boxShadow: "0 24px 80px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden", animation: "chatSlide 0.35s cubic-bezier(0.16,1,0.3,1)" }}
          className="chat-panel"
        >
          {/* Header */}
          <div style={{ background: "var(--forest)", padding: "18px 20px", display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
            <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <MessageCircle size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "white", fontWeight: 600, fontSize: "14px", fontFamily: "'DM Sans', sans-serif" }}>You Art Lac Rose</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", display: "flex", alignItems: "center", gap: "5px" }}>
                <span style={{ width: "6px", height: "6px", background: "#4ade80", borderRadius: "50%", display: "inline-block" }} />
                En ligne · Répond sous 2h
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.6)", padding: "4px", display: "flex" }}>
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: "10px", background: "#f5f5f0" }}>
            {msgs.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: m.from === "bot" ? "flex-start" : "flex-end", gap: "5px" }}>
                <div style={{ maxWidth: "82%", padding: "10px 14px", background: m.from === "bot" ? "white" : "#25D366", color: m.from === "bot" ? "var(--ink)" : "white", borderRadius: m.from === "bot" ? "2px 12px 12px 12px" : "12px 2px 12px 12px", fontSize: "13px", lineHeight: 1.65, boxShadow: "0 1px 3px rgba(0,0,0,0.08)", whiteSpace: "pre-line" }}>
                  {m.text}
                </div>
                {m.options && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", maxWidth: "90%" }}>
                    {m.options.map(opt => (
                      <button key={opt} onClick={() => handleOption(opt)}
                        style={{ background: "white", border: "1.5px solid var(--coral)", color: "var(--coral)", padding: "6px 14px", borderRadius: "100px", fontSize: "12px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit" }}
                        onMouseEnter={e => { (e.currentTarget).style.background = "var(--coral)"; (e.currentTarget).style.color = "white"; }}
                        onMouseLeave={e => { (e.currentTarget).style.background = "white"; (e.currentTarget).style.color = "var(--coral)"; }}
                      >{opt}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          {needsInput && (
            <form onSubmit={handleInput} style={{ padding: "12px 14px", borderTop: "1px solid #e5e7eb", display: "flex", gap: "8px", background: "white", flexShrink: 0 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder={step === "name" ? "Votre prénom..." : step === "date" ? "Ex : 25 juin 2025" : "Votre message..."}
                style={{ flex: 1, padding: "10px 14px", border: "1.5px solid #e5e7eb", borderRadius: "100px", fontSize: "13px", outline: "none", fontFamily: "inherit" }}
                onFocus={e => (e.target.style.borderColor = "var(--coral)")}
                onBlur={e => (e.target.style.borderColor = "#e5e7eb")}
                autoFocus
              />
              <button type="submit" style={{ width: "40px", height: "40px", background: "#25D366", border: "none", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "opacity 0.2s" }}>
                <Send size={15} color="white" />
              </button>
            </form>
          )}
        </div>
      )}

      <style>{`
        @keyframes chatSlide {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to { opacity: 1; transform: none; }
        }
        @media (max-width: 480px) {
          .chat-panel { width: calc(100vw - 24px) !important; right: 12px !important; }
        }
      `}</style>
    </>
  );
}
