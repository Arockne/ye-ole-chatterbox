import React from 'react'
import logo from '../images/moustache-man.jpg'
import { useNavigate } from 'react-router-dom'

function Message({ message, currentMember }) {
  const { id, created_at, content, user} = message
  const creator = currentMember.user_id === user.id
  const navigate = useNavigate()

  return (
    <div className='message'>
      <img src={user.image_url || logo} alt={user.image_url === '' ? 'moustache man' : 'chatroom image'} />
      <div className='content'>
        <h5><span className='creator'>{user.username}</span> {created_at}</h5>
        <p>{content}</p>
        {creator ? <button onClick={() => navigate(`/chatrooms/${currentMember.chatroom_id}/messages/${id}/edit`)}>🪶</button> : ''}
      </div>
    </div>
  )
}

export default Message