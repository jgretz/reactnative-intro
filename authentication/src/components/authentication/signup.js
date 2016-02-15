import React, { Component, View, Text, TextInput, StyleSheet } from 'react-native';

import Button from '../controls/button';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.nevermind = this.nevermind.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up Here</Text>
        <Button text="Nevermind" onPress={this.nevermind} />
      </View>
    )
  }

  nevermind() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SignUp;
