import { DeleteAccount } from 'features/settings/delete-account';
import { SignOut } from 'features/settings/sign-out';
import { Divider, View } from 'shared/ui/theme';
import { EditProfileSetting } from './edit-profile-setting';
import { ChangePasswordSetting } from './change-password-setting';
import { ChangeThemeSetting } from './change-theme-setting';
import { ChangeLanguageSetting } from './change-language-setting';
import { NotificationsSetting } from './notifications-setting';
import { styles } from './styles';

export function SettingsPanel() {
  return (
    <View style={styles.container}>
      <EditProfileSetting />
      <ChangePasswordSetting />
      <Divider style={styles.divider} />
      <ChangeThemeSetting />
      <ChangeLanguageSetting />
      <NotificationsSetting />
      <Divider style={styles.divider} />
      <DeleteAccount />
      <Divider style={styles.divider} />
      <SignOut />
    </View>
  );
}
