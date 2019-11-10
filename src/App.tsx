import React from "react"
import { Text, View } from "react-native"
import { Provider } from "react-redux"
import configureStore from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import AppNavigator from "./navigators"

class App extends React.Component {
  public render() {
    return (
      <AppNavigator />
      // <Provider store={configureStore().store}>
      //   <PersistGate persistor={configureStore().persistor}>
      //     <AppNavigator />
      //   </PersistGate>
      // </Provider>
    )
  }
}

export default App
