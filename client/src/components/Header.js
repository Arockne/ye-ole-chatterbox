import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../images/moustache-man.jpg'

function Header() {
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
        <button>Logout</button>
      </nav>
      <Outlet />
    </header>
  ) 
}

export default Header