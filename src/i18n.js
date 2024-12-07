import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // Загружаем переводы из файлов
  .use(LanguageDetector) // Определяем язык браузера
  .use(initReactI18next) // Подключаем React
  .init({
    fallbackLng: 'ru', // Язык по умолчанию
    debug: true, // Включите отладку для проверки ошибок
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Путь к файлам перевода
    },
    interpolation: {
      escapeValue: false, // React автоматически экранирует HTML
    },
  });

export default i18n;
