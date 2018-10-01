import React, {Component} from 'react';

class RoomForm extends Component {
  render() {
    return (
      <div className='room-form'>
        <form>
          <input
            type='text'
            placeholder='New Room'
            required />
          <button type='submit'> + </button>
        </form>
      </div>
    )
  }
}

export default RoomForm
