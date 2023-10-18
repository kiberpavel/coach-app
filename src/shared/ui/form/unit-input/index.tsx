import { useField } from 'formik';

import { useThemeColor } from 'shared/lib/theme';
import { TextInput, View, Text, TextInputProps } from 'shared/ui/theme';
import { KeyboardDoneButton } from 'shared/ui/buttons';
import { styles } from './styles';

type UnitInputProps = {
  name: string;
  unit: string;
} & TextInputProps;

export function UnitInput(props: UnitInputProps) {
  const { name, unit, ...otherProps } = props;

  const [field, meta] = useField(name);

  const inputAccessoryViewID = 'Done';

  const hasError = meta.error;

  const borderColor = useThemeColor({}, hasError ? 'danger' : 'button');

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={[styles.input, { borderColor }]}
          value={field.value || ''}
          keyboardType="numeric"
          onChangeText={field.onChange(name)}
          inputAccessoryViewID={inputAccessoryViewID}
          {...otherProps}
        />
        <Text style={styles.unit}>{unit}</Text>
      </View>
      <KeyboardDoneButton inputAccessoryViewID={inputAccessoryViewID} />
    </>
  );
}
