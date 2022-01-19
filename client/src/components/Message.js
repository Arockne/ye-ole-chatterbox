import React from 'react'
import logo from '../images/moustache-man.jpg'

function Message({ message }) {
  const { created_at, content, user} = message

  return (
    <div className='message'>
      <img src={user.image_url || logo} alt={user.image_url === '' ? 'moustache man' : 'chatroom image'} />
      <div className='content'>
        <h5><span className='creator'>{user.username}</span> {created_at}</h5>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Message