import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/wac.png')} />
        </View>

          <View style={styles.formContainer}>
          </View>
         
       </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  loginContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
      position: 'absolute',
      width: 300,
      height: 100
  }
});