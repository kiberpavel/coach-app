import { Theme as NativeTheme } from '@react-navigation/native';

import { Colors } from './colors';

export type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
  themeInverted?: boolean;
};

export enum Theme {
  light = 'light',
  dark = 'dark',
  auto = 'auto',
}

export type ThemeColorScheme = Theme.light | Theme.dark;

export const LightTheme: NativeTheme = {
  dark: false,
  colors: {
    primary: Colors.light.primary,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: Colors.light.border,
    notification: Colors.light.danger,
  },
};

export const DarkTheme: NativeTheme = {
  dark: true,
  colors: {
    primary: Colors.dark.primary,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    border: Colors.dark.border,
    notification: Colors.dark.danger,
  },
};
