import { Pressable } from 'react-native';

import { UploadFunction } from './config';
import { useImageActions } from './lib';
import { UploaderIcon, UploaderPlaceholder, UploaderPreview } from './ui';
import { styles } from './styles';

type UploadAvatarProps = {
  value: string;
  initialValue: string;
  onUpload: UploadFunction;
};

export function UploadAvatar(props: UploadAvatarProps) {
  const { value, initialValue, onUpload } = props;

  const { showImageActions } = useImageActions(initialValue, onUpload);

  return (
    <Pressable style={styles.content} onPress={showImageActions}>
      {value ? <UploaderPreview value={value} /> : <UploaderPlaceholder />}
      <UploaderIcon isUploaded={!!value} />
    </Pressable>
  );
}
