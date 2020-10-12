import React from 'react';
import { StyleSheet, Text, View, Header } from 'react-native';
import FaceBook from './screens/FaceBook';
import Instagram from './screens/Instagram';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook: { screen: FaceBook },
  Instagram: { screen: Instagram },
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
