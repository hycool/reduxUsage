import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';

class Tabs extends React.Component{
  static defaultProps={
    activeOpacity:0.7,
    StyleDefault:StyleSheet.create({
      container:{
        flexDirection:'row',
        height:50,
        marginBottom:25,
        width:Dimensions.get('window').width+1,
        borderTopWidth:0.5
      },
      tabItem:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        borderRightWidth:0.5,
        justifyContent:'center',
      },
      tabText:{
        color:'#0066cc',
        textAlign:'center',
        fontSize:16
      }
    })
  };
  render(){
    const { container, tabItem, tabText }=this.props.StyleDefault;
    const { activeOpacity,tapOnTabA,tapOnTabB }=this.props;
    return (
      <View style={container}>
        <TouchableOpacity style={tabItem} activeOpacity={activeOpacity} onPress={tapOnTabA}>
          <Text style={tabText}>Tab One</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tabItem} activeOpacity={activeOpacity} onPress={tapOnTabB}>
          <Text style={tabText}>Tab Two</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Tabs;