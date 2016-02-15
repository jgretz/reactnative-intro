// imports
import React, { Component, View, Text, StyleSheet } from 'react-native';

// class
class Weather extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{this.props.city}</Text>
        </View>
        <View>
          <Text style={styles.text}>{this.props.temperature}</Text>
        </View>
        <View>
          <Text style={styles.text}>{this.props.description}</Text>
        </View>
      </View>
    )
  }
}

// styles
var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

// export
export default Weather;
