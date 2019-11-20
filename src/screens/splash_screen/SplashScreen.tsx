import React, { Component } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import styles from "./styles"
import { appLanguages } from "/languages"
import { compose } from "redux"
import { withRedux } from "./redux"
import { log } from "/utils/log"
import { Props, State } from "./types"
import Config from "react-native-config"
import { userInfo } from "os"
import { ReduxStateType } from "/redux/types"

class Splash extends React.Component<Props, State> {
   constructor(props: Props) {
      super(props)
      this.state = {}
   }

   componentDidMount() {
      // this.props.languageActions.setLanguage(this.props.currentLang)
      // this.props.userAction.login({ username: "demacia2k12@gmail.com", password: "Topica@123" })
   }

   componentDidUpdate(prevProps: Props, prevState: State) {
      const { userState } = this.props

      if (prevProps.userState !== userState) {
         switch (userState.status) {
            case ReduxStateType.LOADING:
               log("LOADING")
               break
            case ReduxStateType.SUCCESS:
               log("SUCCESS", userState.data)
               break
            case ReduxStateType.ERROR:
               log("ERROR", userState.error)
               break
            case ReduxStateType.CANCELLED:
               log("CANCELLED")
               break
         }
      }
   }

   render() {
      const { currentLang, lang, languageActions } = this.props

      return (
         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <ActivityIndicator size="small" color={"red"} />
            <Text style={{ paddingTop: 10 }}>{lang.common.success}</Text>
         </View>
      )
   }
}

export default compose(withRedux)(Splash)
