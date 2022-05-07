import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    fontSize:12,
    color: theme.colors.text_secondary,
    fontFamily:theme.fonts.medium,
  },
  image:{
    marginLeft:10,
    width:40,
    height:40,
  }
});
