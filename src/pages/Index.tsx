import HeroSection from "@/components/HeroSection";
import ContentSections from "@/components/ContentSections";
import ContactSection from "@/components/ContactSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "hsl(40,30%,97%)" }}>
      <HeroSection />
      <ContentSections />
      <ContactSection />
    </div>
  );
}
