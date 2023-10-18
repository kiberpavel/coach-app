import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 22,
    marginHorizontal: -10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: Font.size.md,
    fontWeight: '700',
  },
});
