import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

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
      <NavBar />

      {/* HERO */}
      <div className="pt-36 pb-12 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <RevealSection>
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-5"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            О работе и подходе
          </p>
          <h1
            className="font-cormorant font-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "hsl(220,12%,16%)" }}
          >
            Обо мне
          </h1>
          <div className="line-accent mb-12" />
        </RevealSection>

        {/* PHOTO + INTRO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center mb-0">
          <RevealSection>
            <div
              className="w-full aspect-[3/4] relative overflow-hidden"
              style={{
                backgroundColor: "hsl(40,30%,97%)",
                boxShadow: "0 8px 40px hsla(220,12%,20%,0.1)",
              }}
            >
              <img
                src="https://cdn.poehali.dev/projects/30d6293c-86b2-4b4c-baf9-6d8dae9c6523/bucket/8f80583d-705e-46d9-abef-99dfb3007024.png"
                alt="Сергей Водопьянов"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
          </RevealSection>

          <RevealSection delay={120}>
            <div className="flex flex-col gap-6">
              <p
                className="font-cormorant font-light leading-relaxed"
                style={{ fontSize: "clamp(1.4rem,2.5vw,1.9rem)", color: "hsl(220,12%,18%)" }}
              >
                Я работаю с состоянием человека через тело и внутренние процессы.
              </p>
              <div className="line-accent" />
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
        className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 mt-16"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,15%,58%)" }}
            >
              Подход
            </p>
            <p
              className="font-cormorant font-light leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "hsl(220,12%,22%)" }}
            >
              В работе я соединяю несколько направлений:
            </p>
            <div className="flex flex-col gap-0">
              {[
                "телесно-ориентированную практику",
                "психологическое понимание процессов",
                "работу с регуляцией нервной системы",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 py-4"
                  style={{ borderBottom: "1px solid hsl(35,20%,82%)" }}
                >
                  <span
                    className="font-cormorant font-light shrink-0 mt-0.5"
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
            <div className="flex flex-col gap-6 md:pt-16">
              <p
                className="font-cormorant italic leading-relaxed"
                style={{ fontSize: "clamp(1.1rem,1.8vw,1.4rem)", color: "hsl(220,12%,28%)" }}
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
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
              style={{ color: "hsl(35,15%,60%)" }}
            >
              Образование
            </p>
          </RevealSection>
          <div className="flex flex-col">
            {education.map((edu, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div
                  className="py-7 md:py-8 grid grid-cols-1 md:grid-cols-[3rem_1fr] gap-3 md:gap-8 items-start"
                  style={{
                    borderTop: "1px solid hsl(35,20%,84%)",
                    ...(i === education.length - 1 ? { borderBottom: "1px solid hsl(35,20%,84%)" } : {}),
                  }}
                >
                  <span
                    className="font-cormorant font-light"
                    style={{ fontSize: "1.5rem", color: "hsl(35,15%,72%)", lineHeight: 1.2 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="font-golos text-xs tracking-[0.16em] uppercase mb-2"
                      style={{ color: "hsl(35,15%,60%)" }}
                    >
                      {edu.org}
                    </p>
                    <p
                      className="font-cormorant leading-snug"
                      style={{ fontSize: "clamp(1rem,1.6vw,1.2rem)", color: "hsl(220,12%,22%)", fontWeight: 400 }}
                    >
                      {edu.program}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* КАК Я РАБОТАЮ */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32"
        style={{ backgroundColor: "hsl(40,28%,94%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 lg:gap-28 items-center">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,15%,60%)" }}
            >
              Как я работаю
            </p>
            <p
              className="font-cormorant font-light leading-relaxed mb-6"
              style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "hsl(220,12%,18%)" }}
            >
              Я не разделяю тело и психику.
            </p>
          </RevealSection>
          <RevealSection delay={100}>
            <div className="flex flex-col gap-5">
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
              >
                Напряжение в теле — это всегда отражение внутреннего состояния, нагрузки и того, как человек справляется с этим.
              </p>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
              >
                В работе важно не просто «расслабить», а изменить само состояние, в котором это напряжение возникает.
              </p>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* РЕЗУЛЬТАТ */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
              style={{ color: "hsl(35,15%,60%)" }}
            >
              Результат
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {results.map((r, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div
                  className="py-6 md:py-7 flex items-start gap-5"
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
        </div>
      </section>

      {/* ВАЖНО */}
      <section
        className="px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,15%,58%)" }}
            >
              Важно
            </p>
            <p
              className="font-cormorant font-light leading-relaxed"
              style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "hsl(220,12%,18%)" }}
            >
              Я не работаю по шаблону и не даю универсальных решений.
            </p>
          </RevealSection>
          <RevealSection delay={100}>
            <p
              className="font-golos font-light leading-relaxed"
              style={{ fontSize: "0.95rem", color: "hsl(220,10%,42%)" }}
            >
              Каждый человек — это отдельная система, и работа всегда строится вокруг конкретного запроса и состояния.
            </p>
            <Link
              to="/#contact"
              className="inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 mt-10 transition-opacity hover:opacity-70"
              style={{ backgroundColor: "hsl(220,12%,16%)", color: "hsl(40,30%,97%)" }}
            >
              Записаться на консультацию
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* BACK */}
      <div className="px-6 md:px-12 lg:px-20 pt-16 pb-8 max-w-6xl mx-auto">
        <Link
          to="/"
          className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,10%,56%)" }}
        >
          ← Главная
        </Link>
      </div>
      <Footer />
    </div>
  );
}