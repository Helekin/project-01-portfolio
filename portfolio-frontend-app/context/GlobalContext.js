"use client";

import { createContext, useContext, useState } from "react";

import { setUserLocale } from "@/services/locale";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [language, setLanguage] = useState("es-EC");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es-EC" ? "en" : "es-EC"));
    const newLanguage = language === "es-EC" ? "en" : "es-EC";
    setUserLocale(newLanguage);
  };

  return (
    <GlobalContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
