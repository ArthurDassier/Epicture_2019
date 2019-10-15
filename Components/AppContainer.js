import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Profile from './Profile';
import General from './General';

class HomeScreen extends React.Component {
  render() {
    return (
      <General/>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <Profile/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Profile: ProfileScreen,
});

export default createAppContainer(TabNavigator);