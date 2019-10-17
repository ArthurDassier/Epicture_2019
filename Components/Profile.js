import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import Preview from './Preview.js';
import ToolBar from './ToolBar.js';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        return fetch(`https://api.imgur.com/3/account/${global.username}/images/0`, {
        headers: {
            "Authorization": `Bearer ${global.access_token}`
          }})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({data: responseJson.data});
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                            <View>
                                <Preview name={item.name} link={item.link}/>
                                <ToolBar/>
                            </View>
                )}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
    },
});

export default Profile;