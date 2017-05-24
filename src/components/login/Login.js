import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TabBarIOS,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width
  },
  titleText: {
    fontSize: 80,
    marginTop: 72,
    marginLeft: 20,
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent'
  },
  tabWrapper: {
    height: 56,
    marginTop: 150,
    flexDirection: 'row',
    borderTopWidth: 1,
    alignItems: 'center',
    borderTopColor: 'rgba(255,255,255,0.2)'
  },
  tabItem: {
    flex: 1,
  },
  tabText: {
    lineHeight: 56,
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
    active: 0,
  }

  switchTab = (index) => {
    console.log(index);
    this.setState({ active: index });
  }

  handleSignIn = () => {
    alert('Sign In');
  }

  handleSignUp= () => {
    alert('Sign Up');
  }

  render() {

    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <Image
          source={require('../../images/login-img.png')}
          style={styles.img}>
          <Text style={styles.titleText}>Livo</Text>
          <View style={styles.tabWrapper}>
            <TouchableHighlight
              style={styles.tabItem}
              underlayColor='transparent'
              onPress={() => this.switchTab(0)}>
              <Text style={[styles.tabText, this.state.active === 0 ? styles.tabActive : '']}>SIGN UP</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={styles.tabItem}
              underlayColor='transparent'
              onPress={() => this.switchTab(1)}>
              <Text style={[styles.tabText, this.state.active === 1 ? styles.tabActive : '']}>SIGN IN</Text>
            </TouchableHighlight>
          </View>
        </Image>
        <View style={styles.emailInput}>
          <TextInput
            style={styles.textInput}
            placeholder='Email'
            keyboardType='email-address'/>
        </View>
        <View style={styles.passwordInput}>
          <TextInput
            style={styles.textInput}
            placeholder='Password'
            maxLength={16}/>
        </View>
        <TouchableHighlight
          style={styles.button}
          underlayColor={'lightsalmon'}
          onPress={this.handleSignIn}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
      </View>
    )
  }
};
