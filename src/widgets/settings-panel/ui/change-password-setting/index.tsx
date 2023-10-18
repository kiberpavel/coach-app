import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { LockIcon } from 'shared/ui/icons';

export function ChangePasswordSetting() {
  const { t } = useLanguage();

  const navigateToChangePassword = () => {
    // TODO
  };

  return (
    <MenuButton
      title={t('settings.changePassword.title')}
      icon={LockIcon}
      showChevron
      onPress={navigateToChangePassword}
    />
  );
}
