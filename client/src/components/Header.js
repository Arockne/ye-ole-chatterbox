import React, { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import logo from '../images/tophatmonocle-hat-transparent.png'

function Header({ handleUser, user }) {
  const [activeMenu, setActiveMenu] = useState(false)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const activeStyle = { backgroundColor: '#ffd0a0', color: '#604030' }

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

  function handleActiveMenu() {
    setActiveMenu(activeMenu => !activeMenu)
  }

  return (
    <>
      <header className='main-header'>
        <Link className='heading' to='/'>
          <h1>Ye Ole ChatterBox</h1>
          <img className='img-3' src={logo} alt='moustache man' /> 
        </Link>
        <nav className='main-header-nav'>
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
          <div>
            <div onClick={handleActiveMenu}>
              <img className='img-5' src={user.image_url} alt='profile'/>
              <span className={activeMenu ? 'rotate' : ''}>◁</span>
            </div>
            <nav className={activeMenu ? 'dropdown-menu-active' : 'hidden'}>
              <Link className='dropdown-menu-nav-button' to='/profile'>Profile</Link>
              <button className='dropdown-menu-nav-button' onClick={handleLogout}>Logout</button>
            </nav>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  ) 
}

export default Header