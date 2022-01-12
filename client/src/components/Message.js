import React from 'react'
import logo from '../images/moustache-man.jpg'

function Message({ communication }) {
  const { id, created_at, message, creator} = communication

  return (
    <div>
      <img src={creator.image_url || logo} alt={creator.image_url === '' ? 'moustache man' : 'chatroom image'} />
      <div>
        <h5>{`${creator.username} ${created_at}`}</h5>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message