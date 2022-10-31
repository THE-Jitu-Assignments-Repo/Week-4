import React from 'react'
import "./style.css"



function Search({handleSearch}) {
  return (
  <div className="form--head">
        <div className="search">
          <label htmlFor="seacrch">Search: </label>
          <input
            type="text"
            name="Seacrch"
            id=""
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