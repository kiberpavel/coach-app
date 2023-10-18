import { Colors } from 'shared/config/colors';
import { Text } from 'shared/ui/theme';
import { styles } from './styles';

type WeekDayProps = {
  name: string;
  isCurrent: boolean;
};

export function WeekDay(props: WeekDayProps) {
  const { name, isCurrent } = props;

  return (
    <Text
      lightColor={isCurrent ? Colors.light.primary : undefined}
      darkColor={isCurrent ? Colors.dark.primary : undefined}
      style={styles.day}
    >
      {name.toUpperCase()}
    </Text>
  );
}
