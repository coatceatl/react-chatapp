import React, {Component} from 'react';
/*
const DATA = [
  {
    senderId: 'jane',
    text: 'Hey',
  },
  {
    senderId: 'peter',
    text: 'Good to hear you!',
  },
  {
    senderId: 'jane',
    text: 'Great! How about you?',
  },
]
*/

class MessageList extends Component {
  render() {
    return (
      <div className='message-list'>
        {DATA.map((message, index) =>{
          return (
            <div key={index}>
              <div>
               {message.senderId}
             </div>
             <div>
               {message.text}
             </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MessageList

