import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const signUpFormDefaultValues = {
  username: '',
  password: '',
  password_confirmation: ''
}

function SignUpForm() {
  const [formData, setFormData] = useState(signUpFormDefaultValues)

  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  return (
    <div>
      <form>
        <label>Username:</label>
        <input 
          type='text'
          name='username'
          value={formData.username}
          onChange={handleFormChange}
        />
        <label>Password:</label>
        <input 
          type='password'
          autoComplete='off'
          name='password'
          value={formData.password}
          onChange={handleFormChange}
        />
        <label>Password Confirmation:</label>
        <input 
          type='password'
          autoComplete='off'
          name='password_confirmation'
          value={formData.password_confirmation}
          onChange={handleFormChange}
        />
        <input type='submit'/>
      </form>
      <Link to='/'>To Login</Link>
    </div>
  )
}

export default SignUpForm