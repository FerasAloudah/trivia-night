import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import HomeScreen from './screens/HomeActivity'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainActivity from './screens/MainActivity';
import Catagory from './screens/catagoryActivity';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Main: { screen: MainActivity },
    Catagory: { screen: Catagory },

  },
  {
    initialRouteName: 'Home',
  }

);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return (
      <AppContainer
        ref={nav => {
          this.navigator = nav;
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
