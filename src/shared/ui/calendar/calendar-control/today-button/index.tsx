import { useContext } from 'react';
import { Pressable } from 'react-native';

import { useLanguage } from 'shared/lib/localization';
import { Text } from 'shared/ui/theme';
import { CalendarContext } from '../../сontext';

export function TodayButton() {
  const { showToday } = useContext(CalendarContext);

  const { t } = useLanguage();

  return (
    <Pressable onPress={showToday}>
      <Text>{t('calendar.today')}</Text>
    </Pressable>
  );
}
