import NavBar from "@/components/NavBar";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/30d6293c-86b2-4b4c-baf9-6d8dae9c6523/files/f240907d-2950-45d2-a11f-ba6ab4169cbf.jpg";

export default function HeroSection() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden">
        {/* Text side */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 pt-28 pb-16 md:py-0 md:w-1/2 lg:w-5/12 z-10 relative">
          <p
            className="animate-fade-up font-golos text-xs tracking-[0.25em] uppercase mb-8"
            style={{ color: "hsl(35,15%,60%)", animationDelay: "0.1s" }}
          >
            Персональная практика
          </p>
          <h1
            className="animate-fade-up font-cormorant font-light leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(3rem,6vw,6rem)",
              color: "hsl(220,12%,16%)",
              animationDelay: "0.2s",
            }}
          >
            Сергей
            <br />
            Водопьянов
          </h1>
          <p
            className="animate-fade-up font-cormorant mb-8"
            style={{
              color: "hsl(220,12%,40%)",
              fontSize: "clamp(1rem,1.5vw,1.2rem)",
              letterSpacing: "0.06em",
              animationDelay: "0.28s",
            }}
          >
            Телесно-ориентированный психолог
          </p>
          <div
            className="animate-fade-up line-accent mb-8"
            style={{ animationDelay: "0.35s" }}
          />
          <p
            className="animate-fade-up font-cormorant italic leading-relaxed max-w-sm"
            style={{
              fontSize: "clamp(1.1rem,1.8vw,1.3rem)",
              color: "hsl(220,10%,44%)",
              animationDelay: "0.45s",
            }}
          >
            Когда уходит избыточное напряжение —
            <br />возвращается лёгкость, устойчивость и ясность
          </p>
          <a
            href="#contact"
            className="animate-fade-up inline-block font-golos text-xs tracking-[0.2em] uppercase px-8 py-4 mt-12 w-fit transition-opacity duration-300 hover:opacity-70"
            style={{
              backgroundColor: "hsl(220,12%,16%)",
              color: "hsl(40,30%,97%)",
              animationDelay: "0.58s",
            }}
          >
            Обсудить запрос
          </a>
        </div>

        {/* Image side */}
        <div
          className="md:w-1/2 lg:w-7/12 h-64 md:h-auto relative animate-fade-in"
          style={{ animationDelay: "0.25s" }}
        >
          <img
            src={HERO_IMAGE}
            alt="Пространство практики"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.9) contrast(0.95) saturate(0.8)" }}
          />
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: "linear-gradient(to right, hsl(40,30%,97%) 0%, transparent 20%)",
            }}
          />
        </div>
      </section>
    </>
  );
}
