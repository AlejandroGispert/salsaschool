// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend"; // Allows loading translations from your server
import LanguageDetector from "i18next-browser-languagedetector"; // Detects user language
import { initReactI18next } from "react-i18next";

// Initialize i18next
i18n
  .use(Backend) // Load translations using HTTP backend
  .use(LanguageDetector) // Detect language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Enable debugging
    lng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
  });

export default i18n;
