import React, { useState } from 'react'
import ChatroomSearchBar from './ChatroomSearchBar'
import ChatroomSearchList from './ChatroomSearchList'

function ChatroomSearch() {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState('name')

  return (
    <div>
      <ChatroomSearchBar search={search} setSearch={setSearch} sortBy={sortBy} setSortBy={setSortBy}/>
      <ChatroomSearchList />
    </div> 
  )
}

export default ChatroomSearch