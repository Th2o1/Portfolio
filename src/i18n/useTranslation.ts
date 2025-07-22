/* eslint-disable */
import en from "../../locales/en.json";
import fr from "../../locales/fr.json";

type Locale = "en" | "fr";

// A record of all loaded translation objects:
const allTranslations: Record<Locale, Record<string, any>> = {
  en,
  fr,
};

/**
 * useTranslations hook
 * @param locale - string key of the current language ("en" or "fr")
 * @returns the JSON object for that language
 *
 * Usage: const t = useTranslations(locale);
 * then t.navbar.home, t.about.paragraph, etc.
 */
export function useTranslations(locale: Locale) {
  // Fallback to 'en' if someone passes an unsupported locale
  if (!Object.prototype.hasOwnProperty.call(allTranslations, locale)) {
    return allTranslations["en"];
  }
  return allTranslations[locale];
}
/* eslint-enable */
