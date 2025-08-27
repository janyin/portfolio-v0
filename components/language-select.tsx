"use client";

import Config from "@/app/config";
import { motion } from "framer-motion";

interface LanguageSelectProps {
  onSelect: (lang: string) => void;
  currentLanguage: string;
}

export default function LanguageSelect({
  onSelect,
  currentLanguage,
}: LanguageSelectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute right-0 z-50 mt-2 w-40 rounded-md border border-gray-700 bg-black/80 shadow-lg backdrop-blur-md"
    >
      {Config.languages.map((lang, index) => (
        <button
          key={index}
          onClick={() => onSelect(lang.code)}
          className={`block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-blue-500 hover:text-white ${currentLanguage === lang.code ? "font-bold" : ""}`}
        >
          {lang.label}
        </button>
      ))}
    </motion.div>
  );
}
