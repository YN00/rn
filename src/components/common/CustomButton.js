import React, {Component} from 'react';

import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const Style = StyleSheet.create({
  buttonColor: {
    color: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class CustomButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, onPress} = this.props;
    return (
      <TouchableOpacity style={Style.buttonColor} onPress={onPress}>
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;
