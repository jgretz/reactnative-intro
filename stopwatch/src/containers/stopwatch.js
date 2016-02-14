// imports
import React, { Component, Text, View, AppRegistry, StyleSheet } from 'react-native';

import Timer from '../components/timer';
import Button from '../components/button';

// class
class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleLap = this.handleLap.bind(this);

    this.state = {
      timeElapsed: null,
      interval: null
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerContainer}>
            <Timer text={this.state.timeElapsed} />
          </View>
          <View style={styles.buttonContainer}>
            <Button text={ this.state.interval ? "Stop" : "Start" }
              onPress={this.handleStartStop}
              style={ this.state.interval ? styles.stopButton : styles.startButton} />
            <Button text="Lap" onPress={this.handleLap} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text>
            I am a list of laps
          </Text>
        </View>
      </View>
    );
  }

  handleStartStop() {
    if (this.state.interval) {
      clearInterval(this.state.interval);

      this.setState({
        interval: null
      });
      return;
    }

    const startTime = new Date();
    const interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - startTime
      });
    }, 30);

    this.setState({ interval });
  }

  handleLap() {

  }
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  },
  timerContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  startButton: {
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  }
});

// export
export default StopWatch;
