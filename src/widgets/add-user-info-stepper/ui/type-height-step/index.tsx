import { Formik, FormikValues } from 'formik';

import { heightValidationSchema } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { UnitInput } from 'shared/ui/form';
import { Step } from 'shared/ui/stepper';
import { UserInfoKeys, StepComponentProps } from '../../config';

export function TypeHeightStep(props: StepComponentProps<UserInfoKeys.height>) {
  const { initialValue, setValue } = props;

  const { t } = useLanguage();

  const initialValues = {
    height: initialValue,
  };

  const handleSubmit = ({ height }: FormikValues) => {
    setValue(height);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.heightStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.heightStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={heightValidationSchema}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <UnitInput
                name="height"
                unit={t('addUserInfo.heightStep.unit')}
                placeholder="-"
                maxLength={6}
              />
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
