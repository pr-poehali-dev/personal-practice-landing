import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { usePageMeta } from "@/hooks/usePageMeta";

const observations = [
  {
    number: "01",
    title: "Тело помнит то, что разум забыл",
    text: "Психологические травмы и стрессы оседают в тканях. Хроническое напряжение в плечах, спазм в горле, сжатый живот — это не «просто» мышцы. Это незавершённые реакции, которые тело продолжает удерживать.",
  },
  {
    number: "02",
    title: "Тревога живёт в дыхании",
    text: "Почти у каждого человека в состоянии хронической тревоги нарушен дыхательный ритм. Неглубокое, учащённое дыхание поддерживает нервную систему в режиме готовности к угрозе — даже когда угрозы нет.",
  },
  {
    number: "03",
    title: "Контроль — это напряжение",
    text: "Стремление контролировать всё вокруг требует колоссального мышечного усилия. Человек буквально держит себя в кулаке: сжатые челюсти, поднятые плечи, скованный таз. Расслабление воспринимается как опасность.",
  },
  {
    number: "04",
    title: "Стресс накапливается слоями",
    text: "Каждая непережитая ситуация добавляет новый слой напряжения поверх старого. Со временем человек перестаёт чувствовать эти слои как напряжение — они становятся «нормой» тела, его обычным фоном.",
  },
  {
    number: "05",
    title: "Граница между собой и другими — телесная",
    text: "Сложности с выстраиванием личных границ часто отражаются в теле: размытая осанка, слабый контакт со стопами, привычка сутулиться. Тело не занимает пространство, потому что психика не чувствует права на него.",
  },
  {
    number: "06",
    title: "Усталость без причины — сигнал",
    text: "Когда человек устаёт от ничегонеделания — это не лень. Нервная система тратит ресурс на поддержание хронического напряжения, на удержание чувств, на контроль. На жизнь энергии уже не остаётся.",
  },
  {
    number: "07",
    title: "Движение меняет мышление",
    text: "Убеждения и паттерны поведения хранятся не только в голове, но и в двигательных привычках. Когда меняется то, как человек держит тело и движется в пространстве, меняется и его восприятие ситуаций.",
  },
  {
    number: "08",
    title: "Подавленный гнев становится болью",
    text: "Злость, которую нельзя было выразить, не исчезает. Она трансформируется — в мышечные блоки, в головные боли, в аутоагрессию. Тело находит выход для того, чему не дали выйти.",
  },
  {
    number: "09",
    title: "Покой — это навык",
    text: "Способность по-настоящему расслабляться не врождённая черта характера, а навык. Многие никогда не учились этому. Тело можно заново научить состоянию покоя — и это меняет всё остальное.",
  },
];

export default function Observations() {
  usePageMeta({
    title: "Наблюдения из практики — Сергей Водопьянов",
    description: "Профессиональные наблюдения телесно-ориентированного психолога о связи тела, психики и стресса. Как тело хранит напряжение, тревогу и усталость.",
    keywords: "наблюдения психолога, тело и психика, тревога в теле, хроническое напряжение, стресс и тело, телесные блоки, психосоматика",
  });

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const goToForm = () => {
    navigate("/");
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 400);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08 }
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <NavBar />

      {/* HEADER */}
      <div className="pt-36 pb-12 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <p
          className="font-golos text-xs tracking-[0.25em] uppercase mb-5"
          style={{ color: "hsl(35,15%,60%)" }}
        >
          Из практики
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-end mb-12">
          <div>
            <h1
              className="font-cormorant font-light leading-[1.05] mb-5"
              style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: "hsl(220,12%,16%)" }}
            >
              Наблюдения
            </h1>
            <div className="line-accent" />
          </div>
          <p
            className="font-cormorant italic leading-relaxed"
            style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", color: "hsl(220,10%,48%)" }}
          >
            То, что я замечаю снова и снова — в работе с разными людьми, в разных запросах.
          </p>
        </div>
      </div>

      {/* NOTES GRID */}
      <div className="px-6 md:px-12 lg:px-20 pb-24 md:pb-32 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {observations.map((obs, i) => (
            <div
              key={obs.number}
              ref={(el) => (cardRefs.current[i] = el)}
              className="reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <div
                className="relative h-full flex flex-col p-7 md:p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "hsl(40,28%,94%)",
                  boxShadow: "0 2px 6px hsla(220,12%,20%,0.07), 0 8px 24px hsla(220,12%,20%,0.06)",
                  borderTop: "3px solid hsl(35,15%,78%)",
                  minHeight: "260px",
                }}
              >
                {/* Ruled lines */}
                <div
                  className="absolute inset-x-7 md:inset-x-8 bottom-7 md:bottom-8 top-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 27px, hsl(35,20%,86%) 27px, hsl(35,20%,86%) 28px)",
                  }}
                />
                <div className="relative z-10">
                  <span
                    className="font-cormorant font-light block mb-4"
                    style={{ fontSize: "2.5rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}
                  >
                    {obs.number}
                  </span>
                  <h2
                    className="font-cormorant mb-5 leading-snug"
                    style={{ fontSize: "clamp(1rem,1.4vw,1.2rem)", color: "hsl(220,12%,22%)", fontWeight: 500 }}
                  >
                    {obs.title}
                  </h2>
                  <p
                    className="font-golos font-light leading-relaxed"
                    style={{ fontSize: "0.88rem", color: "hsl(220,10%,42%)" }}
                  >
                    {obs.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER LINKS */}
      <div className="px-6 md:px-12 lg:px-20 pb-20 max-w-6xl mx-auto flex flex-col sm:flex-row gap-6 sm:gap-12">
        <Link
          to="/"
          className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,10%,48%)" }}
        >
          ← На главную
        </Link>
        <button
          onClick={goToForm}
          className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,12%,28%)" }}
        >
          Записаться на консультацию →
        </button>
      </div>
      <Footer />
    </div>
  );
}