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
            <View style={{marginTop: 20}}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.clicked(this.props.name, this.props.link, this.props.id, this.props.favorite, this.props.views)}>
                    <Text style={styles.buttonText}>{this.props.name}</Text>
                    <Image style={{width: 300, height: 200}} source={{uri:this.props.link}}></Image>
                    <View style={styles.toolBarStyle}>
                    <TouchableOpacity>
                        <Icon name={'staro'} size={25} color={'white'} onPress={this.favMe}/>
                    </TouchableOpacity>
                        <Icon name={'message1'} size={25} color={'white'} onPress={() => console.log('message')}/>
                        <TouchableOpacity style={styles.viewStyle}>
                            <Text style={{color: 'white'}}>{this.props.views}</Text>
                            <Icon name={'eye'} size={25} color={'white'}/>
                        </TouchableOpacity>
                    </View>
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
    width: 300,
    height: 275,
    top: 10,
    
},
buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth:2,
    backgroundColor: '#474a51',
    borderColor: '#474a51'
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
    backgroundColor: '#474a51'
},
viewStyle: {
    flexDirection: 'row',
}

});

export default Preview;