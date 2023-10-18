import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';

import { BackButton } from 'shared/ui/buttons';
import { RootTabParamList } from 'shared/config/navigation';
import { styles } from './styles';

type HeaderBackButtonProps = {
  parentScreen: keyof RootTabParamList;
};

export function HeaderBackButton(props: HeaderBackButtonProps) {
  const { parentScreen } = props;

  const navigation = useNavigation();

  const { navigate } = navigation;

  const handleGoBack = () => {
    navigate('Root', { screen: parentScreen });
  };

  return (
    <BackButton
      iconSize={36}
      buttonStyle={Platform.OS === 'ios' ? styles.button : undefined}
      onPress={handleGoBack}
    />
  );
}
