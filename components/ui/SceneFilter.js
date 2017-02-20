import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import SceneA from './SceneA';
import SceneB from './SceneB';
class SceneFilter extends React.Component{
  static defaultProps={
    StyleDefault:StyleSheet.create({
      container:{
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height-75,
        justifyContent:'flex-start'
      }
    })
  };
  render(){
    const {currentTab}=this.props;
    const { container } = this.props.StyleDefault;
    return (
      <View style={container}>
        {currentTab.tabA?<SceneA/>:null}
        {currentTab.tabB?<SceneB/>:null}
      </View>
    );
  }
}

export default SceneFilter;