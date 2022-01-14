import React, { useRef, useEffect } from 'react'
import Message from './Message'

function Messages({ communications }) {
  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }, [communications])

  return (
    <div className='messages'>
      {
        communications.map(communication => <Message key={communication.id} communication={communication}/>)
      }
      <div ref={messageEndRef}/>
    </div>
  )
}

export default Messages