"use client";

import { useState } from "react";
import Link from "next/link";

import { useGlobalContext } from "@/context/GlobalContext";

import { IoClose, IoMenu } from "react-icons/io5";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { language, toggleLanguage, darkMode, toggleDarkMode } =
    useGlobalContext();

  return (
    <div className="sticky top-0 z-50 duration-300">
      <nav className="relative container flex justify-between items-center">
        <div className="py-5">
          <Link href="/" className="w-10">
            <span>Carlos Acuña</span>
          </Link>
        </div>
        <div className="absolute top-0 left-0 bg-green-500 w-full py-24">
          <ul className="flex flex-col items-center text-center gap-8">
            <li>
              <a href="#" className="nav-link">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Resume
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <button className="btn">
                <span>hire me!</span>
              </button>
            </li>
          </ul>
          <div id="nav-close">
            <IoClose />
          </div>
          <div>
            <div onClick={() => toggleDarkMode()}>
              {darkMode ? <FaRegMoon /> : <FaRegSun />}
            </div>
            <div id="hamburger">
              <IoMenu />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
