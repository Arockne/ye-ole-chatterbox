import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../images/tophatmonocle-hat-transparent.png'

const signUpFormDefaultValues = {
  username: '',
  password: '',
  password_confirmation: '',
  image_url: ''
}

const profileImages = [
  {
    name: 'Peter Paul Rubens',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Sir_Peter_Paul_Rubens_-_Portrait_of_the_Artist_-_Google_Art_Project.jpg'
  },
  {
    name: 'Frans Hals',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Frans_Hals_-_Portrait_of_a_Man_-_Google_Art_Project_%28579097%29.jpg'
  },
  {
    name: 'Antonio Zucchi',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Angelica_Kaufmann_Antonio_Zucchi.jpg'
  },
  {
    name: 'Sofonisba Anguissola',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Self-portrait_at_the_Easel_Painting_a_Devotional_Panel_by_Sofonisba_Anguissola.jpg'
  },
  {
    name: 'Élisabeth Vigée-Lebrun',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Self-portrait_in_a_Straw_Hat_by_Elisabeth-Louise_Vig%C3%A9e-Lebrun.jpg'
  },
  {
    name: 'Ada Lovelace',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg'
  },
  {
    name: 'Marie Bashkirtseff',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/Bashkirtseff.jpg'
  },
  {
    name: 'Wolfgang Amadeus Mozart',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg'
  },
  {
    name: 'Ludwig van Beethoven',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg'
  },
  {
    name: 'Johann Sebastian Bach',
    image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg'
  }
]

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
          setFormData(signUpFormDefaultValues)
          navigate('/')
          handleUser(user)
        })
      } else {
        r.json().then(e => {
          setErrors(() => e.errors)
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
        <br />
        <label>Choose Profile Image:
          <br />
          <select name='image_url' value={formData.image_url} onChange={handleFormChange}>
            <option value=''>Default</option>
            {
              profileImages.map(({ name, image_url }) => (
                  <option key={name} value={image_url}>{name}</option>
                )
              )
            }
          </select>
          <br />
          <img src={formData.image_url ||  logo} alt='default profile face'/>
        </label>
        <input className='submit-button' type='submit' value='Register'/>
      </form>
      {
        errors.map(error => <p key={error}>{error}</p>)
      }
      <p><Link to='/'>Sign in</Link> if account<br/>does exist</p>
    </div>
  )
}

export default SignUpForm