import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

class Descript extends Component {

    constructor (props) {
        super(props);
    }

    favMe = () => {
        fetch(`https://api.imgur.com/3/image/${this.props.id}/favorite`, {
        method: 'POST',
        headers: {
            "Authorization": `Bearer ${global.access_token}`
          }})
            .then((response) => response.json())
            .then((responseJson) => {
                console.log('Favorite');
            }).catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
            <View>
                <Icon name={'arrowleft'} size={56} color={'black'} onPress={() => this.props.clicked()}/>
                <Text style={styles.buttonText}>{this.props.name}</Text>
                <Image style={{width: 150, height: 150}} source={{uri:this.props.link}}></Image>
                <Icon name={'arrowup'} size={22} color={'white'}/>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.deleted()}>
                    <Icon name={'staro'} size={50} color={'white'} onPress={this.favMe}/>
                    <Icon name={'delete'} size={50} color={'white'}/>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
container: {
    padding: 20,
},
buttonContainer:{
    backgroundColor: '#708090',
    width: 200,
    height: 200,
    top: 30
},
buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
}, 
loginButton:{
    backgroundColor: '#2980b6',
    color: '#fff'
}

});

export default Descript;