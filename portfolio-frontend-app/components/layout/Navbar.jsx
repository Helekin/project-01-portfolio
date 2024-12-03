"use client";

import Link from "next/link";

import { FaRegMoon, FaRegSun } from "react-icons/fa";

import WebNav from "./WebNav";
import MobileNav from "./MobileNav";
import Button from "../ui/Button";

import { useGlobalContext } from "@/context/GlobalContext";

const Navbar = () => {
  const { language, toggleLanguage } = useGlobalContext();

  return (
    <div className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Carlos<span className="text-accent">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <WebNav language={language} />
          <Button
            onClick={() => toggleLanguage()}
            className="w-12 h-12 border-2 border-accent hover:bg-accent text-accent hover:text-white text-center rounded-full flex justify-center items-center font-bold hover:transition-all duration-500"
          >
            {language === "es-EC" ? "EN" : "ES"}
          </Button>
        </div>
        <div className="xl:hidden">
          <MobileNav language={language} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
