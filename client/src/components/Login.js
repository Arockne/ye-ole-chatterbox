import React from 'react'
import LoginForm from './LoginForm'
import logo from '../images/moustache-man.jpg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './SignUpForm'

function Login({ handleUser }) {
  return (
    <div>
      <img src={logo} alt='moustache man' width='100px'/>
      <h2>Welcome to the chatter!</h2>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm handleUser={handleUser}/>}/>
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Login