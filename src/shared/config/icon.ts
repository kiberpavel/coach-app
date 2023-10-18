import { ReactElement } from 'react';
import { ViewStyle } from 'react-native';

export type IconProps = {
  color?: string;
  size?: number;
  style?: ViewStyle;
};

export type IconComponent = (props: IconProps) => ReactElement;
