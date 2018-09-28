import React, {Component} from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList.jsx';
import MessageForm from './MessageForm.jsx';

import { tokenUrl, instanceLocator } from '../../config.js';

class App extends Component {

  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'jane',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    })

    chatManager.connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
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
  }

  render() {
    return (
      <div className='app'>
        <MessageList messages={this.state.messages}/>
        <MessageForm />
      </div>
    )
  }
}

export default App

