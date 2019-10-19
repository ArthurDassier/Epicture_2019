import React, { Component } from 'react';
import { View, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';

import LoginButton from './LoginButton';
import Switch from './AppContainer';


class Home extends Component {

    constructor (props) {
        super(props);
        this.state = { isLogged: false };
    }

    _changeLog = () => {
        this.setState({isLogged: true})
    }

    render() {
        if (this.state.isLogged == false) {
            return (
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.BtContainer}>
                            <Image resizeMode="contain" style={styles.logo} source={require('../images/wac.png')} />
                            <LoginButton func={this._changeLog}/>
                    </View>
                </KeyboardAvoidingView>
            );
        }
        return (
            <Switch/>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    BtContainer:{
        // backgroundColor: '#2c3e50',
        flex:1,
        alignItems: 'center',
        flexGrow: 1,
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,
        top: 120
    },
});


export default Home;