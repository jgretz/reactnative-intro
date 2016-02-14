// imports
import React, { AppRegistry, Component, View, Text, StyleSheet } from 'react-native';
import Moment from 'moment';

import Day from './src/day_item';

// class
class weekdays extends Component {
  render() {
    return (
      <View style={styles.container}>
        { this.renderDays() }
      </View>
    )
  }

  renderDays() {
    const dayItems = [];
    for (let i = 0; i < 7; i++) {
      dayItems.push(
        <Day key={i} day={Moment().add(i, 'days').format('dddd')} daysUntil={i} />
      )
    }

    return dayItems;
  }
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// Show component on screen
AppRegistry.registerComponent('weekdays', () => weekdays);
