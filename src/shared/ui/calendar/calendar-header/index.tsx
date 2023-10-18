import { useContext, useMemo } from 'react';
import { isSameMonth } from 'date-fns';

import { useLanguage } from 'shared/lib/localization';
import { getWeekDaysNames, getDayName } from 'shared/lib/calendar';
import { useThemeColor } from 'shared/lib/theme';
import { View } from 'shared/ui/theme';
import { CalendarContext } from '../сontext';
import { WeekDay } from './week-day';
import { styles } from './styles';

export function CalendarHeader() {
  const { activeMonthDate } = useContext(CalendarContext);

  const { language } = useLanguage();

  const isCurrentMonth = useMemo(() => isSameMonth(new Date(), activeMonthDate), [activeMonthDate]);

  const currentDayOfWeek = useMemo(() => getDayName(new Date(), language), [language]);

  const weekDays = useMemo(() => getWeekDaysNames(new Date(), language), [language]);

  const borderColor = useThemeColor({}, 'border');

  return (
    <View style={[styles.container, { borderColor }]}>
      {weekDays.map((weekDayName) => {
        const isCurrent = currentDayOfWeek === weekDayName && isCurrentMonth;

        return <WeekDay key={weekDayName} name={weekDayName} isCurrent={isCurrent} />;
      })}
    </View>
  );
}
