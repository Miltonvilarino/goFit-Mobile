import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  image: {
    width: 108,
    height: 88,
    top: 123,
    marginBottom: 200,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 50,

  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 14,
    width: 244,
    marginTop: 50,

  }
})
