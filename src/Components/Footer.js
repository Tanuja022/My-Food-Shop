import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
        <p>&copy; All Rights are Reserved.| Food Shop</p>

        <div className='footer-icons'>
            <FaFacebookSquare style={{backgroundColor:'white'}}/>
            <FaSquareXTwitter style={{backgroundColor:'white'}}/>
            <FaWhatsappSquare style={{backgroundColor:'white'}}/>
        </div>
    </div>
  )
}

export default Footer