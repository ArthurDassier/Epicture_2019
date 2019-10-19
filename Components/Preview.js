import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'


class Preview extends Component {

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
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.clicked(this.props.name, this.props.link, this.props.id, this.props.favorite)}>
                    <Text style={styles.buttonText}>{this.props.name}</Text>
                    <Image style={{width: 250, height: 200}} source={{uri:this.props.link}}></Image>
                    <TouchableOpacity style={styles.toolBarStyle}>
                        <Icon name={'staro'} size={22} color={'white'} onPress={this.favMe}/>
                        <Icon name={'arrowdown'} size={22} color={'white'} onPress={() => console.log('dislike')}/>
                        <Icon name={'mail'} size={22} color={'white'} onPress={() => console.log('message')}/>
                        <Icon name={'eye'} size={22} color={'white'} onPress={() => console.log('vue')}/>
                    </TouchableOpacity>
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
    width: 250,
    height: 275,
    top: 30,
    
},
buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth:2,
    backgroundColor: '#1e90ff',
    borderColor: '#1e90ff'
}, 
loginButton:{
    backgroundColor: '#2980b6',
    color: '#fff'
},
toolBarStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#1e90ff'
}

});

export default Preview;