import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {style} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="ios-person" />,
  };
  render() {
    return (
      <View style={style.container}>
        <Text>ProfileTab</Text>
      </View>
    );
  }
}

export default ProfileTab;
