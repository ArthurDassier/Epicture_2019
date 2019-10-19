import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';

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
                        avatar:'init',
                        hash:'init',
                    views:'init',
                    favorite:false,
                    isFetching: false};
                }


    getAvatar = () => {
        fetch(`https://api.imgur.com/3/account/${global.username}/avatar`, {
        headers: {
            "Authorization": `Bearer ${global.access_token}`
            }})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.data.avatar)
                this.setState({avatar:responseJson.data.avatar})
            }).catch((error) => {
                console.error(error);
            });
    }
    
    getProfileImage = () => {
        fetch(`https://api.imgur.com/3/account/${global.username}/images/0`, {
        headers: {
            "Authorization": `Bearer ${global.access_token}`
        }})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({data: responseJson.data,
                            deleted:false,
                            isFetching: false});
            }).catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.getProfileImage()
        this.getAvatar()
    }

    componentDidUpdate() {
        if (this.state.deleted)
            this.getProfileImage()
    }


    findRightElem = (Name, Link, Id, Favorite, Views) => {
        for (i = 0; i < this.state.data.length; i++) {
            if (Id == this.state.data[i].id) {
                this.setState({isClicked: true,
                            name:Name,
                            link:Link,
                            hash:Id,
                            favorite:Favorite,
                            views:Views})
            }
        }
    }

    goBack = () => {
        this.setState({isClicked: false})
    }

    Deleted = () => {
        fetch(`https://api.imgur.com/3/image/${this.state.hash}`, {
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${global.access_token}`
          }}).then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson);
              this.setState({isClicked: false,
                              deleted:true})
          }).catch((error) => {
              console.error(error);
        });
    }

    onRefresh() {
       this.setState({ isFetching: true }, function() { this.getProfileImage()});
    }

    render() {
        if (this.state.isClicked == false) {
            return (
                <View style={styles.container}>
                    <Image style={{width: 290, height: 200}} source={{uri:this.state.avatar}}></Image>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data}
                        onRefresh={() => this.onRefresh()}
                        refreshing={this.state.isFetching}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                                <Preview name={item.name} link={item.link} id={item.id} hash={item.deletehash} isFav={item.favorite} views={item.views} clicked={this.findRightElem}/>
                    )}/>
                </View>
            )
        }
        return (
            <Descript name={this.state.name} link={this.state.link} id={this.state.hash} deleted={this.Deleted} isFav={this.state.favorite} views={this.state.views} clicked={this.goBack}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#061234',
        alignItems: 'center',
    },
});

export default Profile;