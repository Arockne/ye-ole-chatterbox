import React from 'react'
import logo from '../images/moustache-man.jpg'


function ChatroomSearchListItem({ chatroom }) {
  const { name, image_url, bio } = chatroom
  return (
    <div className='search-item'>
      <img src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default ChatroomSearchListItem