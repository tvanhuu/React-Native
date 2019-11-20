import { StyleSheet } from "react-native"

import { color } from "/configs"
import { responsive, getScreenHeight, getScreenWidth } from "/utils/dimension"

const WIDTH = getScreenHeight(1)
const HEIGHT = getScreenWidth(1)

export default StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: color.background,
      alignItems: "center",
      justifyContent: "center"
   }
})
