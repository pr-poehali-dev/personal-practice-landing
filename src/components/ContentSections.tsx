import Icon from "@/components/ui/icon";
import RevealSection from "@/components/RevealSection";

export default function ContentSections() {
  return (
    <>
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
    </>
  );
}
