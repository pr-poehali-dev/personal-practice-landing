import { useEffect } from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    num: "1",
    title: "Термины и определения",
    items: [
      { num: "1.1.", text: "Платформа (Сайт) — интернет-платформа «Водопьянов» по адресу https://vodopianov.ru." },
      { num: "1.2.", text: "Исполнитель — ИП Водопьянов Сергей Геннадьевич (ОГРНИП 321508100047334)." },
      { num: "1.3.", text: "Пользователь — физическое или юридическое лицо, использующее Платформу." },
      { num: "1.4.", text: "Информационные услуги — комплекс услуг по предоставлению доступа к Платформе, включая размещение информации и организацию взаимодействия между Пользователями." },
      { num: "1.5.", text: "Контент — любая информация, размещаемая Пользователями на Платформе." },
    ],
  },
  {
    num: "2",
    title: "Предмет договора",
    items: [
      { num: "2.1.", text: "Исполнитель предоставляет Пользователю доступ к информационным услугам Платформы, а Пользователь соблюдает условия использования и оплачивает услуги в соответствии с тарифами." },
      { num: "2.2.", text: "Платформа выполняет исключительно информационно-посреднические функции." },
      { num: "2.3.", text: "Исполнитель не является стороной договоров между Пользователями и не несёт ответственности за качество оказываемых услуг." },
    ],
  },
  {
    num: "3",
    title: "Правовой статус Платформы",
    items: [
      { num: "3.1.", text: "Платформа является информационным посредником и не осуществляет медицинскую или образовательную деятельность." },
      { num: "3.2.", text: "Вся информация носит ознакомительный и справочный характер и не является медицинской консультацией или руководством к самолечению." },
      { num: "3.3.", text: "Пользователь принимает решения о получении услуг самостоятельно и на свой риск. Перед получением услуг рекомендуется консультация с лицензированным врачом." },
    ],
  },
  {
    num: "4",
    title: "Порядок заключения договора (акцепт оферты)",
    items: [
      { num: "4.1.", text: "Акцептом является: регистрация на Платформе, начало использования функций Платформы или оплата платных услуг." },
      { num: "4.2.", text: "Совершая акцепт, Пользователь подтверждает ознакомление с условиями и полное согласие с ними." },
      { num: "4.3.", text: "Договор вступает в силу с момента акцепта." },
    ],
  },
  {
    num: "5",
    title: "Права и обязанности Исполнителя",
    items: [
      { num: "5.1.", text: "Исполнитель обязан обеспечивать работу Платформы 24/7, защищать персональные данные, предоставлять техподдержку и информировать об изменениях." },
      { num: "5.2.", text: "Исполнитель вправе изменять условия Договора, временно приостанавливать работу, удалять нарушающий контент, блокировать учётные записи нарушителей." },
    ],
  },
  {
    num: "6",
    title: "Права и обязанности Пользователей",
    items: [
      { num: "6.1.", text: "Пользователь обязан соблюдать условия Договора, предоставлять достоверную информацию, не нарушать права третьих лиц." },
      { num: "6.2.", text: "Пользователь вправе пользоваться всеми функциями Платформы в рамках выбранного тарифа и обращаться в техподдержку." },
    ],
  },
  {
    num: "7",
    title: "Стоимость услуг и порядок оплаты",
    items: [
      { num: "7.1.", text: "Стоимость услуг определяется тарифными планами, опубликованными на Платформе." },
      { num: "7.2.", text: "Оплата производится в рублях РФ любым доступным способом на Платформе." },
      { num: "7.3.", text: "Исполнитель вправе изменять стоимость услуг с уведомлением Пользователей." },
    ],
  },
  {
    num: "8",
    title: "Ответственность сторон",
    items: [
      { num: "8.1.", text: "Исполнитель не несёт ответственности за действия Пользователей, качество услуг, а также за ущерб вследствие использования информации с Платформы в медицинских целях." },
      { num: "8.2.", text: "Пользователь несёт ответственность за достоверность предоставленной информации и соблюдение условий Договора." },
    ],
  },
];

export default function Offer() {
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
      <div className="pt-40 pb-12 px-8 md:px-20 max-w-4xl mx-auto">
        <p
          className="font-golos text-xs tracking-[0.25em] uppercase mb-6"
          style={{ color: "hsl(35,15%,60%)" }}
        >
          Правовые документы
        </p>
        <h1
          className="font-cormorant font-light leading-[1.08] mb-6"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", color: "hsl(220,12%,16%)" }}
        >
          Публичная оферта
        </h1>
        <div className="line-accent mb-10" />

        {/* Meta block */}
        <div
          className="inline-flex flex-col gap-2 px-6 py-5 mb-10"
          style={{
            backgroundColor: "hsl(40,24%,92%)",
            borderLeft: "3px solid hsl(35,15%,72%)",
          }}
        >
          <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
            УТВЕРЖДЁН · Приказ ИП Водопьянов С.Г. № 3 от 13.01.2025 г.
          </p>
          <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
            Размещён на сайте: <span style={{ color: "hsl(220,12%,28%)" }}>vodopianov.ru/offer</span>
          </p>
          <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
            Дата размещения: 13.01.2025 г. · Последнее обновление: 13 января 2025 года
          </p>
        </div>

        {/* Intro */}
        <div className="flex flex-col gap-5 mb-16 max-w-2xl">
          <p className="font-golos font-light leading-relaxed" style={{ fontSize: "0.95rem", color: "hsl(220,10%,38%)" }}>
            Настоящий Публичный договор оферты (далее — «Договор») является официальным предложением ИП Водопьянова Сергея Геннадьевича (далее — «Исполнитель») заключить договор на условиях, изложенных ниже.
          </p>
          <p className="font-golos font-light leading-relaxed" style={{ fontSize: "0.95rem", color: "hsl(220,10%,38%)" }}>
            В соответствии со статьёй 437 ГК РФ данный документ является публичной офертой. Лицо, осуществившее акцепт, становится Пользователем платформы.
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-0">
          {sections.map((sec) => (
            <div
              key={sec.num}
              className="py-10"
              style={{ borderTop: "1px solid hsl(35,20%,84%)" }}
            >
              <div className="flex items-baseline gap-5 mb-6">
                <span
                  className="font-cormorant font-light shrink-0"
                  style={{ fontSize: "2rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}
                >
                  {sec.num}
                </span>
                <h2
                  className="font-cormorant"
                  style={{ fontSize: "1.25rem", color: "hsl(220,12%,20%)", fontWeight: 500 }}
                >
                  {sec.title}
                </h2>
              </div>
              <div className="flex flex-col gap-4 max-w-2xl">
                {sec.items.map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span
                      className="font-golos text-xs shrink-0 mt-0.5"
                      style={{ color: "hsl(35,15%,64%)", minWidth: "2.2rem" }}
                    >
                      {item.num}
                    </span>
                    <p
                      className="font-golos font-light leading-relaxed"
                      style={{ fontSize: "0.92rem", color: "hsl(220,10%,38%)" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Реквизиты */}
          <div className="py-10" style={{ borderTop: "1px solid hsl(35,20%,84%)" }}>
            <div className="flex items-baseline gap-5 mb-6">
              <span
                className="font-cormorant font-light shrink-0"
                style={{ fontSize: "2rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}
              >
                9
              </span>
              <h2
                className="font-cormorant"
                style={{ fontSize: "1.25rem", color: "hsl(220,12%,20%)", fontWeight: 500 }}
              >
                Реквизиты Исполнителя
              </h2>
            </div>
            <div
              className="flex flex-col gap-3 max-w-sm px-6 py-5"
              style={{
                backgroundColor: "hsl(40,24%,92%)",
                borderLeft: "3px solid hsl(35,15%,72%)",
              }}
            >
              {[
                ["Исполнитель", "ИП Водопьянов Сергей Геннадьевич"],
                ["ОГРНИП", "321508100047334"],
                ["Email", "mail@svodopianoff.ru"],
                ["Телефон", "+7 (902) 900-74-74"],
                ["Сайт", "vodopianov.ru"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <span
                    className="font-golos text-xs shrink-0"
                    style={{ color: "hsl(35,15%,60%)", minWidth: "5rem" }}
                  >
                    {label}
                  </span>
                  <span
                    className="font-golos font-light text-xs"
                    style={{ color: "hsl(220,12%,28%)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BACK */}
      <div className="px-8 md:px-20 py-16 max-w-4xl mx-auto">
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
