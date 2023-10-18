import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    height: 54,
    width: 34,
    paddingTop: 10,
    paddingBottom: 6,
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
  },
  date: {
    fontSize: Font.size.sm,
    fontWeight: '600',
    marginBottom: 8,
  },
  empty: {
    height: 54,
    width: 34,
  },
  currentDay: {
    fontSize: Font.size.md,
    fontWeight: '700',
  },
  selected: {
    fontWeight: '700',
  },
});
