export type SupportedLocale = "en" | "es" | "fr" | "de";

export interface TranslationData {
  [key: string]: string | TranslationData;
}

export class I18nService {
  private currentLocale: SupportedLocale = "en";
  private translations: Map<SupportedLocale, TranslationData> = new Map();

  constructor() {
    // Translations will be loaded from JSON files
  }

  setLocale(locale: SupportedLocale): void {
    this.currentLocale = locale;
  }

  getCurrentLocale(): SupportedLocale {
    return this.currentLocale;
  }

  async loadTranslations(
    locale: SupportedLocale,
    data: TranslationData
  ): Promise<void> {
    this.translations.set(locale, data);
  }

  t(key: string, params?: Record<string, string | number>): string {
    const translation = this.getTranslation(key);

    if (!params) {
      return translation;
    }

    let result = translation;
    Object.keys(params).forEach((paramKey) => {
      result = result.replace(`{{${paramKey}}}`, String(params[paramKey]));
    });

    return result;
  }

  private getTranslation(key: string): string {
    const translation = this.translations.get(this.currentLocale);
    if (!translation) {
      return key;
    }

    const keys = key.split(".");
    let value: string | TranslationData = translation;

    for (const k of keys) {
      if (typeof value === "object" && value !== null && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === "string" ? value : key;
  }
}

export const i18n = new I18nService();
