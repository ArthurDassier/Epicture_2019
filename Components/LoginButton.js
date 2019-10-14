import React, { Component } from 'react';
import { View, Text, WebView, TouchableOpacity, StyleSheet, AsyncStorage} from 'react-native';


function getUrlVars(url) {
    var vars = {};
    var parts = url.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}


class LoginButton extends Component {
    constructor (props) {
        super(props);
        this.state = { showWebView: false };
    }

    _onNavigationStateChange = async ( webViewState ) => {
        if ( webViewState.url.startsWith( 'https://api.imgur.com/oauth2/epicture.arthurdassier.com' ) ) {
            global.access_token = getUrlVars(webViewState.url)['access_token']
            global.username = getUrlVars(webViewState.url)['account_username']
            this.props.func();
        }
    }

    render() {
        if (this.state.showWebView) {
            return (
                <View style={ { flex: 1 } }>
                    <WebView source={ { uri: 'https://api.imgur.com/oauth2/authorize?client_id=fc7cb1f5f86d0ef&response_type=token' } }
                    style={{marginTop: 22, width: 500, height: 100 }} 
                    onNavigationStateChange={ this._onNavigationStateChange.bind( this )}/>
                </View>
            )
        }
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.setState({showWebView: true})}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity> 
            </View>
        );
    }
}


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

export default LoginButton;