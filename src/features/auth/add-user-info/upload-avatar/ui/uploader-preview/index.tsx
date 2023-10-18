import { Image, View } from 'shared/ui/theme';
import { styles } from './styles';

type UploaderIconProps = {
  value: string;
};

export function UploaderPreview(props: UploaderIconProps) {
  const { value } = props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: value }} style={styles.image} />
    </View>
  );
}
