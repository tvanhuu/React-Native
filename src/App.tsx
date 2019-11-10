import React from "react"
import { Text, View } from "react-native"
import { Provider } from "react-redux"
import AppNavigator from "./navigators"

class App extends React.Component {
  public render() {
    return <AppNavigator />
  }
}

export default App
