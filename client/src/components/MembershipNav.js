import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../images/moustache-man.jpg'

function MembershipNav({ memberships }) {
  return (
    <div className='membership-nav'>
      <nav>
        <h3>Chatter engaged in:</h3>
        {
          memberships.map(({id, name, image_url}) => {
            return <NavLink key={id} to={`/chatrooms/${id}`}>
              <div>
                <img src={image_url || logo} alt={image_url === '' ? 'moustache man' : 'chatroom image'} width='35px'/>
                <h4>{name}</h4>
              </div>
            </NavLink>
          })
        }
      </nav>
      <Outlet />
    </div>
  )
}

export default MembershipNav