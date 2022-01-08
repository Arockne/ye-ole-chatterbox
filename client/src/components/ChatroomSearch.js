import React, { useEffect, useState } from 'react'
import ChatroomSearchBar from './ChatroomSearchBar'
import ChatroomSearchList from './ChatroomSearchList'

function ChatroomSearch() {
  const [chatrooms, setChatrooms] = useState([])
  const [search, setSearch] = useState('')
  const [searchBy, setSearchBy] = useState('name')
  const [selectedChatroom, setSelectedChatroom] = useState(0)
  const [errors, setErrors] = useState([])
  
  useEffect(() => {
    fetch('/api/chatrooms')
    .then(r => r.json())
    .then(data => setChatrooms(data))
  }, [])

  function handleChatroomJoin() {
    fetch('/api/chatroom_memberships', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ chatroom_id: selectedChatroom })
    })
    .then(r => {
      if (r.ok) {
        r.json().then()
      } else {
        r.json().then(({errors}) => setErrors(errors))
      }
    })
  }

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
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
      <button className='submit-button' onClick={handleChatroomJoin}>Join Parlor Room</button>
    </div> 
  )
}

export default ChatroomSearch