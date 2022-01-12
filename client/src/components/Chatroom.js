import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ChatroomHeader from './ChatroomHeader'
import Messages from './Messages'
import Members from './Members'

function Chatroom() {
  const [chatroom, setChatroom] = useState({})
  const [errors, setErrors] = useState([])
  const {id} = useParams()


  useEffect(() => {
    fetch(`/api/chatrooms/${id}`)
    .then(r => {
      if (r.ok) {
        r.json().then(data => {
          setChatroom(data)
        })
      } else {
        r.json().then(e => setErrors(e.errors))
      }
    })
  }, [id])

  return (
    <div>
      <ChatroomHeader name={chatroom.name}/>
      <Messages />
      <Members />
    </div>
  )
}

export default Chatroom