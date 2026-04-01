import { useState } from "react";
import { Language, translations, t } from "@/lib/translations";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactSectionProps {
  lang: Language;
}

export default function ContactSection({ lang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0F1729]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-medium">
              {t(translations.contact.title, lang)}
            </span>
            <div className="w-12 h-px bg-[#C9A96E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-6">
            {t(translations.contact.title, lang)}
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base">
            {t(translations.contact.subtitle, lang)}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A2744] flex items-center justify-center">
                <Clock className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {t(translations.contact.hours, lang)}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t(translations.contact.hoursValue, lang)}
                </p>
              </div>
            </div>

            {/* Athens Office */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A2744] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {t(translations.contact.athensOffice, lang)}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t(translations.contact.athensAddress, lang)}
                </p>
              </div>
            </div>

            {/* Cyclades Office */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A2744] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {t(translations.contact.cycladesOffice, lang)}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t(translations.contact.cycladesAddress, lang)}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A2744] flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {t(translations.contact.phone, lang)}
                </h4>
                <p className="text-slate-400 text-sm">+30 210 123 4567</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1A2744] flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#C9A96E]" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">
                  {t(translations.contact.email, lang)}
                </h4>
                <p className="text-slate-400 text-sm">info@agmlaw.eu</p>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-[#C9A96E]/10">
              <div
                className="w-full h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    "url('https://mgx-backend-cdn.metadl.com/generate/images/974861/2026-03-30/bbacc6ff-364a-4400-8555-ce88baf8f0f0.png')",
                }}
              >
                <div className="absolute inset-0 bg-[#0F1729]/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-[#C9A96E] mx-auto mb-2" />
                    <p className="text-white text-sm font-medium">
                      Athens & Naxos
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative p-8 bg-[#162036]/80 border border-[#C9A96E]/10 rounded-lg">
            <div className="absolute top-0 left-8 w-16 h-1 bg-[#C9A96E]" />

            {submitted && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-500/30 rounded-lg text-green-400 text-sm">
                {t(translations.contact.formSuccess, lang)}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  {t(translations.contact.formName, lang)}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-[#0F1729]/80 border border-[#C9A96E]/20 rounded-md px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C9A96E]/60 transition-colors"
                  placeholder={t(translations.contact.formName, lang)}
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  {t(translations.contact.formEmail, lang)}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-[#0F1729]/80 border border-[#C9A96E]/20 rounded-md px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C9A96E]/60 transition-colors"
                  placeholder={t(translations.contact.formEmail, lang)}
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  {t(translations.contact.formSubject, lang)}
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="w-full bg-[#0F1729]/80 border border-[#C9A96E]/20 rounded-md px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C9A96E]/60 transition-colors"
                  placeholder={t(translations.contact.formSubject, lang)}
                />
              </div>

              <div>
                <label className="block text-slate-300 text-sm font-medium mb-2">
                  {t(translations.contact.formMessage, lang)}
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-[#0F1729]/80 border border-[#C9A96E]/20 rounded-md px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#C9A96E]/60 transition-colors resize-none"
                  placeholder={t(translations.contact.formMessage, lang)}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C9A96E] text-[#0F1729] font-semibold tracking-wider uppercase text-sm rounded-md hover:bg-[#E8D5B0] transition-colors duration-300"
              >
                {t(translations.contact.formSend, lang)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}