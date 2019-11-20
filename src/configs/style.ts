import { StyleSheet } from "react-native"

import fontSize from "/configs/fontSize"

import color from "./color"
import radius from "./radius"

export default StyleSheet.create({
   shadow: {
      elevation: 3,
      shadowOffset: { width: 0, height: 3 },
      shadowRadius: radius.m,
      shadowColor: color.black,
      shadowOpacity: 0.1,
   },
   expand: {
      flex: 1,
   },
   centerRow: {
      flexDirection: "row",
      alignItems: "center",
   },
   errorText: {
      color: color.red,
      marginTop: 5,
      fontSize: fontSize.error,
   },
   position: {
      position: "absolute",
      alignItems: "center",
      justifyContent: "center",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
   },
})
