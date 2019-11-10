import React from "react"
import { View, SafeAreaView, Text } from "react-native"

import styles from "./styles"

interface Props {}

interface State {}

class Temp extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Temp</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default Temp
