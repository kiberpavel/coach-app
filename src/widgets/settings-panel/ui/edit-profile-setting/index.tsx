import { useLanguage } from 'shared/lib/localization';
import { MenuButton } from 'shared/ui/buttons';
import { ProfileIcon } from 'shared/ui/icons';

export function EditProfileSetting() {
  const { t } = useLanguage();

  const navigateToEditProfile = () => {
    // TODO
  };

  return (
    <MenuButton
      title={t('settings.editProfile.title')}
      icon={ProfileIcon}
      showChevron
      onPress={navigateToEditProfile}
    />
  );
}
