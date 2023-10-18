import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInfo: {
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 75,
  },
  title: {
    textAlign: 'center',
    fontSize: Font.size.xxl,
    lineHeight: 30,
    marginBottom: 12,
  },
  text: {
    textAlign: 'center',
    fontSize: Font.size.sm,
    lineHeight: 21,
  },
});
