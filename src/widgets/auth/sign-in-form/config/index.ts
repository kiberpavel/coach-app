import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';

export const getSignInValidationSchema = (t: TranslateFunction) => {
  return Yup.object({
    email: Yup.string().email(t('errors.email.invalid')).required(t('errors.email.required')),
    password: Yup.string().required(t('errors.password.required')),
  });
};
