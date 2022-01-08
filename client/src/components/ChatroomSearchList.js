import React from 'react'
import ChatroomSearchListItem from './ChatroomSearchListItem'

function ChatroomSearchList({ searchResults, selectedChatroom, setSelectedChatroom }) {
  return (
    <div className='chatroom-search-grid'>
      {
        searchResults.map(chatroom => <ChatroomSearchListItem key={chatroom.id} chatroom={chatroom} selectedChatroom={selectedChatroom} setSelectedChatroom={setSelectedChatroom}/>)
      }
    </div>
  )
}

export default ChatroomSearchList