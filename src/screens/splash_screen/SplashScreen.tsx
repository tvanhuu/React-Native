import React from "react"
import { View, SafeAreaView, Text, ActivityIndicator, TouchableOpacity } from "react-native"

import styles from "./styles"
import { NavigationParams } from "react-navigation"
import { lang, setLang } from "/language"

interface Props {
  navigation: NavigationParams
}

interface State {}

class Temp extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="small" color={"red"} />
        <Text style={{ paddingTop: 10 }}>{lang.common.success}</Text>
      </View>
    )
  }
}

export default Temp
