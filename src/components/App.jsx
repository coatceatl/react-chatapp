import React, {Component} from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';
import RoomList from './RoomList.jsx';

import { tokenUrl, instanceLocator } from '../../config.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'jane',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    })

    chatManager.connect()
      .then(currentUser => {
        this.currentUser = currentUser

        this.currentUser.getJoinableRooms()
          .then(joinableRooms => {
            this.setState({
              joinableRooms,
              joinedRooms: this.currentUser.rooms
            })
          })
          .catch(err => console.log('error om joinableRooms '))

        this.currentUser.subscribeToRoom({
          roomId: 17236968,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
      })
        .catch(err => console.log('error on connecting '))

  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: 17236968
    })
  }

  render() {
    return (
      <div className='app'>
        <RoomList rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages}/>
        <MessageForm sendMessage={this.sendMessage}/>
      </div>
    )
  }
}

export default App

