import React from 'react'
import useWindowSize from '../hooks/useWindowSize'
import useComponentVisible from '../hooks/useComponentVisible'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import logo from '../images/tophatmonocle-hat-transparent.png'

function Header({ handleUser, user }) {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false)
  const [windowWidth] = useWindowSize();
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

  function handleisComponentVisible() {
    setIsComponentVisible(isComponentVisible => !isComponentVisible)
  }

  return (
    <>
      <header className='main-header'>
        <Link className='heading' to='/'>
          <h1>Ye Ole ChatterBox</h1>
          <img className='img-3' src={logo} alt='moustache man' /> 
        </Link>
        <nav className='main-header-nav'>
          {
            windowWidth > 1000 ? (
              <>
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
              </>
            ) : ''
          }
          <div onClick={handleisComponentVisible} ref={ref}>
            <div>
              <img className='img-5 pointer' src={user.image_url} alt='profile'/>
              <span className={isComponentVisible ? 'rotate' : ''}>◁</span>
            </div>
            <nav className={isComponentVisible ? 'dropdown-menu-active' : 'hidden'}>
              {
                windowWidth <= 1000 ? (
                  <>
                    <Link 
                      className='dropdown-menu-nav-button' 
                      to='/chatrooms'
                    >
                    Memberships
                    </Link>
                    <Link 
                      className='dropdown-menu-nav-button' 
                      to='/chatrooms/search'
                    >
                    Parlor Room Exploration
                    </Link>
                  </>
                ) : ''
              }
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