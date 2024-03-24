import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const dimensions = Dimensions.get("window");

const CARDS_PER_ROW = 2.5;
const HORIZONTAL_PADDING_SCREEN = 32 * 2;
const MARGIN = 20;

const CARD_WIDTH =
  (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: CARD_WIDTH,
    height: 129,
    backgroundColor: THEME.COLORS.GREY_700,
    margin: MARGIN,
    borderRadius: 6,
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 12,
    fontWeight: 'bold',
    margin: 'auto',
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_100,
    marginBottom: 10,
    marginTop: 0,
    width: 120,
    textAlign: "center",
  },
});
