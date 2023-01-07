import React from 'react'
import "./search.css"

function Search() {
  return (
    <div className='search-main'>
        <label htmlFor="search">Search Task:</label>
        <input type="search" name="search"  className='search_input'/>
    </div>
  )
}

export default Search