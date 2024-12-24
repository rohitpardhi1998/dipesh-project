import React from 'react'
import mainLogo from'./images.png';
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img className='mylogo' src={mainLogo} alt="mylogo"/>
        </div>
        <div className='menu-list'>
            <ul className='menu-items'>
                <li>Menu</li>
                <li>Location</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='Loginbtn'>
            <button className='btnn'>Login</button>
        </div>
        
    </div>
  )
}
