import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  beforeIcon: {
    marginLeft: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 4,
  },
  input: {
    height: 44,
    flex: 1,
    paddingHorizontal: 10,
    paddingRight: 40,
    outlineStyle: 'none',
  },
});
