import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 108,
    height: 88,
    top: 188,
    left: 130,
    backgroundColor: theme.colors.secondary100
  },
  content: {
    width: 71,
    height: 40,
  },
  title: {
    color: theme.colors.heading,
    width: 134,
    height: 18,
    top: 310,
    left: 132,
  }
})
