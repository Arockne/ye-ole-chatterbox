import React from 'react'
import { Link } from 'react-router-dom'
function LoginForm() {
  return (
    <div>
      <form>
        <label>Username:</label>
        <input />
        <label>Password:</label>
        <input />
        <input type='submit'/>
      </form>
      <Link to='/signup'>To Signup</Link>
    </div>
  )
}

export default LoginForm