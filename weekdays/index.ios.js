// create react Component
import React, { AppRegistry, Component, View, Text, StyleSheet } from 'react-native';

// class
class weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Days of the Week</Text>
      </View>
    )
  }
}

// style the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show component on screen
AppRegistry.registerComponent('weekdays', () => weekdays);
