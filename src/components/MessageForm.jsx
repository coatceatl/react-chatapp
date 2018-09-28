import React, {Component} from 'react';

class MessageForm extends Component {

  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <form className='message-form'>
        <input
          onChange={this.handleChange}
          placeholder='Type your message and hit ENTER'
          type='text' />
      </form>
    )
  }
}

export default MessageForm
