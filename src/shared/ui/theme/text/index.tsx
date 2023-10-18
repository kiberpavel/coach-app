import { Text as DefaultText } from 'react-native';

import { ThemeProps } from 'shared/config/theme';
import { useThemeColor } from 'shared/lib/theme';

export type TextProps = ThemeProps & DefaultText['props'];

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, themeInverted, ...otherProps } = props;

  const color = useThemeColor(
    { light: lightColor, dark: darkColor, inverted: themeInverted },
    'text',
  );

  return <DefaultText style={[style, { color }]} {...otherProps} />;
}
