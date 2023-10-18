import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

import { Theme, ThemeColorScheme } from 'shared/config/theme';
import { useTheme, useThemeColor } from 'shared/lib/theme';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

type AppLayoutProps = {
  children: ReactNode;
  statusBarTheme?: ThemeColorScheme;
  backgroundColor?: string;
  withTopInset?: boolean;
};

export function AppLayout(props: AppLayoutProps) {
  const { children, statusBarTheme, backgroundColor, withTopInset = true } = props;

  const insets = useSafeAreaInsets();

  const { theme } = useTheme();

  const statusBarStyle = statusBarTheme || (theme.color === Theme.light ? Theme.dark : Theme.light);
  const background = backgroundColor || useThemeColor({}, 'background');

  const getInsets = () => {
    const { top, bottom, left, right } = insets;

    return {
      paddingTop: withTopInset ? top : 0,
      paddingBottom: bottom,
      paddingLeft: left,
      paddingRight: right,
    };
  };

  return (
    <View lightColor={background} darkColor={background} style={[styles.container, getInsets()]}>
      <StatusBar
        style={statusBarStyle as StatusBarStyle}
        backgroundColor={background}
        translucent={false}
      />
      {children}
    </View>
  );
}
