import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  label: {
    fontSize: 18,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },

  form: {
    paddingHorizontal: 24,
    marginTop: 32,
  },

  select: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 68,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 8,
    paddingRight: 24,
    overflow: "hidden",
  },

  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
  },

  selectBody: {
    flex: 1,
    alignItems: "center",
  },

  field: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },

  column: {
    flexDirection: "row",
    alignItems: "center",
  },

  divider: {
    color: theme.colors.highlight,
    fontSize: 15,
    fontFamily: theme.fonts.text500,
    marginRight: 4,
  },

  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },

  footer: {
    marginVertical: 20,
    marginBottom: 56,
  },
});

export default styles;
