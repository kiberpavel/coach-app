import * as Yup from 'yup';

import { TranslateFunction } from 'shared/config/language';
import { usernameExpression } from 'shared/config/regex';
import { transformDecimal } from 'shared/lib/validation';

export enum Gender {
  male = 'male',
  female = 'female',
}

export enum Role {
  trainee = 'trainee',
  coach = 'coach',
}

const userLimits = {
  weight: { min: 30, max: 250 },
  height: { min: 70, max: 250 },
  username: { min: 3, max: 30 },
};

export const weightValidationSchema = Yup.object().shape({
  weight: Yup.number()
    .transform(transformDecimal)
    .min(userLimits.weight.min)
    .max(userLimits.weight.max),
});

export const heightValidationSchema = Yup.object().shape({
  height: Yup.number()
    .transform(transformDecimal)
    .min(userLimits.height.min)
    .max(userLimits.height.max),
});

export const getUsernameValidationSchema = (t: TranslateFunction) => {
  return Yup.object().shape({
    username: Yup.string()
      .matches(usernameExpression, t('errors.username.invalid'))
      .min(userLimits.username.min, t('errors.username.tooShort'))
      .max(userLimits.username.max, t('errors.username.tooLong')),
  });
};
