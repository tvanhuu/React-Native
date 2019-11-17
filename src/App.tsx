import React from "react"
import { Provider } from "react-redux"
import AppNavigator from "./navigators"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from "/redux/store"

interface Props {}
interface State {}
export default class App extends React.Component<Props, State> {
  state: State = {}

  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    )
  }
}
