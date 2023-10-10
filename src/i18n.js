import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import enTranslation from './translations/en/translation.json';
import frTranslation from './translations/fr/translation.json';
import esTranslation from './translations/es/translation.json';
import itTranslation from './translations/it/translation.json';
import ruTranslation from './translations/ru/translation.json';

i18n
  .use(Backend)
  .use(I18nextBrowserLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      fr: {
        translation: frTranslation
      },
      es: {
        translation: esTranslation
      },
      it: {
        translation: itTranslation
      },
      ru: {
        translation: ruTranslation
      }
    },
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;