"use client";

import { setLocaleCookie } from "@/app/actions/setLocale";
import Config from "@/app/config";
import LanguageSelect from "@/components/language-select";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Github, Languages, Linkedin, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { startTransition, useEffect, useState } from "react";

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Contact", href: "#contact" },
// ];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangSelect, setShowLangSelect] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const t = useTranslations();

  useEffect(() => {
    const lang = localStorage.getItem("language") || "en";
    setCurrentLanguage(lang);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const handleResumeDownload = () => {
    if (currentLanguage === "zh") {
      window.open(
        window.location.origin + "/pdf/Jiangdu-Liu-Resume-zh.pdf",
        "_blank",
      );
    } else {
      window.open(
        window.location.origin + "/pdf/Jiangdu-Liu-Resume.pdf",
        "_blank",
      );
    }
  };
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-gray-800 bg-black/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-2xl font-bold text-transparent"
          >
            {"<Liucodes.Dev />"}
          </motion.div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </motion.button>
            ))}
          </nav> */}

          {/* Social Links & Resume */}
          <div className="hidden items-center space-x-4 md:flex">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={Config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={Config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href={`mailto:${Config.email}`}
              className="text-gray-400 transition-colors hover:text-white"
            >
              <Mail size={20} />
            </motion.a>
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="relative text-gray-400 transition-colors hover:text-white"
              onClick={() => setShowLangSelect(!showLangSelect)}
            >
              <Languages size={20} />
              {showLangSelect && (
                <LanguageSelect
                  onSelect={(lang) => {
                    localStorage.setItem("language", lang);
                    setCurrentLanguage(lang);
                    setShowLangSelect(false);
                    startTransition(() => {
                      setLocaleCookie(lang);
                    });
                  }}
                  currentLanguage={currentLanguage}
                />
              )}
            </motion.span>
            <Button
              variant="outline"
              size="sm"
              onClick={handleResumeDownload}
              className="border-blue-500 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <Download size={16} className="mr-2" />
              {t("resume")}
            </Button>
          </div>

          {/* Mobile Button */}
          <motion.span
            whileHover={{ scale: 1.1 }}
            className="relative text-gray-400 transition-colors hover:text-white md:hidden"
            onClick={() => setShowLangSelect(!showLangSelect)}
          >
            <Languages size={20} />
            {showLangSelect && (
              <LanguageSelect
                onSelect={(lang) => {
                  localStorage.setItem("language", lang);
                  setCurrentLanguage(lang);
                  setShowLangSelect(false);
                  startTransition(() => {
                    setLocaleCookie(lang);
                  });
                }}
                currentLanguage={currentLanguage}
              />
            )}
          </motion.span>
        </div>
      </div>
    </motion.header>
  );
}
