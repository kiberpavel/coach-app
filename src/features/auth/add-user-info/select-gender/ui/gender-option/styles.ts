import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  touchable: {
    position: 'relative',
    width: 140,
    height: 140,
    marginHorizontal: 14,
    borderRadius: 8,
    borderWidth: 4,
  },
  image: {
    height: 160,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    resizeMode: 'contain',
  },
});
