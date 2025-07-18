// src/hooks/useLanguage.ts
"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "../i18n/useTranslation";

type Language = "en" | "fr";

export function useLanguage() {
  // Get persist language
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "en";
    return localStorage.getItem("locale") === "fr" ? "fr" : "en";
  });

  useEffect(() => {
    localStorage.setItem("locale", language);
  }, [language]);

  //  Grab  JSON in one line
  const t = useTranslations(language);

  // Toggle helper
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "en" ? "fr" : "en"));

  return { language, t, toggleLanguage };
}
