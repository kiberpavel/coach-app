import { ListItem } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

import { useThemeColor } from 'shared/lib/theme';
import { CheckIcon } from 'shared/ui/icons';
import { styles } from './styles';

type CheckboxButtonProps = {
  title: string;
  onPress: () => void;
  isSelected?: boolean;
};

export function CheckboxButton(props: CheckboxButtonProps) {
  const { title, isSelected = false, onPress } = props;

  const backgroundColor = useThemeColor({}, 'background');
  const color = useThemeColor({}, 'text');

  const fontWeight = isSelected ? '700' : '500';

  return (
    <ListItem
      containerStyle={[styles.container, { backgroundColor }]}
      Component={TouchableOpacity}
      onPress={onPress}
    >
      <ListItem.Content>
        <ListItem.Title style={[styles.title, { color, fontWeight }]}>{title}</ListItem.Title>
      </ListItem.Content>
      {isSelected && <CheckIcon color={color} size={20} />}
    </ListItem>
  );
}
