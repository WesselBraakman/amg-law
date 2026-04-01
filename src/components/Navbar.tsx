import { useState, useEffect } from "react";
import { Language, translations, t } from "@/lib/translations";

interface NavbarProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
}

export default function Navbar({ lang, onLangChange }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const navLinks = [
    { label: t(translations.nav.home, lang), id: "hero" },
    { label: t(translations.nav.firm, lang), id: "firm" },
    { label: t(translations.nav.specialization, lang), id: "specialization" },
    { label: t(translations.nav.contact, lang), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F1729]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-3 group"
          >
            <span className="text-2xl font-bold tracking-wider text-white group-hover:text-[#C9A96E] transition-colors">
              AGM
            </span>
            <span className="text-[#C9A96E] text-sm font-light tracking-[0.3em] uppercase">
              Law
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-slate-300 hover:text-[#C9A96E] transition-colors tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-1 ml-4 bg-white/10 rounded-full p-1">
              <button
                onClick={() => onLangChange("en")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "en"
                    ? "bg-[#C9A96E] text-[#0F1729]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLangChange("gr")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "gr"
                    ? "bg-[#C9A96E] text-[#0F1729]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                GR
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 bg-white/10 rounded-full p-1">
              <button
                onClick={() => onLangChange("en")}
                className={`px-2 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "en"
                    ? "bg-[#C9A96E] text-[#0F1729]"
                    : "text-slate-400"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => onLangChange("gr")}
                className={`px-2 py-1 rounded-full text-xs font-semibold transition-all ${
                  lang === "gr"
                    ? "bg-[#C9A96E] text-[#0F1729]"
                    : "text-slate-400"
                }`}
              >
                GR
              </button>
            </div>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0F1729]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="block w-full text-left text-sm font-medium text-slate-300 hover:text-[#C9A96E] transition-colors tracking-wide uppercase py-2"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}