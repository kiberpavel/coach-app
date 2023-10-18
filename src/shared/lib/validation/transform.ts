export const transformDecimal = (value: string, originalValue: string) =>
  Number(originalValue.replace(/,/, '.'));
