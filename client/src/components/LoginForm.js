import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import { defaultLoginFormData } from './helpers/formhelpers.js'

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
          setFormData(() => defaultLoginFormData)
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
        </label>
        <input className='bttn-1 submit-button' type='submit' value='Join in!'/>
      </form>
      {
        errors.map(error => <p key={error} className='form-error'>{error}</p>)
      }
      <p>Enlist in an <Link to='/signup'>account</Link>,<br/> if one does not exist</p>
    </div>
  )
}

export default LoginForm