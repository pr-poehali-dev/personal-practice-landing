import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleContact = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <footer
      className="px-6 md:px-12 lg:px-20 pt-10 pb-12"
      style={{ borderTop: "1px solid hsl(35,25%,85%)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
          <a
            href="/"
            className="font-cormorant text-xl uppercase"
            style={{ color: "hsl(220,12%,22%)", letterSpacing: "0.22em" }}
          >
            СВ
          </a>
          <div className="flex flex-wrap gap-6">
            <a href="/about" className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,36%)" }}>
              Обо мне
            </a>
            <a href="/observations" className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,36%)" }}>
              Наблюдения
            </a>
            <a href="/contacts" className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,36%)" }}>
              Контакты
            </a>
            <button onClick={handleContact} className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,36%)" }}>
              Записаться
            </button>
          </div>
        </div>

        <div style={{ height: "1px", backgroundColor: "hsl(35,20%,88%)", marginBottom: "1.5rem" }} />

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(35,15%,58%)" }}>
            © 2026 ИП Водопьянов С.Г.&nbsp;&nbsp;·&nbsp;&nbsp;ОГРНИП 321508100047334&nbsp;&nbsp;·&nbsp;&nbsp;Все права защищены
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="font-golos text-xs transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,48%)" }}>
              Политика конфиденциальности
            </a>
            <a href="/offer" className="font-golos text-xs transition-opacity hover:opacity-50" style={{ color: "hsl(220,12%,48%)" }}>
              Оферта
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
