import { AppLayout } from 'widgets/layout';
import { ChangeLanguage } from 'features/settings/change-language';

export default function ChangeLanguageScreen() {
  return (
    <AppLayout withTopInset={false}>
      <ChangeLanguage />
    </AppLayout>
  );
}
