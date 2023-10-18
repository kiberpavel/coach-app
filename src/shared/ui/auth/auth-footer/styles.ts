import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  text: {
    textAlign: 'center',
    marginRight: 5,
    lineHeight: 23,
  },
  linkTitle: {
    lineHeight: 23,
    fontWeight: '700',
    fontSize: Font.size.sm,
  },
});
