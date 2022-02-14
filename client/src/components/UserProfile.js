import React, { useState } from 'react'
import logo from '../images/tophatmonocle-hat-transparent.png'
import { profileImages } from './helpers/formhelpers'

function UserProfile({ user, handleUser }) {
  const [image, setImage] = useState(user.image_url)

  function handleImageChange(e) {
    const { value } = e.target
    setImage(value) 
  }

  function handleFormSubmit(e) {
    e.preventDefault()
    
    fetch(`/api/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image_url: image })
    })
    .then(r => {
      if (r.ok) {
        r.json().then(user => {
          handleUser(user)
        })
      }
    })
  }

  return (
    <div className='user-profile'>
      <h2>Update User Profile</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Change Profile Image:
            <br />
            <select value={image} onChange={handleImageChange}>
              <option value=''>Default</option>
              {
                profileImages.map(({ name, image_url }) =>
                  <option key={name} value={image_url}>{name}</option>
                )
              }
            </select>
            <br />
            <img className='img-2' src={image ||  logo} alt='default profile face'/>
          </label>
        </div>
        <input className='bttn-1' type='submit' value='Save' disabled={user.image_url === image}/>
      </form>
    </div>
  )
}

export default UserProfile