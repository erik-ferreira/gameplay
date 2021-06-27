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
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 18,
  },

  checked: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },

  check: {
    position: "absolute",
    top: 7,
    right: 7,
    width: 14,
    height: 14,
    backgroundColor: theme.colors.secondary100,
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    borderRadius: 3,
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
  },
});

export default styles;
