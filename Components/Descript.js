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
            <View style={{backgroundColor: '#061234', flex:1}}>
                <View >
                    <TouchableOpacity style={styles.buttonFave} onPress={() => this.props.clicked()}>
                        <Icon name={'arrowleft'} size={40} color={'white'} style={{marginTop:20}}/>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center'}}>
                        <Text style={styles.ImageName}>{this.props.name}</Text>
                        <Image style={styles.image} source={{uri:this.props.link}}></Image>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', width:420}}>
                    <TouchableOpacity style={styles.buttonFave} onPress={this.favMe}>
                        <Icon name={'staro'} size={50} color={'white'}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonDelete} onPress={() => this.props.deleted()}>
                        <Icon name={'delete'} size={50} color={'white'}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
buttonFave:{
    textAlign: 'center',
    width: 75,
    height: 75,
    marginLeft:10
},
buttonDelete:{
    textAlign: 'center',
    width: 75,
    height: 75,
},
ImageName:{
    color: 'white',
    textAlign: 'center',
},
image:{
    width: 400,
    height: 350,
    borderColor: 'black',
    borderWidth: 1
},
loginButton:{
    backgroundColor: '#2980b6',
    color: '#fff'
}

});

export default Descript;