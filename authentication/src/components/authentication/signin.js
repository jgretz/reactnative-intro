// imports
import React, { Component, View, Text, TextInput, StyleSheet } from 'react-native';

import Button from '../controls/button';
import Api from '../../actions/api';

// class
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);

    this.state = {
      username: '',
      password: '',
      errorMessage: ''
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>

        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input} value={this.state.username} onChangeText={this.onUsernameChange} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={this.state.password} onChangeText={this.onPasswordChange} />

        <Text style={styles.label}>{this.state.errorMessage}</Text>
        <Button text="Sign In" onPress={this.signIn} />
        <Button text="I Need An Account ..." onPress={this.signUp} />
      </View>
    );
  }

  signIn() {
    new Api().login(this.state.username, this.state.password).then((result) => {
      this.props.navigator.push({name: 'tweets'});
    })
    .catch((response) => {
      this.setState({
        errorMessage: response.data
      });
    });

    this.setState({
      password: ''
    });
  }

  signUp() {
    this.props.navigator.push({name: 'signup'});
  }

  onUsernameChange(text) {
    this.setState({
      username: text
    });
  }

  onPasswordChange(text) {
    this.setState({
      password: text
    });
  }
}

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});

// export
export default SignIn;
