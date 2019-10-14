import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

class Preview extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View>
              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>{this.props.name}</Text>
                    <Image style={{width: 150, height: 150}} source={{uri:this.props.link}}></Image>
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

export default Preview;