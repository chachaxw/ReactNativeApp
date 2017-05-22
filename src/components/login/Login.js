import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TabBarIOS,
  TextInput,
  StyleSheet,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: 375,
    height: 375
  },
  titleText: {
    fontSize: 80,
    marginTop: 72,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  },
  tab: {
    height: 56,
    marginTop: 150,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignItems: 'center',
    borderTopColor: 'rgba(255,255,255,0.2)'
  },
  tabText: {
    flex: 1,
    textAlign: 'center',
    color: 'hsla(360,100%,100%,0.4)',
    backgroundColor: 'transparent'
  },
  tabActive: {
    color: '#fff'
  },
  textInput: {
    height: 30,
    marginTop: 5,
    textAlign: 'center',
    color: '#595968'
  },
  emailInput: {
    width: 220,
    height: 40,
    marginTop: 45,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  passwordInput: {
    width: 180,
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  button: {
    width: 112,
    height: 45,
    marginTop: 32,
    borderRadius: 45,
    backgroundColor: '#FF8162',
  },
  buttonText: {
    backgroundColor: 'hsla(360,100%,100%,0)',
    color: 'white',
    marginTop: 15,
    textAlign: 'center',
  }
});

export default class Login extends Component {

  state = {
    active: 1,
  }

  handleLogin = () => {
    alert('Login');
  }

  switchTab = () => {
    console.log("Switch Tab");
  }

  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <Image source={require('../../images/login-img.png')} style={styles.img}>
          <Text style={styles.titleText}>Livo</Text>
          <View style={styles.tab}>
            <Text style={[styles.tabText, this.state.active === 0 ? styles.tabActive : '']}>SIGN UP</Text>
            <Text style={[styles.tabText, this.state.active === 1 ? styles.tabActive : '']}>SIGN IN</Text>
          </View>
        </Image>
        <View style={styles.emailInput}>
          <TextInput style={styles.textInput} placeholder='Email' keyboardType='email-address'/>
        </View>
        <View style={styles.passwordInput}>
          <TextInput style={styles.textInput} placeholder='Password' maxLength={16}/>
        </View>
        <TouchableHighlight style={styles.button} underlayColor={'lightsalmon'} onPress={this.handleLogin}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
      </View>
    )
  }
};
