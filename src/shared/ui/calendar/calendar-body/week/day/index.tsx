import { useMemo, useContext } from 'react';
import { Pressable, StyleProp, TextStyle } from 'react-native';
import { isSameDay, isToday, isPast, isSameMonth } from 'date-fns';

import { Colors } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { useLanguage } from 'shared/lib/localization';
import { getDayNumber } from 'shared/lib/calendar';
import { CalendarContext } from '../../../сontext';
import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type DayProps = {
  date: Date;
};

export function Day(props: DayProps) {
  const { date } = props;

  const { activeMonthDate, selectedDate, selectDate } = useContext(CalendarContext);

  const { language } = useLanguage();

  const dayNumber = useMemo(() => getDayNumber(date, language), [date, language]);

  const isPastDay = useMemo(() => isPast(date), [date]);

  const isCurrentDay = useMemo(() => isToday(date), [date]);

  const isSelectedDate = useMemo(() => isSameDay(selectedDate, date), [selectedDate, date]);

  const borderColor = useThemeColor({ inverted: !isSelectedDate }, 'text');

  const color = useThemeColor({}, isPastDay ? 'secondary' : 'text');

  const getContainerStyle = () => {
    const styleContainer: Array<StyleProp<TextStyle>> = [styles.container, { borderColor }];

    if (isCurrentDay) styleContainer.push(styles.currentDay);

    return styleContainer;
  };

  const getTextStyle = () => {
    const styleText: Array<StyleProp<TextStyle>> = [styles.date];

    if (isSelectedDate) styleText.push(styles.selected);
    if (isCurrentDay) styleText.push(styles.currentDay);

    return styleText;
  };

  if (!isSameMonth(activeMonthDate, date)) {
    return <Text style={styles.empty}></Text>;
  }

  return (
    <Pressable onPress={() => selectDate(date)} style={getContainerStyle()}>
      <Text
        style={getTextStyle()}
        lightColor={isCurrentDay ? Colors.light.primary : color}
        darkColor={isCurrentDay ? Colors.dark.primary : color}
      >
        {dayNumber}
      </Text>
    </Pressable>
  );
}
