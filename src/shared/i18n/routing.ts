import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  // Опционально: 'always' добавляет префикс даже для defaultLocale (например, /ru/about)
  // По умолчанию: 'as-needed' (для ru будет просто /, для en будет /en)
  localePrefix: 'as-needed', 
});
