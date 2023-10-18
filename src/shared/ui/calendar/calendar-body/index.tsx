import { useContext, useMemo } from 'react';

import { useLanguage } from 'shared/lib/localization';
import { getWeeks } from 'shared/lib/calendar';
import { View } from 'shared/ui/theme';
import { CalendarContext } from '../сontext';
import { Week } from './week';
import { styles } from './styles';

export function CalendarBody() {
  const { activeMonthDate } = useContext(CalendarContext);

  const { language } = useLanguage();

  const weeks = useMemo(() => getWeeks(activeMonthDate, language), [activeMonthDate, language]);

  return (
    <View style={styles.container}>
      {weeks.map((week, index) => {
        return <Week week={week} key={`week-${index}`} />;
      })}
    </View>
  );
}
