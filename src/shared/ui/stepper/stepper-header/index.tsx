import { View } from 'shared/ui/theme';
import { BackButton } from 'shared/ui/buttons';
import { StepperProgress } from './stepper-progress';
import { styles } from './styles';

type StepperProps = {
  activeStep: number;
  steps: number;
  goToStep: (step: number) => void;
  goBack: () => void;
};

export function StepperHeader(props: StepperProps) {
  const { activeStep, steps, goToStep, goBack } = props;

  return (
    <View style={styles.container}>
      <BackButton onPress={goBack} />
      <StepperProgress activeStep={activeStep} steps={steps} goToStep={goToStep} />
    </View>
  );
}
