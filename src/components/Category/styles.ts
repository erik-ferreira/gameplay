import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginRight: 8,
  },

  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 7,
  },

  checked: {
    width: 12,
    height: 12,
    backgroundColor: theme.colors.primary,
    alignSelf: "flex-end",
    marginRight: 7,
    borderRadius: 3,
  },

  check: {
    width: 14,
    height: 14,
    backgroundColor: theme.colors.secondary100,
    alignSelf: "flex-end",
    marginRight: 7,
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
  },

  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15,
  },
});

export default styles;
