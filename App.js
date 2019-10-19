import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Home from './Components/Home';

export default class DemoLogin extends Component {
  render() {
    return (
     <Home />
    );
  }
}

AppRegistry.registerComponent('DemoLogin', () => DemoLogin);