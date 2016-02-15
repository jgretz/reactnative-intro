// imports
import React, { Component, View, MapView, StyleSheet } from 'react-native';

import api from '../actions/api';
import Weather from './weather';

// class
class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pins: [],
      city: '',
      temperature: '',
      description: ''
    };

    this.onRegionChangeComplete = this.onRegionChangeComplete.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          annotations={this.state.pins}
          onRegionChangeComplete={this.onRegionChangeComplete}>
        </MapView>
        <Weather
          style={styles.weather}
          city={this.state.city}
          temperature={this.state.temperature}
          description={this.state.description}
        />
      </View>
    );
  }

  onRegionChangeComplete(region) {
    var pin = {
      latitude: region.latitude,
      longitude: region.longitude
    };

    api(pin.latitude, pin.longitude).then((data) => {
      this.setState(data);
    });

    this.setState({ pins: [ pin ] });
  }
}

// style
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 2
  },
  weather: {
    flex: 1
  }
});

export default Map;
