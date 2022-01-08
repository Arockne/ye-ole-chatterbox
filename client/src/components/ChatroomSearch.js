import React, { useEffect, useState } from 'react'
import ChatroomSearchBar from './ChatroomSearchBar'
import ChatroomSearchList from './ChatroomSearchList'

function ChatroomSearch() {
  const [chatrooms, setChatrooms] = useState([])
  const [search, setSearch] = useState('')
  const [searchBy, setSearchBy] = useState('name')
  const [selectedChatroom, setSelectedChatroom] = useState(0)
  
  useEffect(() => {
    fetch('/api/chatrooms')
    .then(r => r.json())
    .then(data => setChatrooms(data))
  }, [])

  function chatroomSearchResults() {
    return chatrooms.filter(chatroom => chatroom[searchBy].toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className='chatroom-search'>
      <ChatroomSearchBar search={search} setSearch={setSearch} searchBy={searchBy} setSearchBy={setSearchBy}/>
      <ChatroomSearchList 
        searchResults={chatroomSearchResults()}
        selectedChatroom={selectedChatroom}
        setSelectedChatroom={setSelectedChatroom}
      />
      <button className='submit-button'>Join Parlor Room</button>
    </div> 
  )
}

export default ChatroomSearch