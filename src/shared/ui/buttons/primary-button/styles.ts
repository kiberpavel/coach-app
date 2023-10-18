import { StyleSheet } from 'react-native';

import { Font } from 'shared/config/font';
import { Colors } from 'shared/config/colors';

export const styles = StyleSheet.create({
  buttonText: {
    fontSize: Font.size.md,
    fontWeight: '600',
    lineHeight: 20,
  },
  button: {
    paddingVertical: 14,
    shadowColor: Colors.shared.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 1,
  },
  buttonContainer: {
    width: '100%',
    paddingBottom: 4,
    marginVertical: 5,
  },
});
