//import liraries
import React, { Component } from 'react';
import { View, Text, WebView, TouchableOpacity, Alert, Button ,StyleSheet ,StatusBar} from 'react-native';
// import { authorize } from 'react-native-app-auth';


// const config = {
//     issuer: 'https://api.imgur.com',
//     clientId: 'fc7cb1f5f86d0ef',
//     clientSecret: '3c08f63cbc54b6dae4b2ff05144e38ccc9a1aeb4',
//     redirectUrl: 'epicture.arthurdassier.com',
//     scopes: [],
//     serviceConfiguration: {
//         authorizationEndpoint: 'https://api.imgur.com/oauth2/authorize',
//         tokenEndpoint: 'https://api.imgur.com/oauth2/token'
//     }
// };

// const onButtonPress = async() => {
//     try {
//         const result = await authorize(config);
//         // result includes accessToken, accessTokenExpirationDate and refreshToken
//     } catch (error) {
//         console.log(error);
//     }
// };



// https://api.imgur.com/oauth2/authorize?client_id=${apiInfo.clientID}&response_type=token

// create a component
class LoginButton extends Component {
    constructor (props) {
        super(props);
        this.state = { showWebView: false };
    }
    render() {
        if (this.state.showWebView) {
            return (
                <View style={ { flex: 1 } }>
                    <WebView source={ { uri: 'https://api.imgur.com/oauth2/authorize?client_id=fc7cb1f5f86d0ef&response_type=token' } }
                    style={{marginTop: 22, width: 500, height: 100 }} />
                </View>
            )
        }
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.setState({showWebView: true})}>
                    <Text  style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
        container: {
        padding: 20,
    },
    input:{
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer:{
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        width: 70,
        top: 500
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }, 
    loginButton:{
        backgroundColor:  '#2980b6',
        color: '#fff'
    }
   
});

//make this component available to the app
export default LoginButton;