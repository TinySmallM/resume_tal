import { locale as getLocaleParam } from 'next/root-params';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';

export default getRequestConfig(async () => {
  const paramValue = await getLocaleParam();

  let locale;
  if (hasLocale(routing.locales, paramValue)) {
    locale = paramValue;
  } else {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
