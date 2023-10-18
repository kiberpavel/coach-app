import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: Font.size.sm,
    minHeight: 20,
    marginVertical: 5,
  },
  message: {
    marginLeft: 5,
  },
});
