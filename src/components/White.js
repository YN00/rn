import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

type Props = {};

const Style = StyleSheet.create({
  test: {
    textAlign: 'center',
  },
});

class White extends Component<Props> {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={Style.test}>처음 작성해본 리액트 네이티브 화면</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default White;
