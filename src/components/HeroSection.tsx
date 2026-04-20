const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/30d6293c-86b2-4b4c-baf9-6d8dae9c6523/files/f240907d-2950-45d2-a11f-ba6ab4169cbf.jpg";

export default function HeroSection() {
  return (
    <>
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6"
        style={{
          backgroundColor: "hsla(40,30%,97%,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid hsl(35,25%,90%)",
        }}
      >
        <span
          className="font-cormorant text-lg uppercase"
          style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.18em" }}
        >
          СВ
        </span>
        <div className="flex items-center gap-8">
          <a
            href="/about"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Обо мне
          </a>
          <a
            href="/observations"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Наблюдения
          </a>
          <a
            href="#contact"
            className="font-golos text-xs tracking-widest uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,12%,16%)", letterSpacing: "0.2em" }}
          >
            Записаться
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col md:flex-row">
        <div className="flex flex-col justify-center px-8 md:px-20 pt-32 pb-16 md:py-0 md:w-1/2 z-10">
          <p
            className="animate-fade-up delay-100 font-golos text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "hsl(35,15%,60%)", animationDelay: "0.1s" }}
          >
            Персональная практика
          </p>
          <h1
            className="animate-fade-up font-cormorant font-light leading-[1.08] mb-8"
            style={{
              fontSize: "clamp(3rem,6vw,5.5rem)",
              color: "hsl(220,12%,16%)",
              animationDelay: "0.2s",
            }}
          >
            Сергей
            <br />
            Водопьянов
          </h1>
          <p
            className="font-cormorant"
            style={{ color: "hsl(220,12%,40%)", fontSize: "1.15rem", letterSpacing: "0.06em", marginTop: "-1.5rem", marginBottom: "2rem" }}
          >
            Телесно-ориентированный психолог
          </p>
          <div
            className="animate-fade-up line-accent mb-8"
            style={{ animationDelay: "0.35s" }}
          />
          <p
            className="animate-fade-up font-golos font-light leading-relaxed mb-4 max-w-sm"
            style={{
              fontSize: "1.05rem",
              color: "hsl(220,10%,38%)",
              animationDelay: "0.45s",
            }}
          >
            Работа с телом и состоянием
          </p>
          <p
            className="animate-fade-up font-cormorant italic leading-relaxed max-w-sm"
            style={{
              fontSize: "1.25rem",
              color: "hsl(220,10%,48%)",
              animationDelay: "0.55s",
            }}
          >
            Когда уходит избыточное напряжение —<br />
            возвращается лёгкость, устойчивость и ясность
          </p>
          <a
            href="#contact"
            className="animate-fade-up inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 mt-12 w-fit transition-opacity duration-300 hover:opacity-70"
            style={{
              backgroundColor: "hsl(220,12%,16%)",
              color: "hsl(40,30%,97%)",
              animationDelay: "0.65s",
            }}
          >
            Обсудить запрос
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2 h-64 md:h-auto relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src={HERO_IMAGE}
            alt="Пространство практики"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.9) contrast(0.95) saturate(0.8)" }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, hsl(40,30%,97%) 0%, transparent 25%)",
            }}
          />
        </div>
      </section>
    </>
  );
}