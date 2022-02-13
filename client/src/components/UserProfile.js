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
    const updatedUser = { ...user }
    updatedUser.image_url = image;
    handleUser(updatedUser)
    setImage(updatedUser.image_url)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Change Profile Image:
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
        <input type='submit' value='Save' disabled={user.image_url === image}/>
      </form>
    </div>
  )
}

export default UserProfile