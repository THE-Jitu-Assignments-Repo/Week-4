import React from 'react'
import './navbar.css'

function NavBar() {
  return (
    <>
      <div className="navbar">
        <div className="logo--tag">
          <img src="logo192.png" alt="logo" className='react--logo'/>
        <h1>React</h1>
        </div>
        
        <nav className='links'>
          <li>Docs</li>
          <li>Tutorial</li>
          <li>Blog</li>
          <li>Community</li>
          <li>&#x1F50D; <i style={{opacity: "50%"}}>Search</i></li>
          <li><small>v18.2.0</small></li>
          <li>&#35379; Languages</li>
          <li><a href='https://github.com/mik284'>GitHub</a></li>
        </nav>
      </div>
    
    </>

  )
}

export default NavBar