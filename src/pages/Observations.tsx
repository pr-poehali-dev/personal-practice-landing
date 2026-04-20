import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    cardRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
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
            to="/about"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Обо мне
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

      {/* HEADER */}
      <div className="pt-40 pb-16 px-8 md:px-20 max-w-5xl mx-auto">
        <p
          className="font-golos text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "hsl(35,15%,60%)" }}
        >
          Из практики
        </p>
        <h1
          className="font-cormorant font-light leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2.5rem,5vw,4.5rem)", color: "hsl(220,12%,16%)" }}
        >
          Наблюдения
        </h1>
        <div className="line-accent mb-8" />
        <p
          className="font-cormorant italic leading-relaxed max-w-lg"
          style={{ fontSize: "1.2rem", color: "hsl(220,10%,48%)" }}
        >
          То, что я замечаю снова и снова — в работе с разными людьми, в разных запросах.
        </p>
      </div>

      {/* NOTES GRID */}
      <div className="px-8 md:px-20 pb-32 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {observations.map((obs, i) => (
            <div
              key={obs.number}
              ref={(el) => (cardRefs.current[i] = el)}
              className="reveal"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              {/* Paper note card */}
              <div
                className="relative h-full flex flex-col p-8 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: "hsl(40,28%,94%)",
                  boxShadow:
                    "0 2px 6px hsla(220,12%,20%,0.07), 0 8px 24px hsla(220,12%,20%,0.06)",
                  borderTop: "3px solid hsl(35,15%,78%)",
                  minHeight: "260px",
                }}
              >
                {/* Ruled lines decoration */}
                <div
                  className="absolute inset-x-8 bottom-8 top-20 pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent, transparent 27px, hsl(35,20%,86%) 27px, hsl(35,20%,86%) 28px)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <span
                    className="font-cormorant font-light block mb-4"
                    style={{ fontSize: "2.5rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}
                  >
                    {obs.number}
                  </span>
                  <h2
                    className="font-cormorant mb-5 leading-snug"
                    style={{ fontSize: "1.2rem", color: "hsl(220,12%,22%)", fontWeight: 500 }}
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

      {/* BACK LINK */}
      <div className="px-8 md:px-20 pb-20 max-w-5xl mx-auto">
        <Link
          to="/"
          className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
          style={{ color: "hsl(220,10%,48%)" }}
        >
          ← На главную
        </Link>
      </div>
    </div>
  );
}