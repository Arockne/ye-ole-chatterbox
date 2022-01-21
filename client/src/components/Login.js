import React from 'react'
import LoginForm from './LoginForm'
import logo from '../images/moustache-man.jpg'
import { Routes, Route } from 'react-router-dom'
import SignUpForm from './SignUpForm'

function Login({ handleLogin }) {
  return (
    <div className='login'>
      <img src={logo} alt='moustache man'/>
      <h2>Welcome to the chatter!</h2>
      <Routes>
        <Route path='/' element={<LoginForm handleLogin={handleLogin}/>}/>
        <Route path='/signup' element={<SignUpForm handleLogin={handleLogin}/>} />
      </Routes>
    </div>
  )
}

export default Login