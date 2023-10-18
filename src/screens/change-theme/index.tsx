import { AppLayout } from 'widgets/layout';
import { ChangeTheme } from 'features/settings/change-theme';

export default function ChangeThemeScreen() {
  return (
    <AppLayout withTopInset={false}>
      <ChangeTheme />
    </AppLayout>
  );
}
