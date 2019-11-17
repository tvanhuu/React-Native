import React, { Component } from "react"
import { View, SafeAreaView, Text, ActivityIndicator, TouchableOpacity } from "react-native"

import styles from "./styles"
import { NavigationParams } from "react-navigation"
import { appLanguages } from "/languages"
import { compose } from "redux"
import { withRedux, SplashReduxProps } from "./redux"
import { log } from "/utils/log"

interface Props extends SplashReduxProps {
  navigation: NavigationParams
}

interface State {}

class Splash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  onSelectLanguage(value: keyof typeof appLanguages) {}

  render() {
    const { currentLang, lang, languageActions } = this.props
    log(this.props)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="small" color={"red"} />
        <Text style={{ paddingTop: 10 }}>{lang.common.success}</Text>
      </View>
    )
  }
}

export default compose(withRedux)(Splash)
