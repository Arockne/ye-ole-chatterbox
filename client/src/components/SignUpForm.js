import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const signUpFormDefaultValues = {
  username: '',
  password: '',
  password_confirmation: ''
}

function SignUpForm({ handleUser }) {
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
          setFormData(data => signUpFormDefaultValues)
          navigate('/')
          handleUser(user)
        })
      } else {
        r.json().then(e => {
          setErrors(errors => e.errors)
        })
      }
    })
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Username:
          <input 
            type='text'
            name='username'
            value={formData.username}
            onChange={handleFormChange}
          />
        </label>
        <label>Password:
          <input 
            type='password'
            autoComplete='off'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
          />
        </label>
        <label>Password Confirmation:
          <input 
            type='password'
            autoComplete='off'
            name='password_confirmation'
            value={formData.password_confirmation}
            onChange={handleFormChange}
          />
          <input type='submit'/>
        </label>
      </form>
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
      <Link to='/'>To Login</Link>
    </div>
  )
}

export default SignUpForm