import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChatroomWithdrawal({ currentMember, handleChatroomMembershipWithdrawal }) {
  const navigate = useNavigate()

  function handleChatroomWithdrawal() {
    fetch(`/api/chatrooms/${currentMember.chatroom_id}/chatroom_memberships/${currentMember.id}`, {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        r.json().then(chatroom => {
          handleChatroomMembershipWithdrawal(chatroom)
          navigate('/')
        })
      }
    })
  }

  return (
    <div className='chatroom-withdrawal'>
      <button
        onClick={handleChatroomWithdrawal}
        className='submit-button'
      >Leave<br/> Parlor Room</button>
    </div>
  )
}

export default ChatroomWithdrawal