// imports
import React, { Component, View, Text, StyleSheet, Navigator } from 'react-native';

import SignIn from './components/authentication/signin';
import SignUp from './components/authentication/signup';
import Tweets from './components/tweets/tweets';

var ROUTES = {
  signin: SignIn,
  signup: SignUp,
  tweets: Tweets
};

class App extends Component {
  renderScene(route, nav) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={nav} />;
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'signin'}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
