import { useState } from 'react';
import { useField } from 'formik';
import { ViewStyle } from 'react-native';

import { IconComponent } from 'shared/config/icon';
import { Colors } from 'shared/config/colors';
import { useThemeColor } from 'shared/lib/theme';
import { View, TextInput, TextInputProps } from 'shared/ui/theme';
import { Label } from './label';
import { SecureIcon } from './secure-icon';
import { Message } from './message';
import { styles } from './styles';

type InputProps = {
  name: string;
  placeholder: string;
  label?: string;
  beforeIcon?: IconComponent;
  secureText?: boolean;
  inputContainerStyles?: ViewStyle;
  themeBorderColorKey?: keyof typeof Colors.light & keyof typeof Colors.dark;
} & TextInputProps;

export function Input(props: InputProps) {
  const {
    name,
    label,
    beforeIcon: BeforeIcon,
    secureText,
    inputContainerStyles,
    themeBorderColorKey = 'border',
    ...otherProps
  } = props;

  const [isSecureText, setSecureText] = useState<boolean>(secureText || false);

  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  const borderColor = useThemeColor({}, hasError ? 'danger' : themeBorderColorKey);

  const iconColor = useThemeColor({}, 'text');

  const errorMessage = hasError ? meta.error : undefined;

  const toggleTextVisibility = () => {
    setSecureText(!isSecureText);
  };

  return (
    <View style={styles.container}>
      {label && <Label text={label} />}
      <View style={[styles.inputContainer, inputContainerStyles, { borderColor }]}>
        {BeforeIcon && <BeforeIcon color={iconColor} size={18} style={styles.beforeIcon} />}
        <TextInput
          style={styles.input}
          value={field.value}
          onChange={() => field.onChange(name)}
          onChangeText={field.onChange(name)}
          onBlur={field.onBlur(name)}
          secureTextEntry={isSecureText}
          autoCorrect={false}
          {...otherProps}
        />
        {secureText && <SecureIcon onPress={toggleTextVisibility} isSecureText={isSecureText} />}
      </View>
      <Message text={errorMessage} />
    </View>
  );
}
