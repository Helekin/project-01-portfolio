"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const WebNav = ({ language }) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`${
            pathname === link.path && "text-accent border-b-2 border-accent"
          } capitalize font-medium hover:text-accent transition-all`}
        >
          {language === "es-EC" ? link.nameES : link.nameEN}
        </Link>
      ))}
    </nav>
  );
};

export default WebNav;
