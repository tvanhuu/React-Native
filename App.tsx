import React from 'react';
import {Text, View} from 'react-native';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    return (
      <View
        style={{
          backgroundColor: 'pink',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Demo Test</Text>
      </View>
    );
  }
}

export default App;
