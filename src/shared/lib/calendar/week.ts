import { format, addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek } from 'date-fns';

import { Language } from 'shared/config/language';
import { DaysInWeek } from 'shared/config/calendar';
import { getCalendarLocalization } from './localization';
import { getDayFormat, getWeekStartsOn } from './day';

const generateWeek = (date: Date) => {
  let currentDate = date;
  const week = [];

  for (let day = 0; day < DaysInWeek; day++) {
    week.push(currentDate);

    currentDate = addDays(currentDate, 1);
  }
  return week;
};

export const getWeeks = (date: Date = new Date(), language: Language = Language.en) => {
  const option = { weekStartsOn: getWeekStartsOn(language) };

  const startOfTheSelectedMonth = startOfMonth(date);
  const endOfTheSelectedMonth = endOfMonth(date);
  const startDate = startOfWeek(startOfTheSelectedMonth, option);
  const endDate = endOfWeek(endOfTheSelectedMonth, option);

  let currentDate = startDate;

  const weeks = [];

  while (currentDate <= endDate) {
    weeks.push(generateWeek(currentDate));
    currentDate = addDays(currentDate, DaysInWeek);
  }

  return weeks;
};

export const getWeekDaysNames = (date: Date = new Date(), language: Language = Language.en) => {
  const weekDays = [];

  const weekStartDate = startOfWeek(date, { weekStartsOn: getWeekStartsOn(language) });

  let currentDate = 0;

  while (currentDate < DaysInWeek) {
    weekDays.push(
      format(addDays(weekStartDate, currentDate), getDayFormat(language), {
        locale: getCalendarLocalization(language),
      }),
    );
    currentDate++;
  }

  return weekDays;
};
