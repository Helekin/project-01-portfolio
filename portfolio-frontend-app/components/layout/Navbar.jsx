"use client";

import { useState } from "react";
import Link from "next/link";

import { useGlobalContext } from "@/context/GlobalContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, toggleLanguage } = useGlobalContext();

  return (
    <nav className="bg-black-950 border-black-200 py-4">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-black-50">
            Carlos Acuña
          </span>
        </Link>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <Link
            href="/"
            className="text-black-50 bg-green-500 hover:bg-green-600 focus:right-4 focus:ring-green-500 focus:outline-none font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
          >
            {language === "es" ? "Contact" : "Contacto"}
          </Link>
          <button
            onClick={toggleLanguage}
            className="text-black-50 ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:outline-none"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-green-500 rounded-lg lg:hidden hover:bg-black-100 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-black-50 hover:text-green-300 bg-green-500 rounded lg:bg-transparent lg:p-0"
              aria-current="page"
            >
              {language === "es" ? "About me" : "Sobre mí"}
            </Link>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-black-50 hover:text-green-300 lg:bg-transparent lg:p-0"
            >
              {language === "es" ? "Prices & Services" : "Precios y Servicios"}
            </Link>
            <Link
              href="/"
              className="block py-2 pl-3 pr-4 text-black-50 hover:text-green-300 lg:bg-transparent lg:p-0"
            >
              {language === "es" ? "Projects" : "Proyectos"}
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
