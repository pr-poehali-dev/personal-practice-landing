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
          <div className="flex flex-wrap items-center gap-6">
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
            <a
              href="https://t.me/osteomanual"
              target="_blank"
              rel="noopener noreferrer"
              className="font-golos text-xs tracking-[0.18em] uppercase inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, hsl(210,80%,42%), hsl(195,85%,38%))",
                color: "hsl(0,0%,100%)",
                boxShadow: "0 2px 12px hsla(210,80%,42%,0.35)",
                letterSpacing: "0.18em",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Telegram-канал
            </a>
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