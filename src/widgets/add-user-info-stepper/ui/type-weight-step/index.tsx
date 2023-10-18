import { Formik, FormikValues } from 'formik';

import { weightValidationSchema } from 'shared/config/user';
import { useLanguage } from 'shared/lib/localization';
import { PrimaryButton } from 'shared/ui/buttons';
import { UnitInput } from 'shared/ui/form';
import { Step } from 'shared/ui/stepper';
import { UserInfoKeys, StepComponentProps } from '../../config';

export function TypeWeightStep(props: StepComponentProps<UserInfoKeys.weight>) {
  const { initialValue, setValue } = props;

  const { t } = useLanguage();

  const initialValues = {
    weight: initialValue,
  };

  const handleSubmit = ({ weight }: FormikValues) => {
    setValue(weight);
  };

  return (
    <Step>
      <Step.Header>
        <Step.Title>{t('addUserInfo.weightStep.title')}</Step.Title>
        <Step.Description>{t('addUserInfo.weightStep.text')}</Step.Description>
      </Step.Header>
      <Formik
        initialValues={initialValues}
        validationSchema={weightValidationSchema}
        validateOnChange={true}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isValid }) => (
          <>
            <Step.Content>
              <UnitInput
                name="weight"
                unit={t('addUserInfo.weightStep.unit')}
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
