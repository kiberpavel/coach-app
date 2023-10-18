import { useState } from 'react';

import { SelectGender } from 'features/auth/add-user-info/select-gender';
import { Gender } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { UserInfoKeys, StepComponentProps } from '../../config';

export function SelectGenderStep(props: StepComponentProps<UserInfoKeys.gender>) {
  const { initialValue, setValue } = props;

  const [selectedGender, setSelectedGender] = useState<Gender>(initialValue);

  const { t } = useLanguage();

  const onSelectGender = (gender: Gender) => {
    setSelectedGender(gender);
  };

  const handleSubmit = () => {
    setValue(selectedGender);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.genderStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.genderStep.text')}</Step.Description>
      </Step.Header>
      <Step.Content>
        <SelectGender value={selectedGender} onSelect={onSelectGender} />
      </Step.Content>
      <Step.Footer>
        <PrimaryButton title={t('buttons.continue')} onPress={handleSubmit} />
      </Step.Footer>
    </Step>
  );
}
