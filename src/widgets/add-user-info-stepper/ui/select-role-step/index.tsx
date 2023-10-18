import { useState } from 'react';

import { Role } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { Text } from 'shared/ui/theme';
import { UserInfoKeys, StepComponentProps } from '../../config';

export function SelectRoleStep(props: StepComponentProps<UserInfoKeys.role>) {
  const { initialValue, setValue } = props;

  const [selectedRole, setSelectedRole] = useState<Role>(initialValue);

  const { t } = useLanguage();

  const handleSubmit = () => {
    setValue(selectedRole);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>title</Step.Title>
        <Step.Description>text</Step.Description>
      </Step.Header>
      <Step.Content>
        <Text>content</Text>
      </Step.Content>
      <Step.Footer>
        <PrimaryButton title={t('buttons.continue')} onPress={handleSubmit} />
      </Step.Footer>
    </Step>
  );
}
