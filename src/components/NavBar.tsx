import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavBarProps {
  variant?: "default" | "dark";
}

export default function NavBar({ variant = "default" }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isDark = variant === "dark";
  const bgColor = isDark
    ? "hsla(220,12%,16%,0.95)"
    : "hsla(40,30%,97%,0.93)";
  const textColor = isDark ? "hsl(40,30%,97%)" : "hsl(220,12%,16%)";
  const borderColor = isDark ? "hsl(220,12%,24%)" : "hsl(35,25%,90%)";

  const navLinks = [
    { to: "/about", label: "Обо мне" },
    { to: "/observations", label: "Наблюдения" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 transition-all duration-300"
        style={{
          backgroundColor: bgColor,
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${scrolled ? borderColor : "transparent"}`,
        }}
      >
        <Link
          to="/"
          className="font-cormorant text-lg uppercase shrink-0"
          style={{ color: textColor, letterSpacing: "0.18em" }}
        >
          СВ
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
              style={{ color: textColor }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={handleContact}
            className="font-golos text-xs tracking-[0.18em] uppercase transition-opacity hover:opacity-50"
            style={{ color: textColor }}
          >
            Записаться
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-7 h-7 shrink-0"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Меню"
        >
          <span
            className="block h-px w-full transition-all duration-300 origin-center"
            style={{
              backgroundColor: textColor,
              transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block h-px w-full transition-all duration-300"
            style={{
              backgroundColor: textColor,
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-px w-full transition-all duration-300 origin-center"
            style={{
              backgroundColor: textColor,
              transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10 md:hidden transition-all duration-300"
        style={{
          backgroundColor: isDark ? "hsl(220,12%,16%)" : "hsl(40,30%,97%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="font-cormorant font-light uppercase"
            style={{
              fontSize: "2rem",
              color: isDark ? "hsl(40,30%,97%)" : "hsl(220,12%,16%)",
              letterSpacing: "0.12em",
            }}
          >
            {l.label}
          </Link>
        ))}
        <button
          onClick={handleContact}
          className="font-cormorant font-light uppercase"
          style={{
            fontSize: "2rem",
            color: isDark ? "hsl(40,30%,97%)" : "hsl(220,12%,16%)",
            letterSpacing: "0.12em",
          }}
        >
          Записаться
        </button>
      </div>
    </>
  );
}