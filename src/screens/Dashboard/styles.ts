import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREY_800,
    alignItems: "center",
  },
  levels: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  cards: {
    paddingTop: 32,
  },
  infoDashboard: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
  },
  nilai: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
    width: '45%',
  },
  peringkat: {
    width: '45%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#000000",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
  numberNilai: {
    color: "#4ECB71",
    fontSize: 50,
    fontWeight: '600',
  },
  textNilai: {
    color: "#4ECB71",
    fontSize: 15,
    fontWeight: '400',
  },
  numberPeringkat: {
    color: "#FBA94C",
    fontSize: 50,
    fontWeight: '600',
  },
  textPeringkat: {
    color: "#FBA94C",
    fontSize: 15,
    fontWeight: '400',
  },
  textLink: {
    color: "#ffffff",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.48,
    //underline the text
    textDecorationLine: 'underline',

  },
});
