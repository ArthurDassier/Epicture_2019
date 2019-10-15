import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/AntDesign'

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
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={'home'} size={22} color={'black'} />
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={'user'} size={22} color={'black'} />
    }
  }
});

export default createAppContainer(TabNavigator);