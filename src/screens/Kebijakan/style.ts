import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: "#202024",
  },
  scroll: {
    paddingHorizontal: "3%",
    width: "96%",
    marginTop: 20
  },
  title: {
    fontSize: 30,
    width: "100%",
    textAlign: "left",
    fontWeight: "bold",
    color: "white",
  },
  contentPoint: {
    display: "flex",
    flexDirection: "column",
    rowGap: 40,
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    rowGap: 20,
    marginBottom: 70,
  },
  subTittle: {
    fontSize: 23,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  textContent: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: "400",
    color: "white",
  },
  listItem: {
    flexDirection: "row",
    paddingVertical: 3,
    paddingLeft: 15,
  },
  bullet: {
    fontSize: 18,
    marginRight: 8,
    color: "white",
  },
  itemText: {
    fontSize: 16,
  },
});
