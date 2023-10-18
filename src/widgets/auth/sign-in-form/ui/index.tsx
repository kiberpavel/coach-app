import { Formik, FormikValues } from 'formik';

import { useLanguage } from 'shared/lib/localization';
import { useAlert } from 'shared/lib/alert';
import { Text, View } from 'shared/ui/theme';
import { PrimaryButton } from 'shared/ui/buttons';
import { Input } from 'shared/ui/form';
import { getSignInValidationSchema } from '../config';
import { useSignIn } from '../lib';
import { styles } from './styles';

const initialValues = {
  email: '',
  password: '',
};

export function SignInForm() {
  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { signIn, loading } = useSignIn();

  const handleSignIn = async ({ email, password }: FormikValues) => {
    try {
      await signIn(email, password);
    } catch (e) {
      showAlert(t('alerts.unauthorized.title'), t('alerts.unauthorized.message'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signIn.title')}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={getSignInValidationSchema(t)}
        onSubmit={handleSignIn}
      >
        {({ handleSubmit }) => (
          <>
            <Input
              name="email"
              label={t('labels.user.email')}
              placeholder={t('placeholders.user.email')}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Input
              secureText
              name="password"
              label={t('labels.user.password')}
              placeholder={t('placeholders.user.password')}
              textContentType="password"
            />
            <PrimaryButton
              onPress={() => handleSubmit()}
              title={t('signIn.title')}
              loading={loading}
              disabled={loading}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
