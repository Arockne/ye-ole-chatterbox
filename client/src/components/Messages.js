import React from 'react'
import Message from './Message'

function Messages({ communications }) {
  return (
    <div className='messages'>
      {
        communications.map(communication => <Message key={communication.id} communication={communication}/>)
      }
    </div>
  )
}

export default Messages