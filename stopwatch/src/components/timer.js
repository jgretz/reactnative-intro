// import
import React, { Component, View, Text, StyleSheet } from 'react-native';
import formatTime from 'minutes-seconds-milliseconds';

// class
class Timer extends Component {
  render() {
    return (
      <Text style={styles.timer}>
        {formatTime(this.props.text)}
      </Text>
    );
  }
}

// style
const styles = StyleSheet.create({
  timer: {
    fontSize: 60
  }
});

// export
export default Timer;
