import React from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import logo from '../images/moustache-man.jpg'

function Header({ handleUser }) {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const activeStyle = { backgroundColor: 'black', color: 'white' }

  function handleLogout() {
    fetch('/api/logout', {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        handleUser(null)
        navigate('/')
      }
    })
  }

  return (
    <>
      <header className='main-header'>
        <Link className='heading' to='/'>
          <h1>Ye Ole ChatterBox</h1>
          <img src={logo} alt='moustache man' /> 
        </Link>
        <nav>
          <NavLink 
            className='nav-button' 
            to='/chatrooms'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
            end={pathname === '/chatrooms/search'}
          >
            Memberships
          </NavLink>
          <NavLink 
            className='nav-button' 
            to='/chatrooms/search'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Parlor Room Exploration
          </NavLink>
          <button className='nav-button' onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <Outlet />
    </>
  ) 
}

export default Header