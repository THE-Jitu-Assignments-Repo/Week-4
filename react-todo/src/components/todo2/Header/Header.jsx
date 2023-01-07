import React from 'react'
import "./header.css"
import Search from './search/Search'

function Header() {
  return (
    <div className='header-main'>
        <Search />
        <span>TODO APP &#x2611;</span>
    </div>
  )
}

export default Header