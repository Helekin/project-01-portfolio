"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaTimes, FaBars } from "react-icons/fa";

import Button from "../ui/Button";

const links = [
  {
    nameES: "Inicio",
    nameEN: "Home",
    path: "/",
  },
  {
    nameES: "Servicios",
    nameEN: "Services",
    path: "/services",
  },
  {
    nameES: "Resumen",
    nameEN: "Resume",
    path: "/resume",
  },
  {
    nameES: "Proyectos",
    nameEN: "Projects",
    path: "/projects",
  },
  {
    nameES: "Contacto",
    nameEN: "Contact",
    path: "/contact",
  },
];

const MobileNav = ({ language, toggleLanguage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className={`text-2xl ${
                    pathname === link.path && "text-accent font-semibold"
                  } capitalize hover:text-accent transition-all`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {language === "es-EC" ? link.nameES : link.nameEN}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => toggleLanguage()}
            className="w-12 h-12 border-2 border-accent hover:bg-accent text-accent hover:text-white text-center rounded-full flex justify-center items-center mt-8 font-bold hover:transition-all duration-500"
          >
            {language === "es-EC" ? "EN" : "ES"}
          </Button>
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
