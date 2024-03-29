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
  },

  headerText: {
    color: "#E1E0E6",
    fontFamily: "Roboto_700Bold",
    fontSize: 24,
    fontStyle: "normal",
    fontWeight: "700",
    letterSpacing: 0.96,
  },
  profileContainer: {
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  },
  profilePicture: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.GREY_700,
  },
  profileInfo: {
    justifyContent: "center",
  },
  nameText: {
    color: "#E1E0E6",
    fontFamily: "Roboto",
    fontSize: 19,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.76,
  },
  emailText: {
    color: "#E1E0E6",
    fontFamily: "Roboto",
    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "400",
    letterSpacing: 0.64,
    opacity: 0.6,
  },
  loginCard: {
    marginTop: 0,
    height: "auto",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    rowGap: 28,
  },
  inputContainer: {
    width: "100%",
    height: 37.903,
    borderRadius: 10,
    backgroundColor: "#E1E1E6",
    marginBottom: 16,
    paddingLeft: 12,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingRight: 30,
    display: "flex",
    color: "black",
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
  singleInput: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 7
  }
});
