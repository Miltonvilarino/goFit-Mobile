import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export const styles= StyleSheet.create({
  container: {
    width: 158,
    height: 40,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: theme.colors.primary,
    marginTop: 140
  },
  title: {
    flex: 1,
    top: 10,
    color: theme.colors.heading,
    borderRadius: 10,
    textAlign: 'center',
  }
})
