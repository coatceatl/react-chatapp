import React, {Component} from 'react';

class RoomList extends Component {
  render() {
    console.log(this.props.rooms)
    return (
      <div className='room-list'>
        <ul>
          <h1>My Room</h1>
          {this.props.rooms.map(room => {
            return (
              <li key={room.id} className='room'>
                <a href='#'># {room.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default RoomList
