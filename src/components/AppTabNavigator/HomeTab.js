import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import {Icon} from 'native-base';
Icon.loadFont();

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: () => <Icon name="ios-home" />,
  };
  render() {
    return (
      <View style={style.container}>
        <Text>HomeTab</Text>
      </View>
    );
  }
}

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeTab;
