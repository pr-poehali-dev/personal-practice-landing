import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import ContactSection from "@/components/ContactSection";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function Index() {
  usePageMeta({
    title: "Сергей Водопьянов — Телесно-ориентированный психолог. Москва",
    description: "Персональная работа с телом и состоянием. Снятие хронического напряжения, усталости и стресса. Телесно-ориентированная терапия, регуляция нервной системы. Москва.",
    keywords: "телесно-ориентированный психолог Москва, работа с телом, снятие напряжения, телесная терапия, регуляция нервной системы, стресс усталость, психолог Водопьянов",
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <HeroSection />
      <ContentSections />
      <ContactSection />
    </div>
  );
}
