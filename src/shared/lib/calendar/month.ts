import { format } from 'date-fns';

import { Language } from 'shared/config/language';
import { YearAndMonthFormat } from 'shared/config/calendar';
import { capitalizeFirstLetter } from 'shared/lib/strings';
import { getCalendarLocalization } from './localization';

const monthYearFormats = {
  [Language.uk]: YearAndMonthFormat.full.uk,
  [Language.en]: YearAndMonthFormat.full.en,
};

const getMonthYearFormat = (language: Language = Language.en) => {
  return monthYearFormats[language];
};

export const getMonthName = (date: Date = new Date(), language: Language = Language.en) => {
  return capitalizeFirstLetter(
    format(date, getMonthYearFormat(language), { locale: getCalendarLocalization(language) }),
  );
};
