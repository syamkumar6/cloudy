import React from 'react'
import './Header.css'
import logo from '../logo.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="" id='logo'/>
        <nav>
            <ul className='navList'>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header