import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 5,
  },
  title: {
    marginHorizontal: 16,
    fontSize: Font.size.sm,
    fontWeight: '500',
  },
  line: {
    flex: 1,
    height: 1,
  },
});
