import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 90,
    borderWidth: 2,
    borderRadius: 6,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: Font.size.xxl,
    outlineStyle: 'none',
    marginRight: 6,
  },
  unit: {
    fontWeight: '600',
    fontSize: Font.size.xl,
    marginLeft: 6,
  },
});
