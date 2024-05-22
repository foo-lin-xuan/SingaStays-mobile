import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  section: {
    marginBottom: 40,
  },
  line: {
    borderBottomColor: "#080808",
    borderBottomWidth: 3,
    marginBottom: 10,
    width: 80,
  },
  h1: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
  h2: {
    fontFamily: "Poppins-Bold",
    fontSize: 21,
  },
  span: {
    color: "#e34b36",
  },
  p1: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    marginBottom: 15,
    lineHeight: 24,
  },
  p2: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    marginBottom: 13,
    lineHeight: 23,
  },
  buttonPrimaryContainer: {
    backgroundColor: "#244D3B",
    borderRadius: 4,
    paddingTop: 7,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: "flex-start",
  },
  buttonPrimary: {
    fontFamily: "Inter-Medium",
    fontSize: 16,
    marginBottom: 5,
    lineHeight: 24,
    color: "#fff",
    textAlign: "center",
  },
  textCenter: {
    textAlign: "center",
    alignSelf: "center",
  },
});
