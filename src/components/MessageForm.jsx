import React, {Component} from 'react';

class MessageForm extends Component {
  render() {
    return (
      <form className='message-form'>
        <input
          placeholder='Type your message and hit ENTER'
          type='text' />
      </form>
    )
  }
}

export default MessageForm
