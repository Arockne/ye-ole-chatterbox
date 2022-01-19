import React, { useRef, useEffect } from 'react'
import Message from './Message'

function Messages({ messages }) {
  const messageEndRef = useRef(null)

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})
  }, [messages])

  return (
    <div className='messages'>
      {
        messages.map(message => <Message key={message.id} message={message}/>)
      }
      <div ref={messageEndRef}/>
    </div>
  )
}

export default Messages