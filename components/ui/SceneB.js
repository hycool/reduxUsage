import React, { Component } from 'react';
import { View, StyleSheet,Dimensions} from 'react-native';
import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import {login, logout} from '../../store/actions/actions';

const LoginPageContainer=connect((state)=>{
  return {
    loginStatus:state.loginStatus
  };
},(dispatch)=>{
  return {
    login:()=>{
      fetch('http://192.168.100.67:8887/login.json')
        .then(res=>res.json())
        .then(data=>{
          dispatch(login(data));
        })
    },
    logout:()=>{dispatch(logout())}
  };
})(LoginPage);

class SceneB extends React.Component{
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
        <LoginPageContainer/>
      </View>
    );
  }
}

export default SceneB;