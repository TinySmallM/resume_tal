import ru from './messages/en.json';

// Определение ключей в useTranslations
type Locale = typeof ru;
  
declare module 'next-intl' {
  interface AppConfig {
    Messages: Locale;
  }
}
