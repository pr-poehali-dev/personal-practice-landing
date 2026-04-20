import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) {
      setTimeout(() => setVisible(true), 1000);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-5 md:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      style={{
        backgroundColor: "hsl(220,12%,14%)",
        borderTop: "1px solid hsl(220,12%,22%)",
      }}
    >
      <p className="font-golos font-light leading-relaxed" style={{ fontSize: "0.82rem", color: "hsl(35,20%,70%)", maxWidth: "600px" }}>
        Мы используем файлы cookie для улучшения работы сайта. Продолжая пользоваться сайтом, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline underline-offset-2 transition-opacity hover:opacity-60" style={{ color: "hsl(35,20%,82%)" }}>
          политикой конфиденциальности
        </a>.
      </p>
      <button
        onClick={accept}
        className="font-golos text-xs tracking-[0.18em] uppercase px-6 py-3 shrink-0 transition-opacity hover:opacity-70"
        style={{ backgroundColor: "hsl(40,30%,97%)", color: "hsl(220,12%,16%)" }}
      >
        Принять
      </button>
    </div>
  );
}
