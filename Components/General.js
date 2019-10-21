import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Preview from './Preview.js';
import Descript from './Descript';

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {data: [],
            isClicked:false,
                        deleted:false,
                        name:'init',
                        link:'init',
                    hash:'init',
                    views:'init',
            isFetching: false,
            isClicked:false};
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

    goBack = () => {
        this.setState({isClicked: false})
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.getProfileImage() });
     }

     findRightElem = (Name, Link, Id, Favorite, Views) => {
        for (i = 0; i < this.state.data.length; i++) {
            if (Name == this.state.data[i].title) {
                this.setState({isClicked: true,
                            name:Name,
                            link:Link,
                            hash:Id,
                            favorite:Favorite,
                            views:Views})
            }
        }
    }

    render() {
            if (this.state.isClicked == false) {
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
                                    return <Preview name={item.title} link={item.link} id={item.id} favorite={item.favorite} views={item.views} clicked={this.findRightElem}/>
                                } else if (item.images && item.images.length > 0 && (item.images[0].link.includes(".gif") || item.images[0].link.includes(".jpg") || item.images[0].link.includes(".png"))){
                                    return <Preview name={item.title} link={item.images[0].link} id={item.images[0].id} favorite={item.images[0].favorite} views={item.images[0].views} clicked={this.findRightElem}/>
                                }
                            }}/>
                    </View>
                );
            }
            return (
                <Descript name={this.state.name} link={this.state.link} id={this.state.hash} deleted={this.Deleted} isFav={this.state.favorite} views={this.state.views} clicked={this.goBack}/>
            )
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