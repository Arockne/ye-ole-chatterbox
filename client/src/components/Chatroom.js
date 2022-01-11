import React from 'react'
import ChatroomHeader from './ChatroomHeader'
import Messages from './Messages'
import Members from './Members'

function Chatroom() {
  return (
    <div>
      <ChatroomHeader />
      <Messages />
      <Members />
    </div>
  )
}

export default Chatroom