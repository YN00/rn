import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {style} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';

class SearchTab extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="ios-search" />,
  };
  render() {
    return (
      <View style={style.container}>
        <Text>SearchTab</Text>
      </View>
    );
  }
}

export default SearchTab;
