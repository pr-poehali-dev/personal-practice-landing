import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/30d6293c-86b2-4b4c-baf9-6d8dae9c6523/files/21dd467f-bb61-4740-845c-5637ce7c14b0.jpg";

interface FormData {
  name: string;
  contact: string;
  message: string;
}

interface FormErrors {
  name?: string;
  contact?: string;
  message?: string;
}

function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [form, setForm] = useState<FormData>({ name: "", contact: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.contact.trim()) e.contact = "Укажите контакт";
    if (!form.message.trim()) e.message = "Напишите запрос";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("https://functions.poehali.dev/fbce82fb-edaf-4f65-947e-549aaf1ea0ed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", contact: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{
          backgroundColor: "hsla(40,30%,97%,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(35,25%,90%)",
        }}
      >
        <span
          className="font-cormorant text-lg uppercase"
          style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.18em" }}
        >
          С. Водопьянов
        </span>
        <a
          href="#contact"
          className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
        >
          Записаться
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-center px-8 md:px-20 pt-32 pb-16 md:py-0 md:w-1/2 z-10">
          <p
            className="animate-fade-up delay-100 font-golos text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "hsl(35,15%,60%)", animationDelay: "0.1s" }}
          >
            Персональная практика
          </p>
          <h1
            className="animate-fade-up font-cormorant font-light leading-[1.08] mb-8"
            style={{
              fontSize: "clamp(3rem,6vw,5.5rem)",
              color: "hsl(220,12%,16%)",
              animationDelay: "0.2s",
            }}
          >
            Сергей
            <br />
            Водопьянов
          </h1>
          <div
            className="animate-fade-up line-accent mb-8"
            style={{ animationDelay: "0.35s" }}
          />
          <p
            className="animate-fade-up font-golos font-light leading-relaxed mb-4 max-w-sm"
            style={{
              fontSize: "1.05rem",
              color: "hsl(220,10%,38%)",
              animationDelay: "0.45s",
            }}
          >
            Работа с телом и состоянием
          </p>
          <p
            className="animate-fade-up font-cormorant italic leading-relaxed max-w-sm"
            style={{
              fontSize: "1.25rem",
              color: "hsl(220,10%,48%)",
              animationDelay: "0.55s",
            }}
          >
            Когда уходит избыточное напряжение —<br />
            возвращается лёгкость, устойчивость и ясность
          </p>
          <a
            href="#contact"
            className="animate-fade-up inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 mt-12 w-fit transition-opacity duration-300 hover:opacity-70"
            style={{
              backgroundColor: "hsl(220,12%,16%)",
              color: "hsl(40,30%,97%)",
              animationDelay: "0.65s",
            }}
          >
            Обсудить запрос
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src={HERO_IMAGE}
            alt="Пространство практики"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.9) contrast(0.95) saturate(0.8)" }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, hsl(40,30%,97%) 0%, transparent 25%)",
            }}
          />
        </div>
      </section>

      {/* СМЫСЛ */}
      <section className="px-8 md:px-20 py-24 md:py-36">
        <div className="max-w-xl md:ml-auto md:mr-24">
          <RevealSection>
            <p
              className="font-cormorant font-light leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.5rem,3vw,2.2rem)", color: "hsl(220,12%,16%)" }}
            >
              Вы не всегда замечаете,
              <br />в каком напряжении живёте.
            </p>
          </RevealSection>
          <RevealSection delay={150}>
            <p
              className="font-golos font-light leading-loose mb-5"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              Постоянная усталость, зажатость, ощущение перегрузки —<br />
              это состояние, к которому человек привыкает.
            </p>
          </RevealSection>
          <RevealSection delay={300}>
            <p
              className="font-golos font-light leading-loose"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              Моя задача — помочь телу выйти из этого состояния
              <br />и вернуться к естественному балансу.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* С ЧЕМ РАБОТАЮ */}
      <section
        className="px-8 md:px-20 py-16 md:py-24"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
            style={{ color: "hsl(35,15%,55%)" }}
          >
            С чем работаю
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-7 max-w-4xl">
          {[
            "Напряжение и зажатость в теле",
            "Усталость и снижение ресурса",
            "Перегрузка и стресс",
            "Дискомфорт в шее, спине, пояснице",
            "Сложности с расслаблением",
          ].map((item, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div className="flex items-start gap-4">
                <span
                  className="mt-2 flex-shrink-0 rounded-full"
                  style={{ width: 4, height: 4, backgroundColor: "hsl(35,15%,60%)" }}
                />
                <p
                  className="font-golos font-light"
                  style={{ fontSize: "0.95rem", color: "hsl(220,12%,22%)" }}
                >
                  {item}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* КАК ПРОХОДИТ РАБОТА */}
      <section className="px-8 md:px-20 py-24 md:py-36">
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-16"
            style={{ color: "hsl(35,15%,55%)" }}
          >
            Как проходит работа
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl">
          {[
            { num: "01", title: "Первая встреча", desc: "Понимание состояния и первичная работа с телом" },
            { num: "02", title: "Индивидуальная практика", desc: "Работа через мягкие техники под ваш запрос" },
            { num: "03", title: "Сопровождение", desc: "Системная работа для закрепления результата" },
          ].map((step, i) => (
            <RevealSection key={i} delay={i * 150}>
              <p
                className="font-cormorant text-5xl font-light mb-4"
                style={{ color: "hsl(35,25%,84%)" }}
              >
                {step.num}
              </p>
              <h3
                className="font-cormorant text-xl mb-3"
                style={{ color: "hsl(220,12%,16%)" }}
              >
                {step.title}
              </h3>
              <p
                className="font-golos font-light leading-relaxed text-sm"
                style={{ color: "hsl(220,10%,45%)" }}
              >
                {step.desc}
              </p>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section
        className="px-8 md:px-20 py-20 md:py-28"
        style={{ backgroundColor: "hsl(220,12%,16%)" }}
      >
        <div className="max-w-xl">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,25%,55%)" }}
            >
              Формат и стоимость
            </p>
          </RevealSection>
          <RevealSection delay={150}>
            <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-6 mb-6">
              <span
                className="font-cormorant font-light"
                style={{ fontSize: "clamp(2.5rem,5vw,4rem)", color: "hsl(40,30%,97%)" }}
              >
                10 000 ₽
              </span>
              <span
                className="font-golos font-light text-sm mb-1"
                style={{ color: "hsl(35,25%,55%)" }}
              >
                первая встреча
              </span>
            </div>
          </RevealSection>
          <RevealSection delay={300}>
            <div
              className="line-accent mb-8"
              style={{ backgroundColor: "hsl(35,25%,35%)" }}
            />
            <p
              className="font-golos font-light leading-relaxed"
              style={{ color: "hsl(35,25%,55%)", fontSize: "0.9rem" }}
            >
              Сопровождение — обсуждается индивидуально,
              <br />после понимания вашего запроса.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* ПОДХОД */}
      <section className="px-8 md:px-20 py-24 md:py-36">
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <p
              className="font-cormorant italic leading-relaxed mb-16"
              style={{ fontSize: "clamp(1.4rem,3vw,2rem)", color: "hsl(220,12%,24%)" }}
            >
              Я не работаю с отдельной болью.
              <br />Я работаю с состоянием тела,
              <br />в котором она появляется.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {[
              "Тело всегда отражает текущее состояние человека",
              "Напряжение не возникает случайно",
              "Стабильный результат важнее временного облегчения",
            ].map((q, i) => (
              <RevealSection key={i} delay={i * 120}>
                <div>
                  <div className="line-accent mb-4" />
                  <p
                    className="font-golos font-light text-sm leading-relaxed"
                    style={{ color: "hsl(220,10%,45%)" }}
                  >
                    {q}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section
        className="px-8 md:px-20 py-16 md:py-24"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
            style={{ color: "hsl(35,15%,55%)" }}
          >
            Результат
          </p>
        </RevealSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl">
          {[
            { icon: "Wind", label: "Уходит лишнее напряжение" },
            { icon: "Feather", label: "Появляется лёгкость" },
            { icon: "BatteryCharging", label: "Восстанавливается ресурс" },
            { icon: "Sun", label: "Улучшается общее состояние" },
          ].map((r, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div className="flex flex-col gap-3">
                <Icon
                  name={r.icon}
                  size={18}
                  style={{ color: "hsl(220,12%,45%)", opacity: 0.6 }}
                />
                <p
                  className="font-golos font-light text-sm leading-snug"
                  style={{ color: "hsl(220,12%,28%)" }}
                >
                  {r.label}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* КОНТАКТ */}
      <section id="contact" className="px-8 md:px-20 py-24 md:py-36">
        <div className="max-w-lg">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-4"
              style={{ color: "hsl(35,15%,55%)" }}
            >
              Написать
            </p>
            <h2
              className="font-cormorant font-light leading-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3rem)", color: "hsl(220,12%,16%)" }}
            >
              Напишите коротко,
              <br />с чем вы сейчас
            </h2>
            <p
              className="font-golos font-light mb-12 text-sm leading-relaxed"
              style={{ color: "hsl(220,10%,45%)" }}
            >
              Я предложу формат работы, подходящий именно вам.
            </p>
          </RevealSection>

          {status === "sent" ? (
            <RevealSection>
              <div className="py-10">
                <div className="line-accent mb-6" />
                <p
                  className="font-cormorant italic text-2xl mb-3"
                  style={{ color: "hsl(220,12%,16%)" }}
                >
                  Сообщение отправлено
                </p>
                <p
                  className="font-golos font-light text-sm"
                  style={{ color: "hsl(220,10%,45%)" }}
                >
                  Сергей свяжется с вами в ближайшее время.
                </p>
              </div>
            </RevealSection>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <RevealSection delay={100}>
                <div>
                  <input
                    type="text"
                    placeholder="Имя"
                    value={form.name}
                    onChange={handleChange("name")}
                    className={`field-input${errors.name ? " error" : ""}`}
                  />
                  {errors.name && (
                    <p
                      className="mt-1 text-xs font-golos"
                      style={{ color: "#b03030" }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>
              </RevealSection>
              <RevealSection delay={200}>
                <div>
                  <input
                    type="text"
                    placeholder="Телефон или Telegram"
                    value={form.contact}
                    onChange={handleChange("contact")}
                    className={`field-input${errors.contact ? " error" : ""}`}
                  />
                  {errors.contact && (
                    <p
                      className="mt-1 text-xs font-golos"
                      style={{ color: "#b03030" }}
                    >
                      {errors.contact}
                    </p>
                  )}
                </div>
              </RevealSection>
              <RevealSection delay={300}>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Коротко о запросе"
                    value={form.message}
                    onChange={handleChange("message")}
                    className={`field-input resize-none${errors.message ? " error" : ""}`}
                  />
                  {errors.message && (
                    <p
                      className="mt-1 text-xs font-golos"
                      style={{ color: "#b03030" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
              </RevealSection>
              <RevealSection delay={400}>
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="font-golos text-xs tracking-[0.2em] uppercase px-10 py-4 transition-opacity duration-300 hover:opacity-70 disabled:opacity-40"
                    style={{
                      backgroundColor: "hsl(220,12%,16%)",
                      color: "hsl(40,30%,97%)",
                    }}
                  >
                    {status === "sending" ? "Отправляю..." : "Отправить"}
                  </button>
                  {status === "error" && (
                    <p
                      className="mt-4 text-xs font-golos"
                      style={{ color: "#b03030" }}
                    >
                      Ошибка отправки. Попробуйте позже.
                    </p>
                  )}
                </div>
              </RevealSection>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="px-8 md:px-20 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        style={{ borderTop: "1px solid hsl(35,25%,85%)" }}
      >
        <span
          className="font-cormorant text-base uppercase"
          style={{ color: "hsl(220,12%,40%)", letterSpacing: "0.18em" }}
        >
          С. Водопьянов
        </span>
        <p className="font-golos text-xs" style={{ color: "hsl(35,15%,60%)" }}>
          Персональная практика · Москва
        </p>
      </footer>
    </div>
  );
}