import React, { Component } from 'react';
import Root from './store/index';
import {
  AppRegistry,
} from 'react-native';

export default class reduxUsage extends Component {
  render() {
    return <Root/>;
  }
}

AppRegistry.registerComponent('reduxUsage', () => reduxUsage);
