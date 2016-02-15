import React, { Component, View, Text, StyleSheet } from 'react-native';

import Map from "../components/map";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
})

export default App;
