import React, { Component } from 'react'
import Lightbox from 'react-native-lightbox'
import NavigationBar from 'react-native-navbar'
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'white',
  },
  lightbox: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').width/3
  }
})

class LandingPage extends Component {

  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <NavigationBar
          title={{ title: 'Triple', tintColor: '#FF8162', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }}
          style={styles.navBar}
          statusBar={{ tintColor: "white", }}
        />
        <View style={styles.lightbox}>
          <Lightbox navigator={this.props.navigator}>
            <Image 
              style={styles.image}
              source={{uri:'https://unsplash.it/600/400/?random'}}
            />
          </Lightbox>
        </View>
      </View>
    )
  }
}

export default LandingPage