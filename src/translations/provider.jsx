"use client";
import { createContext, useContext, useState, useEffect } from "react";
const TranslationContext = createContext();

export function TranslationProvider({ children }) {
  const [translations, setTranslations] = useState({});
  const [lang, setLang] = useState("en");
  useEffect(() => {
    import(`../app/i18n/${lang}.json`).then((module) =>
      setTranslations(module.default)
    );
  }, [lang]);
  const changeLanguage = (newLang) => {
    setLang(newLang);
  };
  return (
    <TranslationContext.Provider value={{ translations, changeLanguage, lang }}>
      {children}
    </TranslationContext.Provider>
  );
}
export function useTranslation() {
  return useContext(TranslationContext);
}
