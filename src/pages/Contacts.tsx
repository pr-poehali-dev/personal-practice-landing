import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import RevealSection from "@/components/RevealSection";

const contacts = [
  {
    label: "Адрес",
    value: "Москва, ул. Новослободская, д. 14/19 стр. 1",
    href: "https://yandex.ru/maps/?text=Москва%2C+ул.+Новослободская%2C+д.+14/19+стр.+1",
    external: true,
  },
  {
    label: "Телефон",
    value: "+7 902 900 74 74",
    href: "tel:+79029007474",
    external: false,
  },
  {
    label: "E-mail",
    value: "mail@vodapianoff.ru",
    href: "mailto:mail@vodapianoff.ru",
    external: false,
  },
];

export default function Contacts() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <NavBar />

      <div className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-5"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            Связаться
          </p>
          <h1
            className="font-cormorant font-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "hsl(220,12%,16%)" }}
          >
            Контакты
          </h1>
          <div className="line-accent mb-16" />
        </RevealSection>

        {/* Contact list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-2xl mb-20">
          {contacts.map((c, i) => (
            <RevealSection key={i} delay={i * 100}>
              <div
                className="py-8 md:py-10"
                style={{ borderTop: "1px solid hsl(35,20%,84%)", ...(i === contacts.length - 1 ? { borderBottom: "1px solid hsl(35,20%,84%)" } : {}) }}
              >
                <p
                  className="font-golos text-xs tracking-[0.18em] uppercase mb-3"
                  style={{ color: "hsl(35,15%,60%)" }}
                >
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="font-cormorant leading-snug transition-opacity hover:opacity-50 inline-block"
                  style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "hsl(220,12%,18%)" }}
                >
                  {c.value}
                  {c.external && (
                    <span className="font-golos text-xs ml-2" style={{ color: "hsl(35,15%,65%)" }}>
                      → карта
                    </span>
                  )}
                </a>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Map embed */}
        <RevealSection delay={300}>
          <div
            className="w-full overflow-hidden mb-16"
            style={{
              height: "clamp(280px, 40vw, 480px)",
              boxShadow: "0 4px 24px hsla(220,12%,20%,0.08)",
            }}
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?text=Москва%2C+ул.+Новослободская%2C+д.+14%2F19+стр.+1&z=16&l=map"
              width="100%"
              height="100%"
              frameBorder="0"
              allowFullScreen
              title="Карта"
              style={{ border: 0, display: "block" }}
            />
          </div>
        </RevealSection>

        {/* CTA */}
        <RevealSection delay={400}>
          <Link
            to="/#contact"
            className="inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 transition-opacity hover:opacity-70"
            style={{ backgroundColor: "hsl(220,12%,16%)", color: "hsl(40,30%,97%)" }}
          >
            Записаться на консультацию
          </Link>
        </RevealSection>

        {/* Back */}
        <div className="mt-16">
          <Link
            to="/"
            className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,10%,56%)" }}
          >
            ← Главная
          </Link>
        </div>
      </div>
    </div>
  );
}
