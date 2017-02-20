import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';

class LoginPage extends React.Component{
  static defaultProps={
    StyleDefault:StyleSheet.create({
      container:{
      }
    })
  };
  render(){
    const { loginStatus,login,logout}=this.props;
    const { container }=this.props.StyleDefault;
    console.log('loginStatus',loginStatus);
    return (
      <View style={container}>
        {loginStatus.name?<Text>{loginStatus.name}</Text>:null}
        {loginStatus.isLogin?
          <TouchableOpacity onPress={logout}><Text>退出登录</Text></TouchableOpacity>:
          <TouchableOpacity onPress={login}><Text>点我登录</Text></TouchableOpacity>}
      </View>
    );
  }
}

export default LoginPage;