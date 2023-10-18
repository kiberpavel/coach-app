import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  LinkingOptions,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootTabParamList = {
  Diary: undefined;
  Coaches: undefined;
  Community: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  ChangeTheme: undefined;
  ChangeLanguage: undefined;
  Intro: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddUserInfo: undefined;
  RecoverPassword: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Diary: 'diary',
          Coaches: 'coaches',
          Community: 'community',
          Settings: 'settings',
        },
      },
      ChangeTheme: 'change-theme',
      ChangeLanguage: 'change-language',
      Intro: 'intro',
      SignIn: 'sign-in',
      SignUp: 'sign-up',
      AddUserInfo: 'add-user-info',
      RecoverPassword: 'recover-password',
      NotFound: '*',
    },
  },
};

export enum Screen {
  Diary = 'Diary',
  Coaches = 'Coaches',
  Community = 'Community',
  Settings = 'Settings',
  ChangeTheme = 'ChangeTheme',
  ChangeLanguage = 'ChangeLanguage',
  Intro = 'Intro',
  SignIn = 'SignIn',
  SignUp = 'SignUp',
  AddUserInfo = 'AddUserInfo',
  RecoverPassword = 'RecoverPassword',
  NotFound = 'NotFound',
}
