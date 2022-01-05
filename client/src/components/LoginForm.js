import React, { useState} from 'react'
import { Link } from 'react-router-dom'

const defaultLoginFormData = {
  username: '',
  password: ''
}

function LoginForm({ handleUser }) {
  const [formData, setFormData] = useState(defaultLoginFormData)
  const [errors, setErrors] = useState([])

  function handleFormChange(e) {
    const { name, value } = e.target
    setFormData(formData => ({ ...formData, [name]: value }) ) 
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          setFormData(data => defaultLoginFormData)
          handleUser(user)
        })
      } else {
        r.json().then(({errors}) => {
          setErrors(errors)
        })
      }
    })
  }

  return (
    <div className='user-form'>
      <form onSubmit={handleFormSubmit}>
        <label>Username:
          <br />
          <input 
            type='text'
            name='username'
            value={formData.username}
            onChange={handleFormChange}
          />
        </label>
        <br />
        <label>Password:
          <br />
          <input 
            type='password'
            autoComplete='off'
            name='password'
            value={formData.password}
            onChange={handleFormChange}
          />
          <br />
          <input type='submit'/>
        </label>
      </form>
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
      <Link to='/signup'>To Signup</Link>
    </div>
  )
}

export default LoginForm