import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {style} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AddMediaTab extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="md-add-circle-outline" />,
  };
  render() {
    return (
      <View style={style.container}>
        <Text>AddMediaTab</Text>
      </View>
    );
  }
}

export default AddMediaTab;
