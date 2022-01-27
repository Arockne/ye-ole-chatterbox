import React from 'react'
import logo from '../images/moustache-man-transparent-background.png'


function ChatroomSearchListItem({ chatroom, selectedChatroom, setSelectedChatroom }) {
  const { id, name, image_url, bio } = chatroom

  function handleChatroomClick() {
    setSelectedChatroom(() => id)
  }

  return (
    <div className={selectedChatroom === id ? 'search-item selected' : 'search-item'} onClick={handleChatroomClick}>
      <img src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default ChatroomSearchListItem