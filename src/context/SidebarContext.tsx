/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { createContext, useState, useEffect } from "react";

type Language = "en" | "bn" | "ar";

export const SidebarContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {},
  language: "en" as Language,
  changeLanguage: (_lang: Language) => {},
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");

  React.useEffect(() => {
    const savedLang = localStorage.getItem("app_lang") as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("app_lang", lang);
  };

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        toggle,
        close,
        language,
        changeLanguage,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
