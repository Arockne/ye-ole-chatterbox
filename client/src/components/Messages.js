import React from 'react'
import Message from './Message'

function Messages({ communications }) {
  return (
    <div>
      {
        communications.map(communication => <Message key={communication.id} communication={communication}/>)
      }
    </div>
  )
}

export default Messages