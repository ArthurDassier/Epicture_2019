//import liraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';
import LoginButton from './LoginButton';

// create a component
class Login extends Component {
    render() {
        return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../images/wac.png')} />
                  
                    </View>
               <View style={styles.BtContainer}>
                   <LoginButton />
               </View>
               
         
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer:{
        backgroundColor: '#2c3e50',
        flex:1,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    BtContainer:{
        backgroundColor: '#2c3e50',
        flex:1,
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },
});

//make this component available to the app
export default Login;