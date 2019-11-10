import React, { PureComponent } from "react"
import { Text as RNText, View, StyleSheet } from "react-native"
import TextProps from "./TextProps"
import styles from "./styles"
import { color } from "/configs"

class Text extends PureComponent<TextProps> {
  public static defaultProps: TextProps = {
    typography: "normal",
    style: {},
    color: color.text
  }

  render() {
    const {
      children,
      style: styleOverride,
      color,
      leading,
      trailing,
      typography: typographyKey,
      ...rest
    } = this.props

    const style = StyleSheet.flatten([styles.text, { color }, styleOverride])

    const text = (
      <RNText style={style} {...rest}>
        {children}
      </RNText>
    )

    if (leading || trailing) {
      return (
        <View style={styles.container}>
          {leading}
          {text}
          {trailing}
        </View>
      )
    }

    return text
  }
}

export default Text
