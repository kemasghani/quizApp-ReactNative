import { Dimensions, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

const dimensions = Dimensions.get("window");

const CARDS_PER_ROW = 2;
const HORIZONTAL_PADDING_SCREEN = 32 * 2;
const MARGIN = 6 * 2;

const CARD_WIDTH =
  (dimensions.width - HORIZONTAL_PADDING_SCREEN - MARGIN) / CARDS_PER_ROW;

export const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: 189,
    backgroundColor: THEME.COLORS.GREY_700,
    borderRadius: 6,
    padding: 16,
    margin: MARGIN,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    paddingBottom: 20,
    borderColor: "#fff",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 6,
    backgroundColor: THEME.COLORS.GREY_600,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontFamily: THEME.FONTS.REGULAR,
    color: THEME.COLORS.GREY_100,
    marginTop: 24,
  },
  paket: {
    fontSize: 17,
    color: "#fff",
  },
  cardInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  number: {
    color: "#fff",
  },
  text: {
    color: "#fff",
  },
  skorInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  correctInfo: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  retry: {
    backgroundColor: "#00875F",
    width: "60%",
    textAlign: 'center',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 5,
    color: "#fff",
    fontWeight: "500",
    fontSize: 11,
  },
  retryContainer: {
    display: 'flex',
    marginTop: 25,
    alignItems: 'center'
  }
});
