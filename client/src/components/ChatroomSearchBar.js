import React from 'react'

function ChatroomSearchBar({ search, setSearch, searchBy, setSearchBy }) { 
  function handleSearchChange(e) {
    setSearch(() => e.target.value)
  }

  function handleRadioChange(e) {
    setSearchBy(() => e.target.value)
  }

  return (
    <div className='chatroom-search-bar'>
      <input 
        type='text'
        value={search}
        onChange={handleSearchChange}
      />
      <fieldset>
        <label>
          <input 
            type='radio' 
            name='search' 
            value='name'
            checked={searchBy === 'name'} 
            onChange={handleRadioChange}
          />
          By Name
        </label>
      </fieldset>
    </div>
  )
}

export default ChatroomSearchBar