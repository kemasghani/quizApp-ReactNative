import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';


export const buttonStyles = StyleSheet.create({
  button: {
    width: 93,
    height: 38,
    flexShrink: 0,
    borderRadius: 10,
    backgroundColor: '#00875F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title :{
    color: THEME.COLORS.WHITE,
    fontFamily: 'Roboto_700Bold',
    fontSize: 15,
    fontStyle: 'normal',
    letterSpacing: 0.6,
  }
});
