import { Formik, FormikValues } from 'formik';

import { useLanguage } from 'shared/lib/localization';
import { useAlert } from 'shared/lib/alert';
import { Text, View } from 'shared/ui/theme';
import { PrimaryButton } from 'shared/ui/buttons';
import { Input } from 'shared/ui/form';
import { getSignUpValidationSchema } from '../config';
import { useSignUp } from '../lib';
import { styles } from './styles';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  repeatedPassword: '',
};

export function SignUpForm() {
  const { t } = useLanguage();

  const { showAlert } = useAlert();

  const { signUp, loading } = useSignUp();

  const handleSignUp = async ({ fullName, email, password }: FormikValues) => {
    try {
      await signUp(fullName, email, password);
    } catch (e) {
      showAlert(t('alerts.unregistered.title'), t('alerts.unregistered.message'));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('signUp.title')}</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={getSignUpValidationSchema(t)}
        onSubmit={handleSignUp}
      >
        {({ handleSubmit }) => (
          <>
            <Input
              name="fullName"
              label={t('labels.user.fullName')}
              placeholder={t('placeholders.user.fullName')}
              textContentType="name"
            />
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
              textContentType="newPassword"
            />
            <Input
              secureText
              name="repeatedPassword"
              label={t('labels.user.repeatedPassword')}
              placeholder={t('placeholders.user.repeatedPassword')}
            />
            <PrimaryButton
              onPress={() => handleSubmit()}
              title={t('signUp.signUpBtn')}
              loading={loading}
              disabled={loading}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
