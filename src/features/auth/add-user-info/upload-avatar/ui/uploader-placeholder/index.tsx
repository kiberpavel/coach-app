import { Colors } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { View } from 'shared/ui/theme';
import { CameraIcon } from 'shared/ui/icons';
import { styles } from './styles';

export function UploaderPlaceholder() {
  const borderColor = useThemeColor({}, 'button');

  return (
    <View style={[styles.container, { borderColor }]}>
      <CameraIcon color={Colors.shared.lightSilver} size={35} />
    </View>
  );
}
