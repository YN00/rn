import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {style} from './HomeTab';
import Icon from 'react-native-vector-icons/MaterialIcons';

class LikesTab extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="like2" />,
  };
  render() {
    return (
      <View style={style.container}>
        <Text>LikeTabs</Text>
      </View>
    );
  }
}

export default LikesTab;
