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
    width: "80%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    marginBottom: 70,
  },
  subTitle: {
    fontSize: 14,
    textAlign: "left",
    fontWeight: "300",
    color: "white",
  },

  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    height: 37.903,
    borderRadius: 10,
    backgroundColor: "#E1E1E6",
    marginBottom: 16,
    paddingLeft: 12,
    marginTop: 44,
  },
  spinnerText: {
    color: "white",
  },
  inputContainer2: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 5,
    height: 37.903,
    borderRadius: 10,
    backgroundColor: "#E1E1E6",
    marginBottom: 16,
    paddingLeft: 12,
    marginTop: 4,
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
