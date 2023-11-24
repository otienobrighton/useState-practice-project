import React from 'react'
import './styles/header.css'

const Header = () => {
  return (
    <header>
      <p className='logo'>grocery list</p>
      <ul>
        <li>home</li>
        <li>prices</li>
        
      </ul>
      <button className='sign'>sign in</button>
    </header>
  )
}

export default Header
