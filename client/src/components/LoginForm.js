import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const defaultLoginFormData = {
  username: '',
  password: ''
}

function LoginForm() {
  const [formData, setFormData] = useState(defaultLoginFormData)

  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }) ) 
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
        <input type='submit'/>
      </form>
      <Link to='/signup'>To Signup</Link>
    </div>
  )
}

export default LoginForm