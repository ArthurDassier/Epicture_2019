import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './Components/login';

export default class DemoLogin extends Component {
  render() {
    return (
     <Login />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);