import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useSession } from 'entities/session';
import { Colors } from 'shared/config/colors';
import { DarkTheme, LightTheme, Theme } from 'shared/config/theme';
import { linking, RootStackParamList, RootTabParamList, Screen } from 'shared/config/navigation';
import { useTheme } from 'shared/lib/theme';
import { useLanguage } from 'shared/lib/localization';
import { CalendarIcon, CommunityIcon, MuscleIcon, SettingsIcon } from 'shared/ui/icons';
import { HeaderBackButton } from 'shared/ui/navigation';
import { styles } from './styles';

import IntroScreen from './intro';
import SignInScreen from './auth/sign-in';
import SignUpScreen from './auth/sign-up';
import AddUserInfoScreen from './add-user-info';
import NotFoundScreen from './not-found';
import DiaryScreen from './diary';
import CoachesScreen from './coaches';
import CommunityScreen from './community';
import SettingsScreen from './settings';
import ChangeThemeScreen from './change-theme';
import ChangeLanguageScreen from './change-language';

export default function Navigation() {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      linking={linking}
      theme={theme.color === Theme.dark ? DarkTheme : LightTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { t } = useLanguage();

  const { isSignedIn } = useSession();

  return (
    <RootStack.Navigator>
      {isSignedIn ? (
        <>
          <RootStack.Screen
            name="Root"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
          <RootStack.Group
            screenOptions={{
              presentation: 'modal',
              headerTitleStyle: styles.headerTitle,
              headerTitleAlign: 'center',
              headerShadowVisible: false,
            }}
          >
            <RootStack.Group
              screenOptions={{
                headerLeft: () => <HeaderBackButton parentScreen={Screen.Settings} />,
              }}
            >
              <RootStack.Screen
                name={Screen.ChangeTheme}
                component={ChangeThemeScreen}
                options={{ headerTitle: t('settings.theme.title') }}
              />
              <RootStack.Screen
                name={Screen.ChangeLanguage}
                component={ChangeLanguageScreen}
                options={{ headerTitle: t('settings.language.title') }}
              />
            </RootStack.Group>
          </RootStack.Group>
          <RootStack.Screen
            name={Screen.NotFound}
            component={NotFoundScreen}
            options={{ title: t('notFound.title') }}
          />
        </>
      ) : (
        <>
          <RootStack.Screen
            name={Screen.Intro}
            component={IntroScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={Screen.SignIn}
            component={SignInScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={Screen.SignUp}
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            name={Screen.AddUserInfo}
            component={AddUserInfoScreen}
            options={{ headerShown: false }}
          />
        </>
      )}
    </RootStack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { theme } = useTheme();

  const { t } = useLanguage();

  return (
    <BottomTab.Navigator
      initialRouteName={Screen.Diary}
      screenOptions={{
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        tabBarActiveTintColor: Colors[theme.color].primary,
      }}
    >
      <BottomTab.Screen
        name={Screen.Diary}
        component={DiaryScreen}
        options={() => ({
          title: t('diary.title'),
          tabBarIcon: CalendarIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Coaches}
        component={CoachesScreen}
        options={() => ({
          title: t('coaches.title'),
          tabBarIcon: MuscleIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Community}
        component={CommunityScreen}
        options={() => ({
          title: t('community.title'),
          tabBarIcon: CommunityIcon,
        })}
      />
      <BottomTab.Screen
        name={Screen.Settings}
        component={SettingsScreen}
        options={() => ({
          title: t('settings.title'),
          tabBarIcon: SettingsIcon,
        })}
      />
    </BottomTab.Navigator>
  );
}
