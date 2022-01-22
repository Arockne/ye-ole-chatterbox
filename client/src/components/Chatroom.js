import React, { useState, useEffect } from 'react'
import { useParams, Routes, Route } from 'react-router-dom'
import ChatroomHeader from './ChatroomHeader'
import Messages from './Messages'
import Members from './Members'
import Messenger from './Messenger'
import ChatroomWithdrawal from './ChatroomWithdrawal'

function Chatroom({ user, handleChatroomMembershipWithdrawal }) {
  const [chatroom, setChatroom] = useState({})
  const [errors, setErrors] = useState([])
  const {chatroomId} = useParams()


  useEffect(() => {
    fetch(`/api/chatrooms/${chatroomId}`)
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setErrors([])
          setChatroom(() => data)
        })
      } else {
        r.json().then(e => {
          setErrors(() => e.errors)
        })
      }
    })
  }, [chatroomId])

  function handleChatroomMessage(message) {
    setChatroom(chatroom => {
      const updatedChatroom = { ...chatroom }
      updatedChatroom.messages = [ ...chatroom.messages, message ]
      return updatedChatroom
    })
  }

  function handleMessageEdit(messageEdit) {
    setChatroom(chatroom => {
      const updatedChatroom = { ...chatroom }
      updatedChatroom.messages = updatedChatroom.messages.map(message => {
        if (message.id === messageEdit.id) {
          return messageEdit;
        }
        return message;
      })
      return updatedChatroom;
    })
  }

  function handleErrors() {
    if (errors.length === 0) {
      return <div></div>
    } else {
      return <div className='errors'>{errors.map(e => <p key={e}>{e}</p>)}</div>
    }
  }

  const currentMember = chatroom.id && chatroom.chatroom_memberships.find(({ user_id }) => user_id === user.id)

  return (
    chatroom.name ? (
      <div className='chatroom'>
        <ChatroomHeader name={chatroom.name}/>
        <Messages messages={chatroom.messages} currentMember={currentMember}/>
        <Members members={chatroom.members}/>
        <ChatroomWithdrawal currentMember={currentMember} handleChatroomMembershipWithdrawal={handleChatroomMembershipWithdrawal}/>
        <Routes>
          <Route index element={<Messenger chatroom={chatroom.id} handleChatroomMessage={handleChatroomMessage} />}/>
          <Route path='messages/:messageId/edit' element={<Messenger chatroom={chatroom.id} handleChatroomMessage={handleMessageEdit} />}/>
        </Routes>
      </div>
    ) : (
      handleErrors()
    )
  )
}

export default Chatroom
