import { useState } from 'react';

import { View } from 'shared/ui/theme';
import { StepperHeader } from './stepper-header';
import { StepperFooter } from './stepper-footer';
import { styles } from './styles';

type StepperProps = {
  steps: number;
  initialStep: number;
  skipButtonTitle: string;
  onLeave: () => void;
  children: (activeStep: number, goNext: () => void) => JSX.Element;
};

export function Stepper(props: StepperProps) {
  const { steps, initialStep, skipButtonTitle, onLeave, children } = props;

  const [activeStep, setActiveStep] = useState<number>(initialStep);

  const goNext = () => {
    if (activeStep < steps - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const goBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    } else {
      onLeave();
    }
  };

  const goToStep = (step: number) => {
    setActiveStep(step);
  };

  return (
    <View style={styles.wrapper}>
      <StepperHeader activeStep={activeStep} steps={steps} goToStep={goToStep} goBack={goBack} />
      <View style={styles.content}>{children(activeStep, goNext)}</View>
      <StepperFooter skipButtonTitle={skipButtonTitle} onSkip={goNext} />
    </View>
  );
}
