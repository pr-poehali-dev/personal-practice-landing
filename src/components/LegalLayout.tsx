import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";

interface LegalItem {
  num: string;
  text: string;
}

interface LegalSection {
  num: string;
  title: string;
  items: LegalItem[];
}

interface MetaInfo {
  approved: string;
  url: string;
  date: string;
  updated?: string;
}

interface LegalLayoutProps {
  label: string;
  title: string;
  meta: MetaInfo;
  intro: string[];
  sections: LegalSection[];
  extraSection?: React.ReactNode;
}

export default function LegalLayout({ label, title, meta, intro, sections, extraSection }: LegalLayoutProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <NavBar />

      <div className="pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p
            className="font-golos text-xs tracking-[0.25em] uppercase mb-5"
            style={{ color: "hsl(35,15%,60%)" }}
          >
            {label}
          </p>
          <h1
            className="font-cormorant font-light leading-[1.05] mb-6"
            style={{ fontSize: "clamp(2rem,4vw,4rem)", color: "hsl(220,12%,16%)" }}
          >
            {title}
          </h1>
          <div className="line-accent mb-10" />

          {/* Meta */}
          <div
            className="inline-flex flex-col gap-2 px-5 py-4 mb-10"
            style={{ backgroundColor: "hsl(40,24%,92%)", borderLeft: "3px solid hsl(35,15%,72%)" }}
          >
            <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
              {meta.approved}
            </p>
            <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
              Размещён на сайте: <span style={{ color: "hsl(220,12%,28%)" }}>{meta.url}</span>
            </p>
            <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(220,12%,40%)" }}>
              Дата размещения: {meta.date}{meta.updated ? ` · Последнее обновление: ${meta.updated}` : ""}
            </p>
          </div>

          {/* Intro */}
          <div className="flex flex-col gap-4 max-w-2xl">
            {intro.map((p, i) => (
              <p key={i} className="font-golos font-light leading-relaxed" style={{ fontSize: "0.95rem", color: "hsl(220,10%,38%)" }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Content: sidebar TOC on lg + main text */}
        <div className="grid grid-cols-1 lg:grid-cols-[14rem_1fr] gap-10 lg:gap-16">

          {/* Sticky TOC — desktop only */}
          <nav className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-2">
              <p className="font-golos text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "hsl(35,15%,60%)" }}>
                Разделы
              </p>
              {sections.map((sec) => (
                <a
                  key={sec.num}
                  href={`#sec-${sec.num}`}
                  className="font-golos text-xs leading-snug transition-opacity hover:opacity-60 py-1"
                  style={{ color: "hsl(220,12%,40%)" }}
                >
                  {sec.num}. {sec.title}
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          <div className="flex flex-col gap-0">
            {sections.map((sec) => (
              <div
                key={sec.num}
                id={`sec-${sec.num}`}
                className="py-10"
                style={{ borderTop: "1px solid hsl(35,20%,84%)" }}
              >
                <div className="flex items-baseline gap-5 mb-6">
                  <span
                    className="font-cormorant font-light shrink-0"
                    style={{ fontSize: "1.8rem", color: "hsl(35,15%,72%)", lineHeight: 1 }}
                  >
                    {sec.num}
                  </span>
                  <h2
                    className="font-cormorant"
                    style={{ fontSize: "clamp(1rem,1.6vw,1.25rem)", color: "hsl(220,12%,20%)", fontWeight: 500 }}
                  >
                    {sec.title}
                  </h2>
                </div>
                <div className="flex flex-col gap-4 max-w-2xl">
                  {sec.items.map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span
                        className="font-golos text-xs shrink-0 mt-0.5"
                        style={{ color: "hsl(35,15%,64%)", minWidth: "2.4rem" }}
                      >
                        {item.num}
                      </span>
                      <p
                        className="font-golos font-light leading-relaxed whitespace-pre-line"
                        style={{ fontSize: "0.92rem", color: "hsl(220,10%,38%)" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            {extraSection}
          </div>
        </div>

        {/* Back */}
        <div className="mt-16 pt-10" style={{ borderTop: "1px solid hsl(35,20%,86%)" }}>
          <Link
            to="/"
            className="font-golos text-xs tracking-[0.2em] uppercase transition-opacity hover:opacity-50"
            style={{ color: "hsl(220,10%,56%)" }}
          >
            ← Главная
          </Link>
        </div>
      </div>
    </div>
  );
}
