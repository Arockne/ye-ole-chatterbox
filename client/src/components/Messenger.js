import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Messenger({ chatroom, handleChatroomMessage }) {
  const [message, setMessage] = useState('')
  const { messageId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (messageId) {
      fetch(`/api/messages/${messageId}`)
      .then(r => {
        if (r.ok) {
          r.json().then(message => {
            setMessage(() => message.content)
          })
        }
      })
    }
    return () => {
      setMessage(() => '')
    }
  }, [messageId])
  
  function handleMessageChange(e) {
    setMessage(() => e.target.value)
  }

  function handleMessageSubmit(e) {
    e.preventDefault()
    if (messageId) {
      fetch(`/api/chatrooms/${chatroom}/messages/${messageId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
      })
      .then(r => {
        if (r.ok) {
          r.json().then(message => {
            handleChatroomMessage(message)
            setMessage(() => '')
            navigate(`/chatrooms/${chatroom}`)
          })
        }
      })
    } else {
      fetch(`/api/chatrooms/${chatroom}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
      })
      .then(r => {
        if (r.ok) {
          r.json().then(message => {
            handleChatroomMessage(message)
            setMessage(() => '')
          })
        }
      })
    }
  }

  return (
    <div className='messenger'>
      <form onSubmit={handleMessageSubmit}>
        <input 
          type='text'
          value={message}
          onChange={handleMessageChange}
        />
        <input 
          type='submit'
          value={messageId ? 'Edit' : 'Send'}
          disabled={message.length === 0}
          className='submit-button'
        />
      </form>
    </div>
  )
}

export default Messenger