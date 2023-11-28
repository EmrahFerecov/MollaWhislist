import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='icon'>
        <i class="fa-brands fa-shopify"></i>
       <p>opping</p>
        </div>
        <div className='text'>
            <div className='txt_left'>
                <p>ABOUT</p>
                <p>HOME</p>
                <p>CONTACT</p>
                <p>BLOG</p>
                <p>MEDIA</p>
            </div>
            <div className='txt_right'>
                <p>LOCATION</p>
                <p>ONLINE</p>
                <p>LOGIN | REGISTER</p>
                <p>WISHLIST</p>
                <p>BASKET</p>
            </div>
        </div>
        <div className='media'>
            <div className='number'>
            <i class="fa-solid fa-phone"></i>
            </div>
            </div>
            <div className='icon_left'>   
            <i class="fa-brands fa-instagram"></i> 
            <i class="fa-brands fa-tiktok"></i>
            <i class="fa-brands fa-pinterest-p"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            </div>
        </div>



  
  )
}

export default Footer