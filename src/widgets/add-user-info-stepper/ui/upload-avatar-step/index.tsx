import { useState } from 'react';

import { UploadAvatar } from 'features/auth/add-user-info/upload-avatar';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Step } from 'shared/ui/stepper';
import { UserInfoKeys, StepComponentProps } from '../../config';

export function UploadAvatarStep(props: StepComponentProps<UserInfoKeys.avatar>) {
  const { initialValue, setValue } = props;

  const { t } = useLanguage();

  const [avatar, setAvatar] = useState<string>(initialValue);

  const onUploadAvatar = (avatar: string) => {
    setAvatar(avatar);
  };

  const handleSubmit = () => {
    setValue(avatar);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.avatarStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.avatarStep.text')}</Step.Description>
      </Step.Header>
      <Step.Content>
        <UploadAvatar value={avatar} initialValue={initialValue} onUpload={onUploadAvatar} />
      </Step.Content>
      <Step.Footer>
        <PrimaryButton title={t('buttons.start')} onPress={handleSubmit} />
      </Step.Footer>
    </Step>
  );
}
