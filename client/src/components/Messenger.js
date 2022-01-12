import React, { useState } from 'react'

function Messenger() {
  const [message, setMessage] = useState('')

  function handleMessageChange(e) {
    setMessage(message => e.target.value)
  }

  return (
    <div>
      <form>
        <input 
          type='text'
          value={message}
          onChange={handleMessageChange}
        />
      </form>
    </div>
  )
}

export default Messenger