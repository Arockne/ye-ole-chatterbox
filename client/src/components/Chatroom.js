import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChatroomHeader from './ChatroomHeader'
import Messages from './Messages'
import Members from './Members'
import Messenger from './Messenger'
import ChatroomWithdrawal from './ChatroomWithdrawal'

function Chatroom({ user, handleUserChatroomMembershipWithdrawal }) {
  const [chatroom, setChatroom] = useState({})
  const [errors, setErrors] = useState([])
  const {id} = useParams()


  useEffect(() => {
    fetch(`/api/chatrooms/${id}`)
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setErrors([])
          setChatroom(data)
        })
      } else {
        r.json().then(e => {
          setErrors(e.errors)
        })
      }
    })
  }, [id])

  function handleChatroomMessage(message) {
    setChatroom(chatroom => {
      const updatedChatroom = { ...chatroom }
      updatedChatroom.communications = [ ...chatroom.communications, message ]
      return updatedChatroom
    })
  }

  function handleErrors() {
    if (errors.length === 0) {
      return <div></div>
    } else {
      return <div>{errors.map(e => <p key={e}>{e}</p>)}</div>
    }
  }

  return (
    chatroom.name ? (
      <div className='chatroom'>
        <ChatroomHeader name={chatroom.name}/>
        <Messages communications={chatroom.communications}/>
        <Members members={chatroom.members}/>
        <ChatroomWithdrawal chatroom={chatroom} user={user} handleUserChatroomMembershipWithdrawal={handleUserChatroomMembershipWithdrawal}/>
        <Messenger chatroom={chatroom.id} handleChatroomMessage={handleChatroomMessage} />
      </div>
    ) : (
      handleErrors()
    )
  )
}

export default Chatroom
