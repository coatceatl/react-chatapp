import React, {Component} from 'react';

class RoomList extends Component {
  render() {
    return (
      <div className='room-list'>
        <ul>
          <h1>Chats</h1>
          {this.props.rooms.map(room => {
            const active = this.props.roomId === room.id ? 'active' : '';
            return (
              <li key={room.id} className={'room' + active}>
                <a
                  onClick={() => this.props.subscribeToRoom(room.id)}
                  href='#'># {room.name}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default RoomList
