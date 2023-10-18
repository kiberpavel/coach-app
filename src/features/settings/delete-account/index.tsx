import { useLanguage } from 'shared/lib/localization';
import { useThemeColor } from 'shared/lib/theme';
import { MenuButton } from 'shared/ui/buttons';
import { TrashIcon } from 'shared/ui/icons';

export function DeleteAccount() {
  const { t } = useLanguage();

  const color = useThemeColor({}, 'danger');

  const openConfirmModal = () => {
    // TODO
  };

  return (
    <MenuButton
      title={t('settings.deleteAccount.title')}
      icon={TrashIcon}
      color={color}
      onPress={openConfirmModal}
    />
  );
}
