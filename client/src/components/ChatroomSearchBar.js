import React, { useState } from 'react'

function ChatroomSearchBar() {
  const [sortBy, setSortBy] = useState('name')

  function handleRadioChange(e) {
    setSortBy(sortBy => e.target.value)
  }
  
  return (
    <div>
      <input type='text'/>
      <div>
        <fieldset>
          <label>
            <input 
              type='radio' 
              name='sort' 
              value='name'
              checked={sortBy === 'name'} 
              onChange={handleRadioChange}
            />
            By Name
          </label>
          <label>
            <input 
              type='radio' 
              name='sort' 
              value='user' 
              checked={sortBy === 'user'}
              onChange={handleRadioChange}
            /> 
            By User
          </label>
        </fieldset>
      </div>
    </div>
  )
}

export default ChatroomSearchBar