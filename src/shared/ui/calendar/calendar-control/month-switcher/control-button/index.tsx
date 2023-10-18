import { Pressable } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { useThemeColor } from 'shared/lib/theme';

type ControlButtonProps = {
  icon: IconComponent;
  onPress: () => void;
};

export function ControlButton(props: ControlButtonProps) {
  const { onPress, icon: Icon } = props;

  const iconColor = useThemeColor({}, 'border');

  return <Pressable onPress={onPress}>{Icon && <Icon color={iconColor} size={28} />}</Pressable>;
}
