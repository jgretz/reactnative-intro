// import
import React, { Component, TouchableHighlight, Text, StyleSheet } from 'react-native';

// class
class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        underlayColor="gray"
        style={[styles.button, this.props.style]}
        onPress={this.props.onPress}
      >
        <Text>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

// style
const styles = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// export
export default Button;
