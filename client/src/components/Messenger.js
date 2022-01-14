import React, { useState } from 'react'

function Messenger({ chatroom, handleChatroomMessage }) {
  const [message, setMessage] = useState('')

  function handleMessageChange(e) {
    setMessage(e.target.value)
  }

  function handleMessageSubmit(e) {
    e.preventDefault()
    fetch(`/api/chatrooms/${chatroom}/communications`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(message => {
          handleChatroomMessage(message)
          setMessage('')
        })
      } else {

      }
    })
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
          value='Send Message'
        />
      </form>
    </div>
  )
}

export default Messenger