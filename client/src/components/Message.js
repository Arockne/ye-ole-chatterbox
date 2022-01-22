import React from 'react'
import logo from '../images/moustache-man.jpg'
import { useNavigate } from 'react-router-dom'

function Message({ message, currentMember, handleMessageDelete }) {
  const { id, created_at, content, user} = message
  const creator = currentMember.user_id === user.id
  const navigate = useNavigate()

  function handleDelete() {
    fetch(`/api/messages/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => {
      if (r.ok) {
        r.json().then(handleMessageDelete)
      }
    })
  }

  return (
    <div className='message'>
      <img src={user.image_url || logo} alt={user.image_url === '' ? 'moustache man' : 'chatroom image'} />
      <div className='content'>
        <h5><span className='creator'>{user.username}</span> {created_at}</h5>
        <p>{content}</p>
        {creator ? 
          <div>
            <button onClick={() => navigate(`/chatrooms/${currentMember.chatroom_id}/messages/${id}/edit`)}>🪶</button> 
            <button onClick={handleDelete}>☢︎</button>
          </div>
          : ''}
      </div>
    </div>
  )
}

export default Message