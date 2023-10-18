import { ImageSourcePropType, TouchableOpacity } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { Image } from 'shared/ui/theme';
import { styles } from './styles';

type GenderOptionProps = {
  imageSource: ImageSourcePropType;
  isSelected: boolean;
  onSelect: () => void;
};

export function GenderOption(props: GenderOptionProps) {
  const { imageSource, isSelected, onSelect } = props;

  const borderColor = useThemeColor({}, 'button');
  const backgroundColor = useThemeColor({}, 'primary');
  const themeBackground = useThemeColor({}, 'background');

  return (
    <TouchableOpacity
      style={[
        styles.touchable,
        {
          backgroundColor,
          borderColor: isSelected ? borderColor : themeBackground,
        },
      ]}
      onPress={onSelect}
    >
      <Image
        source={imageSource}
        style={styles.image}
        lightColor={'transparent'}
        darkColor={'transparent'}
      />
    </TouchableOpacity>
  );
}
