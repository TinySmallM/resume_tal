import createMiddleware from 'next-intl/middleware';

import { routing } from '@/shared/i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Применяем ко всем путям, кроме системных и статических файлов
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
