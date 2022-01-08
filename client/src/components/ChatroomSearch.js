import React, { useState } from 'react'
import ChatroomSearchBar from './ChatroomSearchBar'
import ChatroomSearchList from './ChatroomSearchList'

const chatrooms = [
  {
    id: 1,
    name: 'Jolly Good Chatter',
    image_url: '',
    bio: 'All about the chatting'
  },
  {
    id: 2,
    name: 'Crumpets and Tea',
    image_url: '',
    bio: 'Have some wondrous tea with some mighty fine chatting'
  },
  {
    id: 3,
    name: 'Polo Club',
    image_url: '',
    bio: 'The most exclusive chat about the sport of polo'
  },
  {
    id: 4,
    name: 'Art Gallery',
    image_url: '',
    bio: 'Most luxurious form of chatting about fine art'
  },
  {
    id: 5,
    name: 'Hello, is it me you looking for?',
    image_url: '',
    bio: 'I can see it in your eyes, I can see it in your smile.'
  }
]

function ChatroomSearch() {
  const [search, setSearch] = useState('')
  const [searchBy, setSearchBy] = useState('name')
  const [selectedChatroom, setSelectedChatroom] = useState(0)
  
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

    </div> 
  )
}

export default ChatroomSearch