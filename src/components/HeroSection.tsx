import { Language, translations, t } from "@/lib/translations";

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/87ff14e7-f241-418f-8917-a5f38624c4cd.png')",
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F1729]/80 via-[#0F1729]/60 to-[#0F1729]/95" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-16 h-px bg-[#C9A96E]" />
          <div className="w-2 h-2 rotate-45 border border-[#C9A96E]" />
          <div className="w-16 h-px bg-[#C9A96E]" />
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-[0.2em] text-white mb-4 font-serif">
          AGM
        </h1>
        <p className="text-[#C9A96E] text-lg sm:text-xl tracking-[0.4em] uppercase font-light mb-6">
          {t(translations.hero.subtitle, lang)}
        </p>

        {/* Decorative line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="w-24 h-px bg-[#C9A96E]/50" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#C9A96E]" />
          <div className="w-24 h-px bg-[#C9A96E]/50" />
        </div>

        <p className="text-slate-300 text-base sm:text-lg font-light tracking-wide mb-12 max-w-2xl mx-auto">
          {t(translations.hero.tagline, lang)}
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[#C9A96E] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#0F1729] transition-all duration-300 tracking-widest uppercase text-sm font-medium rounded-sm"
        >
          {t(translations.hero.cta, lang)}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#C9A96E]/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#C9A96E]/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}