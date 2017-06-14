import React, { Component } from 'react';
import { View, Dimensions } from 'react-native'
import { GiftedChat, Actions, Bubble } from 'react-native-gifted-chat'

export default class ChatList extends Component {
  
  state = {
    messages: [
      {
        _id: Math.round(Math.random() * 10000), // simulating server-side unique id generation
        text: 'Are you building a chat app?',
        createdAt: new Date(2017, 6, 1, 16, 28),
        user: {
          _id: 1,
          name: 'React-Bot',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
        }
      },
      {
        _id: Math.round(Math.random() * 10000), // simulating server-side unique id generation
        text: "Yes, and I use Gifted Chat!",
        createdAt: new Date(2017, 6, 1, 16, 0),
        user: {
           _id: 2,
           name: 'Chacha',
           avatar: require('../../images/chacha.png'),
        },
        image: 'https://facebook.github.io/react/img/logo_og.png',
      },
    ]
  }
  
  sendMessage = (messages = []) => {
    alert('Send Message');
    this.setState((previousState) => (
      {
        messages: GiftedChat.append(previousState.messages, messages) 
      }
    ));
  }
  
  render() {
    return (
      <View style={{
          flex: 1,
          marginTop: 20,
        }}>
        <GiftedChat
          user={{
            _id: 1,
          }}
          renderAvatarOnTop
          messages={this.state.messages}
          onSend={() => this.sendMessage()}
        />
      </View>
    )
  }
}