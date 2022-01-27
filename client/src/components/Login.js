import React from 'react'
import LoginForm from './LoginForm'
import logo from '../images/moustache-man-transparent-background.png'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignUpForm from './SignUpForm'

function Login({ handleUser }) {
  return (
    <>
      <img src={logo} alt='moustache man'/>
      <h2>Welcome to the chatter!</h2>
      <Routes>
        <Route path='/' element={<LoginForm handleUser={handleUser} />} />
        <Route path='/signup' element={<SignUpForm handleUser={handleUser} />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </>
  )
}

export default Login