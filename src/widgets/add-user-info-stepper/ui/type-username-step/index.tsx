import { Formik, FormikValues } from 'formik';

import { getUsernameValidationSchema } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { Input } from 'shared/ui/form';
import { AtIcon } from 'shared/ui/icons';
import { Step } from 'shared/ui/stepper';
import { View } from 'shared/ui/theme';
import { UserInfoKeys, StepComponentProps } from '../../config';
import { styles } from './styles';

export function TypeUsernameStep(props: StepComponentProps<UserInfoKeys.username>) {
  const { initialValue, setValue } = props;

  const { t } = useLanguage();

  const initialValues = {
    username: initialValue,
  };

  const handleSubmit = ({ username }: FormikValues) => {
    setValue(username);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.usernameStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.usernameStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={getUsernameValidationSchema(t)}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <View style={styles.inputWrapper}>
                <Input
                  name="username"
                  beforeIcon={AtIcon}
                  placeholder={t('placeholders.user.username')}
                  textContentType="username"
                  inputContainerStyles={styles.inputContainer}
                  themeBorderColorKey={'button'}
                />
              </View>
            </Step.Content>
            <Step.Footer>
              <PrimaryButton
                title={t('buttons.continue')}
                onPress={() => handleSubmit()}
                disabled={!isValid}
              />
            </Step.Footer>
          </>
        )}
      </Formik>
    </Step>
  );
}
