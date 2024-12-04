"use client";

import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";

const WebNav = () => {
  const pathname = usePathname();
  
  const t = useTranslations("Navbar");

  return (
    <nav className="flex gap-8">
      <Link
        href="/"
        className={`${
          pathname === "/" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {t("home")}
      </Link>
      <Link
        href="/services"
        className={`${
          pathname === "/services" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {t("services")}
      </Link>
      <Link
        href="/resume"
        className={`${
          pathname === "/resume" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {t("resume")}
      </Link>
      <Link
        href="/projects"
        className={`${
          pathname === "/projects" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {t("projects")}
      </Link>
      <Link
        href="/contact"
        className={`${
          pathname === "/contact" && "text-accent border-b-2 border-accent"
        } capitalize font-medium hover:text-accent transition-all`}
      >
        {t("contact")}
      </Link>
    </nav>
  );
};

export default WebNav;
