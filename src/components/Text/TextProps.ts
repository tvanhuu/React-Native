import { TextProps as Props, TextStyle, StyleProp } from "react-native"

export default interface TextProps extends Props {
  /**
   * An optional style override
   */
  style: StyleProp<TextStyle>

  /**
   * The color to apply
   */
  color: string

  /**
   * The typography
   */
  typography: keyof typeof typography

  /**
   * The leading component to put on the left of the text
   */
  leading?: React.ReactNode

  /**
   * The trailing component to put on the right of the text
   */
  trailing?: React.ReactNode
}
