// imports
import React, { Component, TouchableHighlight, Text, StyleSheet } from 'react-native';

// class
class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={[styles.button, this.props.style]}
        underlayColor='gray'
        onPress={this.props.onPress}
        >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

// styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 5,
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 20
  }
});

// exports
export default Button;
