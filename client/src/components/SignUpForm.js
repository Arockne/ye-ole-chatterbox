import React from 'react'
import { Link } from 'react-router-dom'

function SignUpForm() {
  return (
    <div>
      <form>
        <label>Username:</label>
        <input />
        <label>Password:</label>
        <input />
        <label>Password Confirmation:</label>
        <input />
        <input type='submit'/>
      </form>
      <Link to='/'>To Login</Link>
    </div>
  )
}

export default SignUpForm