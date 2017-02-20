import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Tabs from '../components/ui/Tabs';
import SceneFilter from '../components/ui/SceneFilter';
import {Provider, connect} from 'react-redux';
import thunk from 'redux-thunk';
import {combineReducers,createStore,applyMiddleware} from 'redux';
import {tapOnTabA, tapOnTabB} from './actions/actions';
import {currentTab,loginStatus} from './reducers/reducers';

const store=createStore(combineReducers({currentTab,loginStatus},applyMiddleware(thunk)));

const SceneFilterContainer=connect((state)=>{
  return {
    currentTab:state.currentTab
  };
})(SceneFilter);

console.log('store',store.getState());

const TabsContainer=connect(undefined,(dispatch)=>{
  return {
    tapOnTabA:()=>{dispatch(tapOnTabA());},
    tapOnTabB:()=>{dispatch(tapOnTabB());}
  }
})(Tabs);

class Root extends React.Component {
  static defaultProps = {
    StyleDefault: StyleSheet.create({
      container: {
        justifyContent: 'flex-end',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
    })
  };

  render() {
    console.log('index will render');
    const {container}=this.props.StyleDefault;
    return (
      <Provider store={store}>
        <View style={container}>
          <SceneFilterContainer/>
          <TabsContainer/>
        </View>
      </Provider>
    );
  }
}

export  default Root;