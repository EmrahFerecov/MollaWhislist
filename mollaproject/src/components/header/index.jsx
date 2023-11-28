import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='header'>
        <div className='logo'> 
        <i class="fa-brands fa-shopify"></i>
       <p>opping</p>
        </div>
        <div className='choose'>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
                <li>BLOG</li>
            </ul>
        </div>
      
        <div className='phone'>
        <i class="fa-solid fa-phone"></i>
        
        </div>
    </div>
  )
}

export default Header