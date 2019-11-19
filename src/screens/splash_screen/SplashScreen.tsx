import React, { Component } from "react"
import { View, Text, ActivityIndicator } from "react-native"

import styles from "./styles"
import { appLanguages } from "/languages"
import { compose } from "redux"
import { withRedux } from "./redux"
import { log } from "/utils/log"
import { Props, State } from "./types"

class Splash extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    log(this.props.currentLang)
    this.props.languageActions.setLanguage(this.props.currentLang)
  }

  onSelectLanguage(value: keyof typeof appLanguages) {}

  render() {
    const { currentLang, lang, languageActions } = this.props
    // setTimeout(() => languageActions.setLanguage("vn"), 5000)

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="small" color={"red"} />
        <Text style={{ paddingTop: 10 }}>{lang.common.success}</Text>
      </View>
    )
  }
}

export default compose(withRedux)(Splash)
