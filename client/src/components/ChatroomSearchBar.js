import React, { useState } from 'react'

function ChatroomSearchBar({ search, setSearch, sortBy, setSortBy }) { 
  function handleSearchChange(e) {
    setSearch(search => e.target.value)
  }

  function handleRadioChange(e) {
    setSortBy(sortBy => e.target.value)
  }

  return (
    <div>
      <div>
        <input 
          type='text'
          value={search}
          onChange={handleSearchChange}
        />
      </div>
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