import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { nameExpression, passwordExpression } from 'shared/config/regex';

export const getSignUpValidationSchema = (t: TranslateFunction) => {
  return Yup.object({
    fullName: Yup.string()
      .required(t('errors.fullName.required'))
      .min(1, t('errors.fullName.tooShort'))
      .max(50, t('errors.fullName.tooLong'))
      .matches(nameExpression, t('errors.fullName.invalid')),
    email: Yup.string().email(t('errors.email.invalid')).required(t('errors.email.required')),
    password: Yup.string()
      .required(t('errors.password.createRequired'))
      .min(6, t('errors.password.invalid'))
      .matches(passwordExpression, t('errors.password.invalid')),
    repeatedPassword: Yup.string()
      .required(t('errors.password.confirmRequired'))
      .oneOf([Yup.ref('password')], t('errors.password.notMatch')),
  });
};
