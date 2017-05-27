import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#f9f9f9',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'stretch',
  },
  textView: {
    marginTop: 50,
    padding: 40,
    backgroundColor: 'transparent'
  },
  color: {
    color: '#fff',
  },
  title: {
    fontSize: 50,
  },
  content: {
    fontSize: 20,
    width: 225,
    marginTop: 30,
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
      <View style={styles.view}>
        <Image 
          style={styles.bgImage}
          source={require('../../images/landing.png')}
          >
          <View style={styles.textView}>
            <Text style={[styles.color, styles.title]}>Livo best UI KIT</Text>
            <Text style={[styles.color, styles.content]}>
              Use this beautifully drag-and-drop UI kit and 
              create your app in second. With our new Livo UI Kit, 
              you get a consistent, organized and retina-ready 
              set of premium components to build your next iOS interface.
            </Text>
          </View>
        </Image>
      </View>
    )
  }
}

export default LandingPage