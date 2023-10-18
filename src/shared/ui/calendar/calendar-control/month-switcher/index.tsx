import { useContext, useMemo } from 'react';

import { getMonthName } from 'shared/lib/calendar';
import { useLanguage } from 'shared/lib/localization';
import { ChevronLeftIcon, ChevronRightIcon } from 'shared/ui/icons';
import { Text, View } from 'shared/ui/theme';
import { CalendarContext } from '../../сontext';
import { ControlButton } from './control-button';
import { styles } from './styles';

export function MonthSwitcher() {
  const { activeMonthDate, goToNextMonth, goToPrevMonth } = useContext(CalendarContext);

  const { language } = useLanguage();

  const monthName = useMemo(
    () => getMonthName(activeMonthDate, language),
    [activeMonthDate, language],
  );

  return (
    <View style={styles.container}>
      <ControlButton onPress={goToPrevMonth} icon={ChevronLeftIcon} />
      <Text style={styles.title}>{monthName}</Text>
      <ControlButton onPress={goToNextMonth} icon={ChevronRightIcon} />
    </View>
  );
}
