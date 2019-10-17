import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'

class Preview extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View>
              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{this.props.name}</Text>
                    <Image style={{width: 250, height: 200}} source={{uri:this.props.link}}></Image>
                    <TouchableOpacity style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginLeft:25, marginRight:25}}>
                        <Icon name={'arrowup'} size={22} color={'white'} onPress={() => console.log('like')}/>
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
    backgroundColor: '#708090',
    width: 250,
    height: 275,
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

export default Preview;