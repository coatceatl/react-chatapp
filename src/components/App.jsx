import React, {Component} from 'react';
import Chatkit from '@pusher/chatkit';
import MessageList from './MessageList.jsx';

import { tokenUrl, instanceLocator } from '../../config.js';

class App extends Component {
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
              console.log('message.text ' + message.text);
            }
          }
        })
      })
  }

  render() {
    return (
      <div className='app'>
        {/*       <MessageList />*/}
      </div>
    )
  }
}

export default App

