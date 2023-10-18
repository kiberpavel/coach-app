import { StyleProp, ViewStyle } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { Button } from 'shared/ui/theme';
import { ChevronLeftIcon } from 'shared/ui/icons';
import { styles } from './styles';

type BackButtonProps = {
  onPress: () => void;
  iconSize?: number;
  buttonStyle?: StyleProp<ViewStyle>;
};

export function BackButton(props: BackButtonProps) {
  const { iconSize = 30, buttonStyle, onPress } = props;

  const color = useThemeColor({ inverted: true }, 'buttonTitle');

  return (
    <Button
      title={<ChevronLeftIcon size={iconSize} color={color} />}
      buttonStyle={[styles.button, buttonStyle]}
      themeInverted
      onPress={onPress}
    />
  );
}
