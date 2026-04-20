import { useState } from "react";
import RevealSection from "@/components/RevealSection";

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

export default function ContactSection() {
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
    <>
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
        className="px-8 md:px-20 pt-10 pb-12"
        style={{ borderTop: "1px solid hsl(35,25%,85%)" }}
      >
        {/* Top row: logo + nav links */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <span
            className="font-cormorant text-xl uppercase"
            style={{ color: "hsl(220,12%,22%)", letterSpacing: "0.22em" }}
          >
            СВ
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href="/about"
              className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
              style={{ color: "hsl(220,12%,36%)" }}
            >
              Обо мне
            </a>
            <a
              href="/observations"
              className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
              style={{ color: "hsl(220,12%,36%)" }}
            >
              Наблюдения
            </a>
            <a
              href="#contact"
              className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
              style={{ color: "hsl(220,12%,36%)" }}
            >
              Записаться
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: "hsl(35,20%,88%)", marginBottom: "1.5rem" }} />

        {/* Bottom row: legal */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(35,15%,58%)" }}>
            © 2026 ИП Водопьянов С.Г.&nbsp;&nbsp;·&nbsp;&nbsp;ОГРНИП 321508100047334&nbsp;&nbsp;·&nbsp;&nbsp;Все права защищены
          </p>
          <div className="flex gap-6">
            <a
              href="/privacy"
              className="font-golos text-xs transition-opacity hover:opacity-50"
              style={{ color: "hsl(220,12%,48%)" }}
            >
              Политика конфиденциальности
            </a>
            <a
              href="/offer"
              className="font-golos text-xs transition-opacity hover:opacity-50"
              style={{ color: "hsl(220,12%,48%)" }}
            >
              Оферта
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}