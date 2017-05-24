import { View, Dimensions } from 'react-native'
import GiftedMessenger from 'react-native-gifted-messenger'
import React, { Component } from 'react';

export default class ChatList extends Component {
  
  state = {
    messages: [
      {
        text: 'Are you building a chat app?',
        name: 'React-Bot',
        image: {uri: 'https://facebook.github.io/react/img/logo_og.png'},
        position: 'left',
        date: new Date(2016, 3, 14, 13, 0),
        uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
      },
      {
        text: "Yes, and I use Gifted Messenger!",
        name: 'Chacha',
        image: require('../../images/chacha.png'),
        position: 'right',
        date: new Date(2016, 3, 14, 13, 1),
        uniqueId: Math.round(Math.random() * 10000), // simulating server-side unique id generation
      },
    ]
  }
  
  render() {
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
        }}>
        <GiftedMessenger
          ref={(c) => this._GiftedMessenger = c}
          styles={{
            container: {
              width: Dimensions.get('window').width,
            },
            bubbleRight: {
              marginLeft: 60,
              backgroundColor: "rgba(45,194,246,1)",
            },
          }}
          autoFocus={false}
          messages={this.state.messages}
          handleSend={() => {}}
          onErrorButtonPress={() => {}}
          maxHeight={Dimensions.get('window').height - 20}
      
          loadEarlierMessagesButton={false}
          onLoadEarlierMessages={() => {}}
      
          senderName='Awesome Developer'
          senderImage={null}
          onImagePress={() => {}}
          displayNames={true}
      
          parseText={true}
          handlePhonePress={() => {}}
          handleUrlPress={() => {}}
          handleEmailPress={() => {}}
      
          isLoadingEarlierMessages={ false }
      
          typingMessage={""}
        />
      </View>
      
    )
  }
}