import React, { createContext, useContext, useEffect, useState } from "react";
import type { SupportedLocale, TranslationData } from "./config";
import { i18n } from "./config";

export type { SupportedLocale };

interface I18nContextType {
  t: (key: string, params?: Record<string, string | number>) => string;
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};

interface I18nProviderProps {
  children: React.ReactNode;
  defaultLocale?: SupportedLocale;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  defaultLocale = "en",
}) => {
  const [locale, setLocaleState] = useState<SupportedLocale>(defaultLocale);
  const [translationsLoaded, setTranslationsLoaded] = useState(false);

  useEffect(() => {
    const loadTranslation = async (localeKey: SupportedLocale) => {
      try {
        const translation = await import(`./locales/${localeKey}.json`);
        await i18n.loadTranslations(
          localeKey,
          translation.default as TranslationData
        );
        if (localeKey === defaultLocale) {
          setTranslationsLoaded(true);
        }
      } catch (error) {
        console.error(`Failed to load translation for ${localeKey}:`, error);
      }
    };

    loadTranslation(locale).then(() => {
      if (!translationsLoaded) {
        setTranslationsLoaded(true);
      }
    });
  }, [locale, defaultLocale, translationsLoaded]);

  const setLocale = (newLocale: SupportedLocale) => {
    setLocaleState(newLocale);
    i18n.setLocale(newLocale);
  };

  const t = (key: string, params?: Record<string, string | number>) => {
    return i18n.t(key, params);
  };

  if (!translationsLoaded) {
    return <div>Loading translations...</div>;
  }

  return (
    <I18nContext.Provider value={{ t, locale, setLocale }}>
      {children}
    </I18nContext.Provider>
  );
};
