import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { JetBrains_Mono } from "next/font/google";

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

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <GlobalProvider>
      <html lang={locale}>
        <body className={`${jetBrainsMono.className}`}>
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main>{children}</main>
          </NextIntlClientProvider>
        </body>
      </html>
    </GlobalProvider>
  );
}
