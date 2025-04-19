import React from 'react'
import'./Navbar.css'
import logo from '../../assets/LogoInspireWithDora.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Blog</li>
        <li>About</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
