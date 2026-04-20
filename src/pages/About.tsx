import { useEffect } from "react";
import { Link } from "react-router-dom";
import RevealSection from "@/components/RevealSection";

const sections = [
  {
    label: "Подход",
    content: [
      "В работе я соединяю несколько направлений:",
      "— телесно-ориентированную практику",
      "— психологическое понимание процессов",
      "— работу с регуляцией нервной системы",
    ],
    note: "Это позволяет не работать поверхностно, а видеть глубже — где именно возникает напряжение и почему оно удерживается.",
    note2: "Каждая работа строится индивидуально. Без шаблонных решений и универсальных схем.",
  },
];

const education = [
  {
    org: "Высшая школа экономики (НИУ ВШЭ)",
    program: "Психология",
  },
  {
    org: "Высшая школа экономики (НИУ ВШЭ)",
    program: "Российско-французская магистратура «Психоаналитическое бизнес-консультирование»",
  },
  {
    org: "European School of Coaching",
    program: "Executive Coach",
  },
  {
    org: "Программа Alain Lignon",
    program: "«Регуляция ВНС», телесно-ориентированная терапия",
  },
];

const results = [
  "снижается уровень внутреннего напряжения",
  "появляется больше устойчивости",
  "восстанавливается ресурс",
  "меняется общее ощущение себя",
];

export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

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
        <Link
          to="/"
          className="font-cormorant text-lg uppercase"
          style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.18em" }}
        >
          СВ
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/observations"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Наблюдения
          </Link>
          <Link
            to="/#contact"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Записаться
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <div className="pt-40 pb-16 px-8 md:px-20 max-w-5xl mx-auto">
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-6"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            О работе и подходе
          </p>
          <h1
            className="font-cormorant font-light leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "hsl(220,12%,16%)" }}
          >
            Обо мне
          </h1>
          <div className="line-accent mb-10" />
        </RevealSection>

        {/* PHOTO + INTRO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start mb-20">
          {/* Photo placeholder */}
          <RevealSection>
            <div
              className="w-full aspect-[3/4] flex items-end justify-center relative overflow-hidden"
              style={{
                backgroundColor: "hsl(40,20%,88%)",
                boxShadow: "0 4px 24px hsla(220,12%,20%,0.08)",
              }}
            >
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ color: "hsl(35,15%,68%)" }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="8" r="3.5" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
                <span
                  className="font-golos text-xs tracking-[0.2em] uppercase"
                  style={{ color: "hsl(35,15%,68%)" }}
                >
                  Место для фото
                </span>
              </div>
            </div>
          </RevealSection>

          {/* Intro text */}
          <RevealSection delay={100}>
            <div className="flex flex-col gap-6 pt-2">
              <p
                className="font-cormorant font-light leading-relaxed"
                style={{ fontSize: "clamp(1.3rem,2.5vw,1.7rem)", color: "hsl(220,12%,20%)" }}
              >
                Я работаю с состоянием человека через тело и внутренние процессы.
              </p>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
              >
                В основе моей практики — понимание того, что тело, психика и уровень напряжения в жизни человека напрямую связаны.
                Когда меняется состояние — меняется и то, как человек ощущает себя, принимает решения и взаимодействует с миром.
              </p>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
              >
                Моя задача — не просто снять напряжение, а помочь системе вернуться в более устойчивое и естественное состояние.
              </p>
            </div>
          </RevealSection>
        </div>
      </div>

      {/* ПОДХОД */}
      <section
        className="px-8 md:px-20 py-20 md:py-28"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,15%,58%)" }}
            >
              Подход
            </p>
            <div className="flex flex-col gap-4">
              {[
                "телесно-ориентированную практику",
                "психологическое понимание процессов",
                "работу с регуляцией нервной системы",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span
                    className="font-cormorant font-light mt-1 shrink-0"
                    style={{ fontSize: "1.1rem", color: "hsl(35,15%,65%)" }}
                  >
                    —
                  </span>
                  <p
                    className="font-golos font-light leading-relaxed"
                    style={{ fontSize: "0.95rem", color: "hsl(220,12%,28%)" }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </RevealSection>

          <RevealSection delay={100}>
            <div className="flex flex-col gap-6 md:pt-14">
              <p
                className="font-cormorant italic leading-relaxed"
                style={{ fontSize: "1.2rem", color: "hsl(220,12%,28%)" }}
              >
                Это позволяет не работать поверхностно, а видеть глубже — где именно возникает напряжение и почему оно удерживается.
              </p>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
              >
                Каждая работа строится индивидуально. Без шаблонных решений и универсальных схем.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ОБРАЗОВАНИЕ */}
      <section className="px-8 md:px-20 py-20 md:py-28 max-w-5xl mx-auto">
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            Образование
          </p>
        </RevealSection>
        <div className="flex flex-col gap-0">
          {education.map((edu, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div
                className="py-8 flex flex-col md:flex-row md:items-start md:gap-12"
                style={{
                  borderTop: "1px solid hsl(35,20%,84%)",
                  ...(i === education.length - 1 ? { borderBottom: "1px solid hsl(35,20%,84%)" } : {}),
                }}
              >
                <span
                  className="font-cormorant font-light shrink-0 mb-2 md:mb-0 md:w-8"
                  style={{ fontSize: "1.5rem", color: "hsl(35,15%,72%)", lineHeight: 1.2 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p
                    className="font-golos text-xs tracking-[0.18em] uppercase mb-2"
                    style={{ color: "hsl(35,15%,60%)" }}
                  >
                    {edu.org}
                  </p>
                  <p
                    className="font-cormorant leading-snug"
                    style={{ fontSize: "1.15rem", color: "hsl(220,12%,22%)", fontWeight: 400 }}
                  >
                    {edu.program}
                  </p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* КАК Я РАБОТАЮ */}
      <section
        className="px-8 md:px-20 py-20 md:py-28"
        style={{ backgroundColor: "hsl(40,28%,94%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-10"
              style={{ color: "hsl(35,15%,60%)" }}
            >
              Как я работаю
            </p>
            <p
              className="font-cormorant font-light leading-relaxed mb-6 max-w-2xl"
              style={{ fontSize: "clamp(1.3rem,2.2vw,1.7rem)", color: "hsl(220,12%,18%)" }}
            >
              Я не разделяю тело и психику.
            </p>
            <p
              className="font-golos font-light leading-relaxed max-w-xl mb-4"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              Напряжение в теле — это всегда отражение внутреннего состояния, нагрузки и того, как человек справляется с этим.
            </p>
            <p
              className="font-golos font-light leading-relaxed max-w-xl"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              В работе важно не просто «расслабить», а изменить само состояние, в котором это напряжение возникает.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="px-8 md:px-20 py-20 md:py-28 max-w-5xl mx-auto">
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-10"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            Результат
          </p>
        </RevealSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {results.map((r, i) => (
            <RevealSection key={i} delay={i * 80}>
              <div
                className="py-7 flex items-start gap-5"
                style={{ borderTop: "1px solid hsl(35,20%,84%)" }}
              >
                <span
                  className="font-cormorant font-light shrink-0 mt-0.5"
                  style={{ fontSize: "1.1rem", color: "hsl(35,15%,68%)" }}
                >
                  —
                </span>
                <p
                  className="font-golos font-light leading-relaxed"
                  style={{ fontSize: "0.95rem", color: "hsl(220,12%,28%)" }}
                >
                  {r}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>
        <RevealSection delay={350}>
          <p
            className="font-cormorant italic mt-10 max-w-lg"
            style={{ fontSize: "1.1rem", color: "hsl(220,10%,48%)" }}
          >
            Это не быстрый эффект, а постепенное возвращение к более естественному состоянию.
          </p>
        </RevealSection>
      </section>

      {/* ВАЖНО */}
      <section
        className="px-8 md:px-20 py-20 md:py-28"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,15%,58%)" }}
            >
              Важно
            </p>
            <p
              className="font-cormorant font-light leading-relaxed max-w-2xl"
              style={{ fontSize: "clamp(1.3rem,2.2vw,1.7rem)", color: "hsl(220,12%,18%)" }}
            >
              Я не работаю по шаблону и не даю универсальных решений.
            </p>
            <p
              className="font-golos font-light leading-relaxed max-w-xl mt-6"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              Каждый человек — это отдельная система, и работа всегда строится вокруг конкретного запроса и состояния.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-20 max-w-5xl mx-auto">
        <RevealSection>
          <Link
            to="/#contact"
            className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50 inline-flex items-center gap-3"
            style={{ color: "hsl(220,12%,28%)" }}
          >
            Записаться на консультацию →
          </Link>
        </RevealSection>
      </section>

      {/* BACK */}
      <div className="px-8 md:px-20 pb-20 max-w-5xl mx-auto">
        <Link
          to="/"
          className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,10%,56%)" }}
        >
          ← Главная
        </Link>
      </div>
    </div>
  );
}