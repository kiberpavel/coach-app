import { View } from 'shared/ui/theme';
import { Day } from './day';
import { styles } from './styles';

type WeekProps = {
  week: Date[];
};

export function Week(props: WeekProps) {
  const { week } = props;

  return (
    <View style={styles.container}>
      {week.map((date: Date, index) => {
        return <Day date={date} key={`day-${index}`} />;
      })}
    </View>
  );
}
