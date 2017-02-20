import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';

class SceneA extends React.Component{
  static defaultProps={
    StyleDefault:StyleSheet.create({
      container:{
        height:Dimensions.get('window').height-75,
        justifyContent:'center',
        alignItems:'center',
      }
    })
  };
  render(){
    const { container }=this.props.StyleDefault;
    return (
      <View style={container}>
        <Text>Hello , this is Scene A !</Text>
      </View>
    );
  }
}

export default SceneA;