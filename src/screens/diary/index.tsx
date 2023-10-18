import { AppLayout } from 'widgets/layout';
import { Calendar } from 'shared/ui/calendar';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function DiaryScreen() {
  return (
    <AppLayout>
      <View style={styles.container}>
        <Calendar />
      </View>
    </AppLayout>
  );
}
