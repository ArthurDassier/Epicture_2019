import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Preview from './Preview.js';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {data: [],
            isFetching: false};
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

    getProfileImage = () => {
        fetch(`https://api.imgur.com/3/gallery/hot/viral/day/0?showViral=true&mature=true&album_previews=false`, {
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

    myClick = (Name, Link, Id, Favorite, Views) => {

    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.getProfileImage() });
     }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={this.state.data}
                    onRefresh={() => this.onRefresh()}
                    refreshing={this.state.isFetching}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        if (item.link.includes(".gif") || item.link.includes(".jpg") || item.link.includes(".png")) {
                            return <Preview name={item.title} link={item.link} id={item.id} favorite={item.favorite} views={item.views} clicked={this.myClick}/>
                        } else if (item.images && item.images.length > 0 && (item.images[0].link.includes(".gif") || item.images[0].link.includes(".jpg") || item.images[0].link.includes(".png"))){
                            return <Preview name={item.title} link={item.images[0].link} id={item.images[0].id} favorite={item.images[0].favorite} views={item.images[0].views} clicked={this.myClick}/>
                        }
                    }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#061234',
    },
});

export default Profile;