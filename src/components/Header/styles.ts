import { StyleSheet } from 'react-native';
import { THEME } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: THEME.COLORS.GREY_600,
    paddingHorizontal: 32,
    paddingTop: 58,
    paddingBottom: 24,
    flexDirection: 'row',
    columnGap: 17,
    alignItems: 'center'
  },
  title: {
    fontSize: 15,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.BOLD,
  },
  subtitle: {
    fontSize: 10,
    color: THEME.COLORS.GREY_100,
    fontFamily: THEME.FONTS.REGULAR,
  },
  history: {
    width: '100%',
    height: 44,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12
  },
  history2: {
    width: '100%',
    height: 44,
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});