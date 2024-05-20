import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  scrollViewContent: {
    backgroundColor: "#202024",
  },

  container: {
    backgroundColor: "#202024",
    flex: 1
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  loginCard: {
    marginTop: -50,
    width: "80%",
    height: "auto",
    backgroundColor: THEME.COLORS.GREY_500,
    padding: 28,
    borderRadius: 15,
    marginBottom: 30,
  },

  inputContainer: {
    width: "100%",
    height: 37.903,
    borderRadius: 10,
    backgroundColor: "#E1E1E6",
    marginBottom: 16,
    paddingLeft: 12
  },
  input: {
    flex: 1,
    height: "100%",
    paddingRight: 30,
    display: "flex",
  },
  inputLabel: {
    color: "#FFF",
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.48,
    display: "flex",
    marginLeft: 10,
    marginBottom: 6,
  },
  footer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  footerText: {
    color: "#FFF",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.48,
  },
  textLink: {
    color: "#FBA94C",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.48,
  },
});
