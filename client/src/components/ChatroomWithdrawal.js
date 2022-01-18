import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatroomWithdrawal({ chatroom, user, handleUserChatroomMembershipWithdrawal }) {
  const currentMember = chatroom.chatroom_memberships.find(({ user_id }) => user_id === user.id)
  const navigate = useNavigate()
  
  function handleChatroomWithdrawal() {
    fetch(`/api/chatrooms/${chatroom.id}/chatroom_memberships/${currentMember.id}`, {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        r.json().then(chatroom => {
          handleUserChatroomMembershipWithdrawal(chatroom)
          navigate('/')
        })
      }
    })
  }

  return (
    <div className='chatroom-withdrawal'>
      <button
        onClick={handleChatroomWithdrawal}
      >Leave Chatroom</button>
    </div>
  )
}

export default ChatroomWithdrawal