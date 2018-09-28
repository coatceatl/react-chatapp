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
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
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
        this.getRooms()
      })
      .catch(err => console.log('error on connecting '))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
        })
      .catch(err => console.log('error om joinableRooms '))
    }

    subscribeToRoom(roomId) {
      this.currentUser.subscribeToRoom({
          roomId: roomId,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            }
          }
        })
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
        <RoomList
          subscribeToRoom={this.subscribeToRoom}
          rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
        <MessageList messages={this.state.messages}/>
        <MessageForm sendMessage={this.sendMessage}/>
      </div>
    )
  }
}

export default App

