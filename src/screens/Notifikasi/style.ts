import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  scrollViewContent: {
    backgroundColor: THEME.COLORS.GREY_800,
    height: "100%",
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    rowGap: 30,
  },

  singleNotif: {
    display: "flex",
    flexDirection: "row",
    columnGap: 19,
    borderBottomWidth: 1,
    borderColor: "white",
    paddingBottom: 30,
  },
  notifText: {
    color: "white",
    width: "90%",
    fontWeight: "300",
  },
  link: {
    textDecorationLine: "underline",
    color: "#fe9526",
  },
});
