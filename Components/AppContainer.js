import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Icon from 'react-native-vector-icons/AntDesign'

import Profile from './Profile';
import General from './General';
import Favorite from './Favorites';

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

class FavoriteScreen extends React.Component {
  render() {
    return (
        <Favorite/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={'home'} size={22} color={tintColor}/>
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={'user'} size={22} color={tintColor} />
    }
  },
  Favorite: {
    screen: FavoriteScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Icon name={'staro'} size={22} color={tintColor} />
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: '#061234',
    style: {
      backgroundColor:'#1bb76e'
    }
  }
});

export default createAppContainer(TabNavigator);