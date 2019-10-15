import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

import Preview from './Preview.js';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {data: []};
    }

    componentDidMount(){
        return fetch(`https://api.imgur.com/3/gallery/hot/viral/day/0?showViral=true&mature=true&album_previews=false`, {
        headers: {
            "Authorization": `Client-ID fc7cb1f5f86d0ef`
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
                            <Preview name={item.account_id} link={item.link}/>
                )}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

export default Profile;