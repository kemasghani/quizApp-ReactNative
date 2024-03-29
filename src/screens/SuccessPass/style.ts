import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#202024",
  },
  title: {
    fontSize: 24,
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
  },
  content: {
    marginTop: 230,
    display: "flex",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",

    fontWeight: "500",
    color: "white",
    marginTop: 40,
    marginBottom: 50
  },

  inputContainer: {
    width: "100%",
    height: 37.903,
    borderRadius: 10,
    backgroundColor: "#E1E1E6",
    marginBottom: 16,
    paddingLeft: 12,
    marginTop: 33,
  },
  input: {
    flex: 1,
    height: "100%",
    paddingRight: 30,
    display: "flex",
  },
  textLink: {
    color: "#FBA94C",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "500",
    letterSpacing: 0.48,
  },
});
