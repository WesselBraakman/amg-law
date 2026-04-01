import { useState } from "react";
import { Language, translations, t } from "@/lib/translations";
import {
  Shield,
  Scale,
  Building,
  Briefcase,
  Landmark,
  Home,
  Globe,
} from "lucide-react";

interface SpecializationSectionProps {
  lang: Language;
}

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Scale,
  Building,
  Briefcase,
  Landmark,
  Home,
  Globe,
};

export default function SpecializationSection({
  lang,
}: SpecializationSectionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="specialization" className="relative py-24 bg-[#111D33]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium">
              {t(translations.specialization.title, lang)}
            </span>
            <div className="w-12 h-px bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {t(translations.specialization.title, lang)}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            {t(translations.specialization.subtitle, lang)}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {translations.specialization.areas.map((area, index) => {
            const IconComponent = iconMap[area.icon] || Shield;
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleExpand(index)}
                className={`group relative cursor-pointer p-6 bg-[#162036]/80 border rounded-lg transition-all duration-500 ${
                  isExpanded
                    ? "border-[#C9A96E]/60 shadow-lg shadow-[#C9A96E]/5 sm:col-span-2 lg:col-span-1"
                    : "border-[#C9A96E]/10 hover:border-[#C9A96E]/30"
                }`}
              >
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 h-px bg-gradient-to-r from-[#C9A96E] to-transparent transition-all duration-700 ${
                    isExpanded ? "w-full" : "w-0 group-hover:w-1/2"
                  }`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      isExpanded
                        ? "bg-[#C9A96E] text-[#0F1729]"
                        : "bg-[#1A2744] text-[#C9A96E] group-hover:bg-[#C9A96E]/10"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold text-white mb-2">
                      {t(area.title, lang)}
                    </h3>
                    <p
                      className={`text-slate-400 text-sm leading-relaxed transition-all duration-500 ${
                        isExpanded ? "" : "line-clamp-3"
                      }`}
                    >
                      {t(area.description, lang)}
                    </p>
                    <span className="inline-block mt-3 text-[#C9A96E] text-xs tracking-wider uppercase">
                      {isExpanded
                        ? lang === "en"
                          ? "Show less"
                          : "Λιγότερα"
                        : lang === "en"
                          ? "Read more →"
                          : "Περισσότερα →"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}