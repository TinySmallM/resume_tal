import { useFormatter, useLocale } from 'next-intl';

export interface UseFormattedDateOptions {
  /** Если true, вернет только год (например, "2019"). По умолчанию false. */
  yearOnly?: boolean;
}

export function useFormattedDate() {
  const format = useFormatter();
  const locale = useLocale();

  return {
    formatDate: (dateString: string, options: UseFormattedDateOptions = {}) => {
      const date = new Date(dateString);

      if (Number.isNaN(date.getTime())) {
        return `[useFormattedDate] Invalid date string: ${dateString}`;
      }

      if (options.yearOnly) {
        return format.dateTime(date, { year: 'numeric', timeZone: 'UTC' });
      }

      const formatted = format.dateTime(date, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
      });

      if (locale === 'ru') {
        return formatted.replace(' г.', '');
      }

      return formatted;
    },
  };
}
