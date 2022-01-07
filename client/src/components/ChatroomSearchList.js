import React from 'react'
import ChatroomSearchListItem from './ChatroomSearchListItem'

function ChatroomSearchList({ searchResults }) {
  return (
    <div className='chatroom-search-grid'>
      {
        searchResults.map(chatroom => <ChatroomSearchListItem key={chatroom.id} chatroom={chatroom}/>)
      }
    </div>
  )
}

export default ChatroomSearchList