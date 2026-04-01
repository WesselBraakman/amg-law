import { useState } from "react";
import { Language } from "@/lib/translations";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheFirmSection from "@/components/TheFirmSection";
import SpecializationSection from "@/components/SpecializationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <div className="min-h-screen bg-[#0F1729] text-white">
      <Navbar lang={lang} onLangChange={setLang} />
      <HeroSection lang={lang} />
      <TheFirmSection lang={lang} />
      <SpecializationSection lang={lang} />
      <ContactSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}