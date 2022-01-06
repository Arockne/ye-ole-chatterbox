import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../images/moustache-man.jpg'

function Header({ setUser }) {
  const navigate = useNavigate()

  function handleLogout() {
    fetch('api/logout', {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        setUser(null)
        navigate('/')
      }
    })
  }

  return (
    <header>
      <div>
        <Link to='/'>
          <h1>Ye Ole ChatterBox</h1>
          <img src={logo} alt='moustache man' width='30px'/>
        </Link>
      </div>
      <nav>
        <NavLink to='/chatrooms/search'>Parlor Rooms</NavLink>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </header>
  ) 
}

export default Header