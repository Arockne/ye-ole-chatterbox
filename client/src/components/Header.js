import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import logo from '../images/tophatmonocle-hat-transparent.png'

function Header({ handleUser, user }) {
  const [activeMenu, setActiveMenu] = useState(false)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0})
  const dropdown = useRef(null)
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const activeStyle = { backgroundColor: '#ffd0a0', color: '#604030' }

  useEffect(() => {
    document.addEventListener("click", handleActiveMenuReset, true);
    return () => {
      document.removeEventListener("click", handleActiveMenuReset, true);
    }
  }, [])

  useLayoutEffect(() => {
    function updateSize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

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

  const handleActiveMenuReset = event => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setActiveMenu(false);
    }
  };

  console.log(windowSize)

  return (
    <>
      <header className='main-header'>
        <Link className='heading' to='/'>
          <h1>Ye Ole ChatterBox</h1>
          <img className='img-3' src={logo} alt='moustache man' /> 
        </Link>
        <nav className='main-header-nav'>
          {
            windowSize.width > 1000 ? (
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
          <div onClick={handleActiveMenu} ref={dropdown}>
            <div>
              <img className='img-5 pointer' src={user.image_url} alt='profile'/>
              <span className={activeMenu ? 'rotate' : ''}>◁</span>
            </div>
            <nav className={activeMenu ? 'dropdown-menu-active' : 'hidden'}>
              {
                windowSize.width <= 1000 ? (
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