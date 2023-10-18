import { Theme } from 'shared/config/theme';
import { TranslateFunction } from 'shared/config/language';

export const getThemes = (t: TranslateFunction) => {
  return [
    {
      name: t(`settings.theme.variant.${Theme.auto}`),
      key: Theme.auto,
    },
    {
      name: t(`settings.theme.variant.${Theme.dark}`),
      key: Theme.dark,
    },
    {
      name: t(`settings.theme.variant.${Theme.light}`),
      key: Theme.light,
    },
  ];
};
