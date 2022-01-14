import React from 'react'
import logo from '../images/moustache-man.jpg'

function Message({ communication }) {
  const { id, created_at, message, creator} = communication

  return (
    <div className='message'>
      <img src={creator.image_url || logo} alt={creator.image_url === '' ? 'moustache man' : 'chatroom image'} />
      <div className='content'>
        <h5><span className='creator'>{creator.username}</span> {created_at}</h5>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message