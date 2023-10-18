import { SignUpForm } from 'widgets/auth/sign-up-form';
import { AuthBySocials } from 'widgets/auth/auth-by-socials';
import { AppLayout } from 'widgets/layout';
import { Screen } from 'shared/config/navigation';
import { useLanguage } from 'shared/lib/localization';
import { AuthFooter } from 'shared/ui/auth';
import { View } from 'shared/ui/theme';
import { styles } from './styles';

export default function SignUpScreen() {
  const { t } = useLanguage();

  return (
    <AppLayout>
      <View style={styles.container}>
        <SignUpForm />
        <AuthBySocials title={t('signUp.signUpWith')} />
        <AuthFooter
          navigateTo={Screen.SignIn}
          text={t('signUp.signInLinkText')}
          btnTitle={t('signIn.title')}
        />
      </View>
    </AppLayout>
  );
}
