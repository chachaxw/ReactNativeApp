/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import StartPage from './src/components/start/Start';
import Login from './src/components/login/Login';

class ReactNativeApp extends Component {
  render() {
    return (
      <Login />
    );
  }
};

AppRegistry.registerComponent('ReactNativeApp', () => ReactNativeApp);
