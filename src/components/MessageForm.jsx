import React, {Component} from 'react';

class MessageForm extends Component {

  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.message)
  }

  render() {
    console.log(this.state.message)
    return (
      <form
        onSubmit={this.handleSubmit}
        className='message-form'>
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder='Type your message and hit ENTER'
          type='text' />
      </form>
    )
  }
}

export default MessageForm
