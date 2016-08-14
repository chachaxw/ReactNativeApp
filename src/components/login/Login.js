import React, {
  Component,
  View,
  Text,
  Image,
  TabBarIOS,
  TextInput,
  TouchableHighlight,
  StyleSheet
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
    marginTop: 150,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)'
  },
  textInput: {
    height: 30,
    marginTop: 5,
    textAlign: 'center',
    color: '#595968'
  },
  emailInput: {
    width: 226,
    height: 40,
    marginTop: 47,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  passwordInput: {
    width: 197,
    height: 40,
    marginTop: 10,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2'
  },
  button: {
    width: 112,
    height: 45,
    marginTop: 37,
    borderRadius: 45,
    backgroundColor: '#FF8162',
  },
  buttonText: {
    backgroundColor: 'hsla(360,100%,100%,0)',
    color: 'white',
    marginTop: 15,
    textAlign: 'center'
  }
});

export default class Login extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', flex: 1}}>
        <Image source={require('../../images/login-img.png')} style={styles.img} >
          <Text style={styles.titleText}>
            Livo
          </Text>
          <View style={styles.tab}>
            <Text style={{flex: 0.5, lineHeight: 38, textAlign: 'center', color: 'hsla(360,100%,100%,0.4)', backgroundColor: 'transparent'}}>SIGN UP</Text>
            <Text style={{flex: 0.5, lineHeight: 38, textAlign: 'center', color: 'hsla(360,100%,100%,1)', backgroundColor: 'transparent'}}>SIGN IN</Text>
          </View>
        </Image>
        <View style={styles.emailInput}>
          <TextInput style={styles.textInput} placeholder='email' keyboardType='email-address'/>
        </View>
        <View style={styles.passwordInput}>
          <TextInput style={styles.textInput} placeholder='password' maxLength={16}/>
        </View>
        <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableHighlight>
      </View>
    )
  }
};
