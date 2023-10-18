import { Colors } from 'shared/config/colors';
import { Button, View } from 'shared/ui/theme';
import { styles } from './styles';

type StepperFooterProps = {
  skipButtonTitle: string;
  onSkip: () => void;
};

export function StepperFooter(props: StepperFooterProps) {
  const { skipButtonTitle, onSkip } = props;

  return (
    <View style={styles.container}>
      <Button
        title={skipButtonTitle}
        titleStyle={styles.buttonTitle}
        darkTextColor={Colors.light.secondary}
        lightTextColor={Colors.dark.secondary}
        themeInverted
        onPress={onSkip}
      />
    </View>
  );
}
