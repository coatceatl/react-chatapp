import React, {Component} from 'react';

class MessageForm extends Component {

  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    console.log(this.state.message)
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
