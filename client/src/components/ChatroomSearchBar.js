import React from 'react'

function ChatroomSearchBar({ search, setSearch, searchBy, setSearchBy }) { 
  function handleSearchChange(e) {
    setSearch(search => e.target.value)
  }

  function handleRadioChange(e) {
    setSearchBy(searchBy => e.target.value)
  }

  return (
    <div className='chatroom-search-bar'>
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
              name='search' 
              value='name'
              checked={searchBy === 'name'} 
              onChange={handleRadioChange}
            />
            By Name
          </label>
        </fieldset>
      </div>
    </div>
  )
}

export default ChatroomSearchBar