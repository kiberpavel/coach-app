import { AddUserInfoStepper } from 'widgets/add-user-info-stepper';
import { AppLayout } from 'widgets/layout';
import { RootStackScreenProps, Screen } from 'shared/config/navigation';

export default function AddUserInfoScreen(props: RootStackScreenProps<Screen.AddUserInfo>) {
  const { navigation } = props;

  const navigateToIntroScreen = () => {
    navigation.navigate(Screen.Intro);
  };

  return (
    <AppLayout>
      <AddUserInfoStepper onLeave={navigateToIntroScreen} />
    </AppLayout>
  );
}
