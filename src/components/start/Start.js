import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  viewBackground: {
    /* Background: */
    height: '100%',
    backgroundColor: 'linear-gradient(36deg, rgba(183,113,189,0.80) 0%, #474B91 100%)',
  }
})

export default class StartPage extends Component {

  render() {
    return (
      <View style={styles.viewBackground}>
        <Text style={{color: '#fff'}}>Hello</Text>
      </View>
    )
  }
};
