import React, { Component, Text } from 'react-native';

class DayItem extends Component {
  constructor(props) {
    super(props);

    this.styles = this.styles.bind(this);
    this.color = this.color.bind(this);
    this.fontWeight = this.fontWeight.bind(this);
    this.fontSize = this.fontSize.bind(this);
    this.lineHeight = this.lineHeight.bind(this);
  }

  render() {
    return (
      <Text style={this.styles()}>
        {this.props.day}
      </Text>
    );
  }

  styles() {
    return {
      color: this.color(),
      fontWeight: this.fontWeight().toString(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    };
  }

  color() {
    var opacity = this.props.daysUntil > 0 ? 1 / this.props.daysUntil : 1;
    return `rgba(0, 0, 0, ${opacity})`;
  }

  fontWeight() {
    return (7 - this.props.daysUntil) * 100;
  }

  fontSize() {
    return 60 - (6*this.props.daysUntil);
  }

  lineHeight() {
    return 70 - (4*this.props.daysUntil);
  }
}

export default DayItem;
