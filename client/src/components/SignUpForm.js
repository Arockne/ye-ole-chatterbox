import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const signUpFormDefaultValues = {
  username: '',
  password: '',
  password_confirmation: ''
}

function SignUpForm({ handleLogin }) {
  const [formData, setFormData] = useState(signUpFormDefaultValues)
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }))
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          setFormData(signUpFormDefaultValues)
          navigate('/')
          handleLogin(user)
        })
      } else {
        r.json().then(e => {
          setErrors(e.errors)
        })
      }
    })
  }

  return (
    <div className='user-form'>
      <form onSubmit={handleFormSubmit}>
        <label>Username:
          <br/>
          <input 
            type='text'
            name='username'
            value={formData.username}
            onChange={handleFormChange}
          />
        </label>
        <br/>
        <label>Password:
          <br/>
          <input 
            type='password'
            autoComplete='off'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
          />
        </label>
        <br/>
        <label>Password Confirmation:
          <br/>
          <input 
            type='password'
            autoComplete='off'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleFormChange}
          />
        </label>
        <input className='submit-button' type='submit' value='Register'/>
      </form>
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
      <p><Link to='/'>Sign in</Link> if account<br/>does exit</p>
    </div>
  )
}

export default SignUpForm