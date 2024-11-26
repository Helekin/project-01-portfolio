"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [language, setLanguage] = useState("es-EC");
  const [darkMode, setDarkMode] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es-EC" ? "en" : "es-EC"));
  };

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.add("dark");
      setDarkMode(false);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ language, toggleLanguage, darkMode, toggleDarkMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(GlobalContext);
}
