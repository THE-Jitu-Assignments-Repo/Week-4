import React from 'react'
import "./style.css"



function Search({handleSearch, word}) {
  return (
  <div className="form--head">
        <div className="search">
          <label htmlFor="seacrch">Search: </label>
          <input
            type="text"
            name="Seacrch"
            id=""
            value={word}
            onChange={handleSearch}
            placeholder="search todos..."
            className="seacrh"
          />
        </div>
        <span>TODO APP &#x2611;</span>
      </div>
  )
}

export default Search