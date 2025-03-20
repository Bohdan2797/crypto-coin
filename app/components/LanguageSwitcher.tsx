"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import type { SupportedLanguages } from "../types/translation";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: SupportedLanguages) => {
    setLanguage(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[50px] h-[50px]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-full flex items-center justify-center text-white rounded-t-[4px] border-0 relative bg-linear-30 from-[#2E7A] to-[#2E727A]"
        
      >
        {language.toUpperCase()}
      </button>

      <span 
        className="text-white absolute top-1/2 right-[-20px] transform -translate-y-1/2 transition-transform duration-200"
        style={{ transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)" }}
      >
        ❯
      </span>

      {isOpen && (
        <div className="absolute top-full left-0 w-[50px] bg-black/10 rounded-b-[4px] overflow-hidden z-20">
          {(["en", "ru", "de"] as SupportedLanguages[]).map((lang) => (
            <button
              key={lang}
              onClick={() => handleSelect(lang)}
              className="w-full text-white text-center py-2 hover:bg-gray-800 transition"
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
