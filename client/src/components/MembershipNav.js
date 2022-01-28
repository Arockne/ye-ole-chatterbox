import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../images/tophatmonocle-hat-transparent.png'

function MembershipNav({ memberships }) {
  const activeStyle = { backgroundColor: 'whitesmoke' }
  return (
    <div className='membership-nav'>
      <nav>
        <h3>Chatter engaged in:</h3>
        {
          memberships.map(({id, name, image_url}) => {
            return (
              <NavLink 
                className='membership-nav-button' 
                key={id} 
                to={`/chatrooms/${id}`}
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
                }
                >
                  <img src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} />
                  <h4>{name}</h4>
              </NavLink>
            )
          })
        }
      </nav>
      <Outlet />
    </div>
  )
}

export default MembershipNav