import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#202024",
    paddingHorizontal: "2%"
  },
  scroll: {
    width: "100%",
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    marginBottom: 70,
  },
  subTitle: {
    marginTop: 20,
    fontSize: 17,
    textAlign: "center",
    fontWeight: "400",
    color: "white",
  },
});
