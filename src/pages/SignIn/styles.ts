import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary100,
  },

  image: {
    width: "100%",
    height: 360,
  },

  content: {
    marginTop: -50,
    paddingHorizontal: 50,
  },

  title: {
    color: theme.colors.heading,
    textAlign: "center",
    fontSize: 36,
    marginBottom: 14,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },

  subtitle: {
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: "center",
    marginBottom: 50,
    fontFamily: theme.fonts.title500,
    lineHeight: 25,
  },
});

export default styles;
