import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';

import { View } from 'shared/ui/theme';
import { CalendarControl } from './calendar-control';
import { CalendarHeader } from './calendar-header';
import { CalendarBody } from './calendar-body';
import { CalendarContext } from './сontext';
import { styles } from './styles';

export function Calendar() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [activeMonthDate, setActiveMonthDate] = useState<Date>(new Date());

  const showToday = () => {
    setActiveMonthDate(new Date());
    setSelectedDate(new Date());
  };

  const selectDate = (date: Date) => {
    setSelectedDate(date);
  };

  const goToPrevMonth = () => {
    setActiveMonthDate(subMonths(activeMonthDate, 1));
  };

  const goToNextMonth = () => {
    setActiveMonthDate(addMonths(activeMonthDate, 1));
  };

  return (
    <CalendarContext.Provider
      value={{
        activeMonthDate,
        selectedDate,
        selectDate,
        goToPrevMonth,
        goToNextMonth,
        showToday,
      }}
    >
      <View style={styles.container}>
        <CalendarControl />
        <CalendarHeader />
        <CalendarBody />
      </View>
    </CalendarContext.Provider>
  );
}
