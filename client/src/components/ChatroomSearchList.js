import React from 'react'
import ChatroomSearchListItem from './ChatroomSearchListItem'

function ChatroomSearchList({ searchResults }) {
  return (
    <div>
      {
        searchResults.map(chatroom => <ChatroomSearchListItem key={chatroom.id} chatroom={chatroom}/>)
      }
    </div>
  )
}

export default ChatroomSearchList