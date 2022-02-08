import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ChatroomSearchBar from './ChatroomSearchBar'
import ChatroomSearchList from './ChatroomSearchList'

function ChatroomSearch({ handleChatroomMembership }) {
  const [chatrooms, setChatrooms] = useState([])
  const [search, setSearch] = useState('')
  const [searchBy, setSearchBy] = useState('name')
  const [selectedChatroom, setSelectedChatroom] = useState(0)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('/api/chatrooms')
    .then(r => r.json())
    .then(data => setChatrooms(() => data))
  }, [])

  function handleChatroomJoin() {
    fetch(`/api/chatrooms/${selectedChatroom}/chatroom_memberships`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
    .then(r => {
      if (r.ok) {
        r.json().then(chatroom => {
          handleChatroomMembership(chatroom)
          navigate(`/chatrooms/${chatroom.id}`)
        })
      } else {
        r.json().then(({errors}) => setErrors(() => errors))
      }
    })
  }

  function handleSearch(search) {
    setSearch(() => search)
  }

  function handleSearchBy(searchBy) {
    setSearchBy(() => searchBy)
  }

  function chatroomSearchResults() {
    return chatrooms.filter(chatroom => chatroom[searchBy].toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className='chatroom-search'>
      <ChatroomSearchBar search={search} handleSearch={handleSearch} searchBy={searchBy} handleSearchBy={handleSearchBy}/>
      <ChatroomSearchList 
        searchResults={chatroomSearchResults()}
        selectedChatroom={selectedChatroom}
        setSelectedChatroom={setSelectedChatroom}
      />
      <div className='chatroom-search-error'>
        {
          errors.map(error => <p key={error}>{error}</p>)
        }
      </div>
      <button className='search-submit-button' onClick={handleChatroomJoin}>Join Parlor Room</button>
    </div> 
  )
}

export default ChatroomSearch