import React from 'react'

import "../../styles/Home/Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='logo'>LOGO</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <ul className='auth'>
        <li>
          <a href="#">Sign in</a>
        </li>
        <li>
          <a href="#" className='register'>Register</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar