// imports
import React, { Component, Text, View, AppRegistry, StyleSheet } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

import Timer from '../components/timer';
import Button from '../components/button';

// class
class StopWatch extends Component {
  constructor(props) {
    super(props);

    this.renderLaps = this.renderLaps.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleLap = this.handleLap.bind(this);

    this.state = {
      startTime: null,
      timeElapsed: null,
      interval: null,
      laps: []
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
          { this.renderLaps() }
        </View>
      </View>
    );
  }

  renderLaps() {
    return this.state.laps.map((lap, index) => {
      return (
        <View key={index}>
          <Text style={styles.lapText}>
            Lap #{index+1}: {formatTime(lap)}
          </Text>
        </View>
      )
    });
  }

  handleStartStop() {
    if (this.state.interval) {
      clearInterval(this.state.interval);

      this.setState({
        interval: null
      });
      return;
    }

    this.setState({
      startTime: new Date()
    });

    const interval = setInterval(() => {
      this.setState({
        timeElapsed: new Date() - this.state.startTime
      });
    }, 30);

    this.setState({ interval });
  }

  handleLap() {
    const lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: [...this.state.laps, lap]
    });
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
  },
  lapText: {
    fontSize: 40
  }
});

// export
export default StopWatch;
