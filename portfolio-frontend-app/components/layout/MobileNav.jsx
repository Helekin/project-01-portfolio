"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { FaTimes, FaBars } from "react-icons/fa";

const MobileNav = ({ language, toggleLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const t = useTranslations("Navbar");

  return (
    <div className="relative">
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="text-2xl text-white focus:outline-none"
      >
        {!isMobileMenuOpen && <FaBars />}
      </button>

      {isMobileMenuOpen && (
        <nav className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center z-50">
          <ul className="flex flex-col items-center gap-8">
            <Link
              href="/"
              className={`text-2xl ${
                pathname === "/" && "text-accent font-semibold"
              } capitalize hover:text-accent transition-all`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("home")}
            </Link>
            <Link
              href="/services"
              className={`text-2xl ${
                pathname === "/services" && "text-accent font-semibold"
              } capitalize hover:text-accent transition-all`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("services")}
            </Link>
            <Link
              href="/resume"
              className={`text-2xl ${
                pathname === "/resume" && "text-accent font-semibold"
              } capitalize hover:text-accent transition-all`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("resume")}
            </Link>
            <Link
              href="/projects"
              className={`text-2xl ${
                pathname === "/projects" && "text-accent font-semibold"
              } capitalize hover:text-accent transition-all`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className={`text-2xl ${
                pathname === "/contact" && "text-accent font-semibold"
              } capitalize hover:text-accent transition-all`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("contact")}
            </Link>
          </ul>
          <button
            onClick={() => {
              toggleLanguage();
              setIsMobileMenuOpen(false);
            }}
            className="w-12 h-12 border-2 border-accent hover:bg-accent text-accent hover:text-white text-center rounded-full flex justify-center items-center mt-8 font-bold hover:transition-all duration-500"
          >
            {language === "es-EC" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            <FaTimes />
          </button>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
