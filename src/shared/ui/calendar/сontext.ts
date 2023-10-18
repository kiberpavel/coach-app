import { createContext } from 'react';

type CalendarContextType = {
  activeMonthDate: Date;
  selectedDate: Date;
  selectDate: (date: Date) => void;
  showToday: () => void;
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
};

export const CalendarContext = createContext<CalendarContextType>({
  activeMonthDate: new Date(),
  selectedDate: new Date(),
  selectDate: () => null,
  showToday: () => null,
  goToNextMonth: () => null,
  goToPrevMonth: () => null,
});
