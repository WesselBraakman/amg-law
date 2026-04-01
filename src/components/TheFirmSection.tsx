import { Language, translations, t } from "@/lib/translations";

interface TheFirmSectionProps {
  lang: Language;
}

export default function TheFirmSection({ lang }: TheFirmSectionProps) {
  return (
    <section id="firm" className="relative py-24 bg-[#0F1729]">
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/ef87792a-d0d9-474c-ac5f-8fa8d3e04085.png')",
        }}
      />
      <div className="absolute inset-0 bg-[#0F1729]/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium">
              {t(translations.firm.title, lang)}
            </span>
            <div className="w-12 h-px bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {t(translations.firm.title, lang)}
          </h2>
        </div>

        {/* Firm Description */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative p-8 sm:p-12 bg-[#162036]/80 border border-[#C9A96E]/20 rounded-lg">
            <div className="absolute top-0 left-8 w-16 h-1 bg-[#C9A96E]" />
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
              {t(translations.firm.description, lang)}
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            {t(translations.firm.teamTitle, lang)}
          </h3>
          <div className="w-16 h-px bg-[#C9A96E] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {translations.firm.members.map((member, index) => (
            <div
              key={index}
              className="group relative p-8 bg-[#162036]/80 border border-[#C9A96E]/10 hover:border-[#C9A96E]/40 rounded-lg transition-all duration-500"
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-px bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-700" />

              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-[#1A2744] border-2 border-[#C9A96E]/30 flex items-center justify-center mb-6 group-hover:border-[#C9A96E] transition-colors">
                <span className="text-[#C9A96E] text-2xl font-serif font-bold">
                  {t(member.name, lang)
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>

              <h4 className="text-xl font-serif font-bold text-white mb-1">
                {t(member.name, lang)}
              </h4>
              <p className="text-[#C9A96E] text-sm tracking-wider uppercase mb-4 font-medium">
                {t(member.role, lang)}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t(member.description, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}