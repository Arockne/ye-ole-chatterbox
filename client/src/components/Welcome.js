import React from 'react'
import logo from '../images/tophatmonocle-hat-transparent.png'

function Welcome({ user: {image_url, username} }) {
  return (
    <div className='welcome'>
      <img className='img-4' src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} />
      <p>Welcome back to the chatter, <br/> <span className='username'>{username}</span></p>
    </div>
  )
}

export default Welcome