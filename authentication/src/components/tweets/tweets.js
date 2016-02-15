import React, { Component, View, Text, StyleSheet } from 'react-native';


class Tweets extends Component {
  constructor(props) {
    super(props);

    this.nevermind = this.nevermind.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Talley Ho</Text>
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

export default Tweets;
