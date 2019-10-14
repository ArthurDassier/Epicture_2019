import React, { Component } from 'react';
import { View, Text, Image, StyleSheet,KeyboardAvoidingView } from 'react-native';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {link: 'init'};
    }

    componentDidMount(){
        return fetch(`https://api.imgur.com/3/account/${global.username}/images/0`, {
        headers: {
            "Authorization": `Bearer ${global.access_token}`
          }})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data[0].link);
                this.setState({link: responseJson.data[0].link});
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <Image style={{width: 400, height: 400}} source={{uri:this.state.link}}></Image>
            </View>
        );
    }
}

export default Profile;