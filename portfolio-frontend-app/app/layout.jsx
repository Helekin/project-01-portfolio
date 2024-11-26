import { Poppins, Londrina_Outline } from "next/font/google";

import Navbar from "@/components/layout/Navbar";

import { GlobalProvider } from "@/context/GlobalContext";

import "./globals.css";

export const metadata = {
  title: "Full Stack Developer - Carlos José Acuña",
  keywords:
    "Desarrollador Full Stack, soluciones innovadoras, aplicaciones web, móviles, software de escritorio, robótica",
  description:
    "Desarrollador Full Stack especializado en crear soluciones innovadoras. Aplicaciones web, móviles, software de escritorio y proyectos de robótica a tu medida. ¡Transforma tus ideas en realidad!",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <GlobalProvider>
      <html>
        <body className={poppins.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </GlobalProvider>
  );
}
