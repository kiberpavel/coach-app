import { useState } from 'react';

import { Gender, Role } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { Stepper } from 'shared/ui/stepper';
import { SelectGenderStep } from './select-gender-step';
import { SelectRoleStep } from './select-role-step';
import { TypeHeightStep } from './type-height-step';
import { TypeWeightStep } from './type-weight-step';
import { TypeUsernameStep } from './type-username-step';
import { UploadAvatarStep } from './upload-avatar-step';
import { UserInfoKeys, Step, UserInfo, StepComponentProps, StepComponent } from '../config';

type AddUserInfoStepperProps = {
  onLeave: () => void;
};

const steps: Step[] = [
  { key: UserInfoKeys.gender, component: SelectGenderStep },
  { key: UserInfoKeys.role, component: SelectRoleStep },
  { key: UserInfoKeys.height, component: TypeHeightStep },
  { key: UserInfoKeys.weight, component: TypeWeightStep },
  { key: UserInfoKeys.username, component: TypeUsernameStep },
  { key: UserInfoKeys.avatar, component: UploadAvatarStep },
];

export function AddUserInfoStepper(props: AddUserInfoStepperProps) {
  const { onLeave } = props;

  // TODO: Initial values must be from server
  const [userInfo, setUserInfo] = useState<UserInfo>({
    gender: Gender.male,
    role: Role.trainee,
    height: undefined,
    weight: undefined,
    username: '',
    avatar: '',
  });

  const { t } = useLanguage();

  const stepsCount = steps.length;

  const sendForm = () => {
    console.log('Form has been sent');
    // TODO: Send request
  };

  const renderActiveStep = (activeStep: number, goNext: () => void) => {
    const step = steps[activeStep];

    if (!step) {
      return <></>;
    }

    const params: StepComponentProps<typeof step.key> = {
      initialValue: userInfo[step.key],
      setValue: (value) => {
        setUserInfo((prevState) => ({ ...prevState, [step.key]: value }));
        activeStep === stepsCount - 1 ? sendForm() : goNext();
      },
    };

    const Component = step.component as StepComponent<typeof step.key>;

    return <Component {...params} />;
  };

  return (
    <Stepper
      initialStep={0}
      steps={stepsCount}
      skipButtonTitle={t('buttons.skip')}
      onLeave={onLeave}
    >
      {renderActiveStep}
    </Stepper>
  );
}
