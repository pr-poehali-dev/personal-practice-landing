import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const IMAGE =
  "https://cdn.poehali.dev/projects/30d6293c-86b2-4b4c-baf9-6d8dae9c6523/files/999f39b1-9cf8-4de0-af4f-992dee938bc3.jpg";

const CONTACT_URL =
  "https://functions.poehali.dev/fbce82fb-edaf-4f65-947e-549aaf1ea0ed";

/* ─── Reveal ─── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.style.opacity = "1"; el.style.transform = "none"; obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(16px)", transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Label ─── */
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>
      {children}
    </p>
  );
}

/* ─── Divider ─── */
function Hr({ style }: { style?: React.CSSProperties }) {
  return <div style={{ height: 1, backgroundColor: "#e8e8e8", ...style }} />;
}

/* ─── Main ─── */
export default function IndexV2() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.contact.trim()) e.contact = "Укажите контакт";
    if (!form.message.trim()) e.message = "Напишите запрос";
    return e;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(CONTACT_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (res.ok) { setStatus("sent"); setForm({ name: "", contact: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const onChange = (f: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [f]: e.target.value }));
    if (errors[f]) setErrors(p => ({ ...p, [f]: "" }));
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#fff", color: "#111", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px", height: 64,
        backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)",
        borderBottom: "1px solid #f0f0f0",
      }}>
        <span style={{ fontSize: 13, letterSpacing: "0.08em", fontWeight: 500 }}>
          Сергей Водопьянов
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#about" style={{ fontSize: 12, color: "#888", textDecoration: "none", letterSpacing: "0.05em" }}>О практике</a>
          <a href="#contact" style={{
            fontSize: 12, letterSpacing: "0.08em", textDecoration: "none",
            padding: "8px 20px", border: "1px solid #111", color: "#111",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { (e.target as HTMLElement).style.backgroundColor = "#111"; (e.target as HTMLElement).style.color = "#fff"; }}
            onMouseLeave={e => { (e.target as HTMLElement).style.backgroundColor = "transparent"; (e.target as HTMLElement).style.color = "#111"; }}
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", paddingTop: 64 }}>
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 64px 80px 48px", borderRight: "1px solid #f0f0f0" }}>
          <Reveal>
            <Label>Персональная практика — Москва</Label>
          </Reveal>
          <Reveal delay={100}>
            <h1 style={{ fontSize: "clamp(2.8rem, 4vw, 4.5rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 32px" }}>
              Работа<br />с телом<br />и состоянием
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <Hr style={{ marginBottom: 32, width: 40 }} />
          </Reveal>
          <Reveal delay={300}>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#555", maxWidth: 360, margin: "0 0 48px" }}>
              Когда уходит избыточное напряжение —<br />
              возвращается лёгкость, устойчивость и ясность.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <a href="#contact" style={{
                fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "14px 32px", backgroundColor: "#111", color: "#fff",
                textDecoration: "none", display: "inline-block",
                transition: "opacity 0.2s",
              }}
                onMouseEnter={e => (e.target as HTMLElement).style.opacity = "0.75"}
                onMouseLeave={e => (e.target as HTMLElement).style.opacity = "1"}
              >
                Обсудить запрос
              </a>
              <a href="#about" style={{ fontSize: 12, color: "#888", textDecoration: "none", letterSpacing: "0.05em" }}>
                Узнать подробнее →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right — image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src={IMAGE}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%) contrast(1.05)" }}
          />
          {/* stat overlay */}
          <div style={{
            position: "absolute", bottom: 40, left: 40,
            backgroundColor: "rgba(255,255,255,0.95)", padding: "20px 28px",
            borderLeft: "3px solid #111",
          }}>
            <p style={{ fontSize: 28, fontWeight: 300, letterSpacing: "-0.02em", margin: "0 0 4px" }}>
              10 000 ₽
            </p>
            <p style={{ fontSize: 11, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
              Первая встреча
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ borderTop: "1px solid #f0f0f0" }}>
        {/* Row 1 — intro text */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ padding: "64px 48px", borderRight: "1px solid #f0f0f0" }}>
            <Reveal><Label>О практике</Label></Reveal>
          </div>
          <div style={{ padding: "64px 64px 64px 48px" }}>
            <Reveal>
              <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 300, lineHeight: 1.6, color: "#111", maxWidth: 560 }}>
                Вы не всегда замечаете, в каком напряжении живёте. Постоянная усталость, зажатость, ощущение перегрузки — это состояние, к которому человек привыкает.
              </p>
            </Reveal>
            <Reveal delay={150}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: "#666", marginTop: 24, maxWidth: 480 }}>
                Моя задача — помочь телу выйти из этого состояния и вернуться к естественному балансу. Я не работаю с отдельной болью. Я работаю с состоянием тела, в котором она появляется.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Row 2 — with what */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ padding: "64px 48px", borderRight: "1px solid #f0f0f0" }}>
            <Reveal><Label>С чем работаю</Label></Reveal>
          </div>
          <div style={{ padding: "64px 64px 64px 48px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {[
                "Напряжение и зажатость в теле",
                "Усталость и снижение ресурса",
                "Перегрузка и стресс",
                "Дискомфорт в шее, спине, пояснице",
                "Сложности с расслаблением",
              ].map((item, i) => (
                <Reveal key={i} delay={i * 60}>
                  <div style={{
                    padding: "20px 0",
                    borderBottom: "1px solid #f0f0f0",
                    borderRight: i % 2 === 0 ? "1px solid #f0f0f0" : "none",
                    paddingRight: i % 2 === 0 ? 32 : 0,
                    paddingLeft: i % 2 !== 0 ? 32 : 0,
                    display: "flex", alignItems: "center", gap: 12,
                  }}>
                    <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#ccc", flexShrink: 0 }} />
                    <span style={{ fontSize: 14, color: "#333", lineHeight: 1.5 }}>{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 — process */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ padding: "64px 48px", borderRight: "1px solid #f0f0f0" }}>
            <Reveal><Label>Как проходит работа</Label></Reveal>
          </div>
          <div style={{ padding: "64px 64px 64px 48px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 0 }}>
            {[
              { num: "01", title: "Первая встреча", desc: "Понимание состояния и первичная работа с телом" },
              { num: "02", title: "Индивидуальная практика", desc: "Работа через мягкие техники под ваш запрос" },
              { num: "03", title: "Сопровождение", desc: "Системная работа для закрепления результата" },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div style={{
                  paddingRight: i < 2 ? 32 : 0,
                  paddingLeft: i > 0 ? 32 : 0,
                  borderRight: i < 2 ? "1px solid #f0f0f0" : "none",
                }}>
                  <p style={{ fontSize: 11, color: "#bbb", letterSpacing: "0.15em", marginBottom: 16 }}>{s.num}</p>
                  <p style={{ fontSize: 15, fontWeight: 500, marginBottom: 10, letterSpacing: "-0.01em" }}>{s.title}</p>
                  <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Row 4 — results */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ padding: "64px 48px", borderRight: "1px solid #f0f0f0" }}>
            <Reveal><Label>Результат</Label></Reveal>
          </div>
          <div style={{ padding: "64px 64px 64px 48px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
            {[
              { icon: "Wind", label: "Уходит напряжение" },
              { icon: "Feather", label: "Появляется лёгкость" },
              { icon: "BatteryCharging", label: "Восстанавливается ресурс" },
              { icon: "Sun", label: "Улучшается состояние" },
            ].map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{
                  paddingRight: i < 3 ? 28 : 0,
                  paddingLeft: i > 0 ? 28 : 0,
                  borderRight: i < 3 ? "1px solid #f0f0f0" : "none",
                }}>
                  <Icon name={r.icon} size={16} style={{ color: "#aaa", marginBottom: 12 }} />
                  <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6 }}>{r.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Row 5 — price */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ padding: "64px 48px", borderRight: "1px solid #f0f0f0" }}>
            <Reveal><Label>Стоимость</Label></Reveal>
          </div>
          <div style={{ padding: "64px 64px 64px 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            <Reveal>
              <div style={{ paddingRight: 48, borderRight: "1px solid #f0f0f0" }}>
                <p style={{ fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 300, letterSpacing: "-0.02em", margin: "0 0 8px" }}>10 000 ₽</p>
                <p style={{ fontSize: 12, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Первая встреча</p>
                <Hr style={{ width: 32, marginBottom: 16 }} />
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>
                  Включает первичную работу с телом и понимание вашего запроса.
                </p>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div style={{ paddingLeft: 48 }}>
                <p style={{ fontSize: "clamp(2rem,3vw,3rem)", fontWeight: 300, letterSpacing: "-0.02em", margin: "0 0 8px", color: "#bbb" }}>
                  По договорённости
                </p>
                <p style={{ fontSize: 12, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>Сопровождение</p>
                <Hr style={{ width: 32, marginBottom: 16 }} />
                <p style={{ fontSize: 13, color: "#777", lineHeight: 1.7 }}>
                  Обсуждается индивидуально после понимания вашего запроса.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", borderBottom: "1px solid #f0f0f0" }}>
        <div style={{ padding: "80px 48px", borderRight: "1px solid #f0f0f0", backgroundColor: "#fafafa" }}>
          <Reveal>
            <Label>Написать</Label>
            <h2 style={{ fontSize: "clamp(1.6rem,2.5vw,2.4rem)", fontWeight: 300, lineHeight: 1.3, letterSpacing: "-0.02em", margin: "0 0 24px" }}>
              Напишите коротко, с чем вы сейчас
            </h2>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.8 }}>
              Я предложу формат работы, подходящий именно вам.
            </p>
          </Reveal>
        </div>

        <div style={{ padding: "80px 64px 80px 64px" }}>
          {status === "sent" ? (
            <Reveal>
              <div style={{ padding: "40px 0" }}>
                <Hr style={{ width: 40, marginBottom: 24 }} />
                <p style={{ fontSize: "1.4rem", fontWeight: 300, marginBottom: 12 }}>Сообщение отправлено</p>
                <p style={{ fontSize: 14, color: "#888" }}>Сергей свяжется с вами в ближайшее время.</p>
              </div>
            </Reveal>
          ) : (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 40, maxWidth: 480 }}>
              {(["name", "contact", "message"] as const).map((f, idx) => (
                <Reveal key={f} delay={idx * 80}>
                  <div>
                    {f !== "message" ? (
                      <input
                        type="text"
                        placeholder={f === "name" ? "Имя" : "Телефон или Telegram"}
                        value={form[f]}
                        onChange={onChange(f)}
                        style={{
                          width: "100%", background: "transparent",
                          border: "none", borderBottom: `1px solid ${errors[f] ? "#b03030" : "#ddd"}`,
                          padding: "10px 0", fontSize: 15, color: "#111", outline: "none",
                          fontFamily: "'Inter', sans-serif",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => (e.target.style.borderBottomColor = "#111")}
                        onBlur={e => (e.target.style.borderBottomColor = errors[f] ? "#b03030" : "#ddd")}
                      />
                    ) : (
                      <textarea
                        rows={4}
                        placeholder="Коротко о запросе"
                        value={form[f]}
                        onChange={onChange(f)}
                        style={{
                          width: "100%", background: "transparent", resize: "none",
                          border: "none", borderBottom: `1px solid ${errors[f] ? "#b03030" : "#ddd"}`,
                          padding: "10px 0", fontSize: 15, color: "#111", outline: "none",
                          fontFamily: "'Inter', sans-serif",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={e => (e.target.style.borderBottomColor = "#111")}
                        onBlur={e => (e.target.style.borderBottomColor = errors[f] ? "#b03030" : "#ddd")}
                      />
                    )}
                    {errors[f] && <p style={{ fontSize: 11, color: "#b03030", marginTop: 4 }}>{errors[f]}</p>}
                  </div>
                </Reveal>
              ))}
              <Reveal delay={280}>
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    style={{
                      fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase",
                      padding: "14px 36px", backgroundColor: "#111", color: "#fff",
                      border: "none", cursor: "pointer", fontFamily: "'Inter', sans-serif",
                      opacity: status === "sending" ? 0.5 : 1,
                      transition: "opacity 0.2s",
                    }}
                    onMouseEnter={e => { if (status !== "sending") (e.target as HTMLElement).style.opacity = "0.7"; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.opacity = status === "sending" ? "0.5" : "1"; }}
                  >
                    {status === "sending" ? "Отправляю..." : "Отправить"}
                  </button>
                  {status === "error" && (
                    <p style={{ fontSize: 11, color: "#b03030", marginTop: 12 }}>
                      Ошибка отправки. Попробуйте позже.
                    </p>
                  )}
                </div>
              </Reveal>
            </form>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "28px 48px", borderTop: "1px solid #f0f0f0",
      }}>
        <span style={{ fontSize: 13, letterSpacing: "0.06em", fontWeight: 500 }}>Сергей Водопьянов</span>
        <span style={{ fontSize: 11, color: "#aaa", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Персональная практика · Москва
        </span>
      </footer>
    </div>
  );
}
