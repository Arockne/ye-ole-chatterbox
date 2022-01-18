import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatroomWithdrawal({ currentMember, handleUserChatroomMembershipWithdrawal }) {
  const navigate = useNavigate()

  function handleChatroomWithdrawal() {
    fetch(`/api/chatrooms/${currentMember.chatroom_id}/chatroom_memberships/${currentMember.id}`, {
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