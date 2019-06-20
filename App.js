import React from 'react';
import HomeScreen from './screens/HomeActivity'
import { createAppContainer, createStackNavigator } from 'react-navigation';
import MainActivity from './screens/MainActivity';
import Catagory from './screens/catagoryActivity';
import Profile from './screens/ProfileActivity';

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Main: { screen: MainActivity },
    Catagory: { screen: Catagory },
    Profile: { screen: Profile },

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


