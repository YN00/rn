import React, {Component} from 'react';
import {StyleSheet, Platform, View, Text} from 'react-native';
import {Icon} from 'native-base';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLeft: {
    paddingLeft: 10,
  },
  headerRight: {
    paddingRight: 10,
  },
});

const AppTabNavigator = createBottomTabNavigator(
  {
    HomeTab: {screen: HomeTab},
    SearchTab: {screen: SearchTab},
    AddMediaTab: {screen: AddMediaTab},
    LikesTab: {screen: LikesTab},
    ProfileTab: {screen: ProfileTab},
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        ...Platform.select({
          ios: {
            backgroundColor: 'white',
          },
        }),
      },
    },
    iconStyle: {height: 100},
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  },
);

const AppTabContainer = createAppContainer(AppTabNavigator);

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera" style={styles.headerLeft} />,
    title: 'Instagram',
    headerRight: <Icon name="ios-send" style={styles.headerRight} />,
  };

  render() {
    return <AppTabContainer />;
  }
}

export default MainScreen;
