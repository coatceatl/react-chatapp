import React, {Component} from 'react';

class RoomForm extends Component {
  render() {
    return (
      <div className='room-form'>
        <form>
          <input
            type='text'
            className='room-input'
            placeholder='New Room'
            required />
          <button type='submit' className='btn-room'> + </button>
        </form>
      </div>
    )
  }
}

export default RoomForm
