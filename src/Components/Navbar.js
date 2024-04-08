import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import './nav.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='another-pages'>
            <Link to="/" style={{textDecoration:'none', fontSize:'16px',fontWeight:'bold',color:'black'}}>Home</Link>

           <Link to="/about" style={{textDecoration:'none', fontSize:'16px',fontWeight:'bold',color:'black'}}>About</Link>

           <Link to="/contact" style={{textDecoration:'none', fontSize:'16px',fontWeight:'bold',color:'black'}}>Contact</Link>
        </div>
        <div className='links'>
            {/* <Link to="/" style={{textDecoration:'none', fontSize:'16px',fontWeight:'bold'}}>Shop</Link> */}
            <Link to="/cart"><BsCart2 size={28} color='black'/></Link>

            
        </div>
    </div>
  )
}

export default Navbar