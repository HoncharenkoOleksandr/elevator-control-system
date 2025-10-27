import React from "react";
import { useI18n } from "../../i18n/Context";
import { SupportedLocale } from "../../i18n/config";
import * as S from "./styles";

const languages: { code: SupportedLocale; name: string }[] = [
  { code: "en", name: "English" },
  { code: "es", name: "Español" },
  { code: "fr", name: "Français" },
  { code: "de", name: "Deutsch" },
];

export const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useI18n();

  return (
    <S.LanguageSelectorContainer>
      {languages.map((language) => (
        <S.LanguageButton
          key={language.code}
          onClick={() => setLocale(language.code)}
          isActive={locale === language.code}
        >
          {language.name}
        </S.LanguageButton>
      ))}
    </S.LanguageSelectorContainer>
  );
};
