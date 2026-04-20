import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import RevealSection from "@/components/RevealSection";

const PREVIEW_OBSERVATIONS = [
  {
    number: "01",
    title: "Тело помнит то, что разум забыл",
    text: "Хроническое напряжение в плечах, спазм в горле, сжатый живот — это незавершённые реакции, которые тело продолжает удерживать.",
  },
  {
    number: "04",
    title: "Стресс накапливается слоями",
    text: "Каждая непережитая ситуация добавляет новый слой напряжения. Со временем человек перестаёт их чувствовать — они становятся «нормой» тела.",
  },
  {
    number: "09",
    title: "Покой — это навык",
    text: "Способность по-настоящему расслабляться — не врождённая черта, а навык. Тело можно заново научить состоянию покоя.",
  },
];

export default function ContentSections() {
  return (
    <>
      {/* СМЫСЛ */}
      <section className="px-8 md:px-20 lg:px-32 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <RevealSection>
            <p
              className="font-cormorant font-light leading-[1.2]"
              style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "hsl(220,12%,16%)" }}
            >
              Вы не всегда замечаете,
              <br />в каком напряжении живёте.
            </p>
          </RevealSection>
          <div className="flex flex-col gap-5">
            <RevealSection delay={150}>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "1rem", color: "hsl(220,10%,42%)" }}
              >
                Постоянная усталость, зажатость, ощущение перегрузки —
                это состояние, к которому человек привыкает.
              </p>
            </RevealSection>
            <RevealSection delay={280}>
              <p
                className="font-golos font-light leading-relaxed"
                style={{ fontSize: "1rem", color: "hsl(220,10%,42%)" }}
              >
                Моя задача — помочь телу выйти из этого состояния
                и вернуться к естественному балансу.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* С ЧЕМ РАБОТАЮ */}
      <section
        className="px-8 md:px-20 lg:px-32 py-16 md:py-24 lg:py-32"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
              style={{ color: "hsl(35,15%,55%)" }}
            >
              С чем работаю
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-6">
            {[
              "Напряжение и зажатость в теле",
              "Усталость и снижение ресурса",
              "Перегрузка и стресс",
              "Дискомфорт в шее, спине, пояснице",
              "Сложности с расслаблением",
              "Тревога и хроническое беспокойство",
            ].map((item, i) => (
              <RevealSection key={i} delay={i * 80}>
                <div className="flex items-start gap-4 py-3" style={{ borderBottom: "1px solid hsl(35,20%,84%)" }}>
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
        </div>
      </section>

      {/* КАК ПРОХОДИТ РАБОТА */}
      <section className="px-8 md:px-20 lg:px-32 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-16"
              style={{ color: "hsl(35,15%,55%)" }}
            >
              Как проходит работа
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { num: "01", title: "Первая встреча", desc: "Понимание состояния и первичная работа с телом" },
              { num: "02", title: "Индивидуальная практика", desc: "Работа через мягкие техники под ваш запрос" },
              { num: "03", title: "Сопровождение", desc: "Системная работа для закрепления результата" },
            ].map((step, i) => (
              <RevealSection key={i} delay={i * 150}>
                <div
                  className="flex flex-col py-8 md:py-0 md:px-10 md:border-l first:border-l-0"
                  style={{ borderColor: "hsl(35,20%,84%)" }}
                >
                  <p
                    className="font-cormorant font-light mb-5"
                    style={{ fontSize: "3.5rem", color: "hsl(35,25%,84%)", lineHeight: 1 }}
                  >
                    {step.num}
                  </p>
                  <h3
                    className="font-cormorant mb-3"
                    style={{ fontSize: "1.25rem", color: "hsl(220,12%,16%)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-golos font-light leading-relaxed text-sm"
                    style={{ color: "hsl(220,10%,45%)" }}
                  >
                    {step.desc}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* СТОИМОСТЬ */}
      <section
        className="px-8 md:px-20 lg:px-32 py-20 md:py-28 lg:py-36"
        style={{ backgroundColor: "hsl(220,12%,16%)" }}
      >
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-8"
              style={{ color: "hsl(35,25%,45%)" }}
            >
              Формат и стоимость
            </p>
            <div className="flex items-end gap-5 mb-6">
              <span
                className="font-cormorant font-light"
                style={{ fontSize: "clamp(3rem,5vw,5rem)", color: "hsl(40,30%,97%)", lineHeight: 1 }}
              >
                10 000 ₽
              </span>
              <span
                className="font-golos font-light text-sm mb-2"
                style={{ color: "hsl(35,25%,50%)" }}
              >
                первая встреча
              </span>
            </div>
            <div
              className="line-accent mb-6"
              style={{ backgroundColor: "hsl(35,25%,30%)" }}
            />
          </RevealSection>
          <RevealSection delay={200}>
            <p
              className="font-cormorant italic leading-relaxed"
              style={{ fontSize: "clamp(1.1rem,2vw,1.4rem)", color: "hsl(35,25%,55%)" }}
            >
              Сопровождение — обсуждается индивидуально,
              после понимания вашего запроса.
            </p>
            <a
              href="#contact"
              className="inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 mt-10 transition-opacity duration-300 hover:opacity-70"
              style={{
                border: "1px solid hsl(35,25%,35%)",
                color: "hsl(40,30%,97%)",
              }}
            >
              Обсудить
            </a>
          </RevealSection>
        </div>
      </section>

      {/* ПОДХОД */}
      <section className="px-8 md:px-20 lg:px-32 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-cormorant italic leading-relaxed mb-16 max-w-2xl"
              style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", color: "hsl(220,12%,24%)" }}
            >
              Я не работаю с отдельной болью.
              <br />Я работаю с состоянием тела,
              <br />в котором она появляется.
            </p>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              "Тело всегда отражает текущее состояние человека",
              "Напряжение не возникает случайно",
              "Стабильный результат важнее временного облегчения",
            ].map((q, i) => (
              <RevealSection key={i} delay={i * 120}>
                <div
                  className="py-8 md:py-0 md:px-10 md:border-l first:border-l-0"
                  style={{ borderColor: "hsl(35,20%,84%)" }}
                >
                  <div className="line-accent mb-5" />
                  <p
                    className="font-golos font-light leading-relaxed"
                    style={{ fontSize: "0.95rem", color: "hsl(220,10%,40%)" }}
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
        className="px-8 md:px-20 lg:px-32 py-16 md:py-24 lg:py-32"
        style={{ backgroundColor: "hsl(35,25%,91%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p
              className="font-golos text-xs tracking-[0.25em] uppercase mb-12"
              style={{ color: "hsl(35,15%,55%)" }}
            >
              Результат
            </p>
          </RevealSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { icon: "Wind", label: "Уходит лишнее напряжение" },
              { icon: "Feather", label: "Появляется лёгкость" },
              { icon: "BatteryCharging", label: "Восстанавливается ресурс" },
              { icon: "Sun", label: "Улучшается общее состояние" },
            ].map((r, i) => (
              <RevealSection key={i} delay={i * 100}>
                <div
                  className="flex flex-col gap-4 py-8 px-6 md:px-8 border-l first:border-l-0"
                  style={{ borderColor: "hsl(35,20%,80%)" }}
                >
                  <Icon
                    name={r.icon}
                    size={20}
                    style={{ color: "hsl(220,12%,45%)", opacity: 0.55 }}
                  />
                  <p
                    className="font-golos font-light leading-snug"
                    style={{ fontSize: "0.9rem", color: "hsl(220,12%,28%)" }}
                  >
                    {r.label}
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* НАБЛЮДЕНИЯ */}
      <section className="px-8 md:px-20 lg:px-32 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          <RevealSection>
            <p className="font-golos text-xs tracking-[0.25em] uppercase mb-6" style={{ color: "hsl(35,15%,60%)" }}>
              Из практики
            </p>
            <h2 className="font-cormorant font-light leading-tight mb-4" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: "hsl(220,12%,16%)" }}>
              Мои наблюдения
            </h2>
            <div className="line-accent mb-14" />
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {PREVIEW_OBSERVATIONS.map((obs, i) => (
              <RevealSection key={obs.number} delay={i * 100}>
                <div
                  className="relative flex flex-col p-8 h-full transition-transform duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "hsl(40,28%,94%)",
                    boxShadow: "0 2px 6px hsla(220,12%,20%,0.07), 0 8px 24px hsla(220,12%,20%,0.06)",
                    borderTop: "3px solid hsl(35,15%,78%)",
                    minHeight: "240px",
                  }}
                >
                  <div
                    className="absolute inset-x-8 bottom-8 top-20 pointer-events-none"
                    style={{
                      backgroundImage: "repeating-linear-gradient(to bottom, transparent, transparent 27px, hsl(35,20%,86%) 27px, hsl(35,20%,86%) 28px)",
                    }}
                  />
                  <div className="relative z-10">
                    <span className="font-cormorant font-light block mb-3" style={{ fontSize: "2rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}>
                      {obs.number}
                    </span>
                    <h3 className="font-cormorant mb-4 leading-snug" style={{ fontSize: "1.1rem", color: "hsl(220,12%,22%)", fontWeight: 500 }}>
                      {obs.title}
                    </h3>
                    <p className="font-golos font-light leading-relaxed" style={{ fontSize: "0.85rem", color: "hsl(220,10%,42%)" }}>
                      {obs.text}
                    </p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>

          <RevealSection>
            <Link
              to="/observations"
              className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50 inline-flex items-center gap-3"
              style={{ color: "hsl(220,12%,28%)" }}
            >
              Все наблюдения →
            </Link>
          </RevealSection>
        </div>
      </section>
    </>
  );
}