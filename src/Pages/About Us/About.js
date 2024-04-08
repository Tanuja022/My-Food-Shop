import React from 'react'
import './about.css'
import headphone from '../../images/headphone.jpg'
import { FaRegUserCircle } from "react-icons/fa";
const About = () => {
  return (
    <>

      {/* about us */}
        <div className='about-container'>
          <div className='about'>
            <div className='about-left'>
              <h1>Food</h1>
            </div>

            <div className='about-right'>
              <h1>About Us</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod inventore quam pariatur dolor recusandae molestias exercitationem nemo praesentium excepturi vero voluptatum cumque error, ipsum nobis fugit fuga? Consectetur reiciendis autem voluptatum consequuntur, quis error eum cupiditate illo asperiores, blanditiis omnis odit ab ullam voluptas! Perspiciatis ea officia iusto odio impedit, provident eius nobis dolor similique maiores, commodi iste dolorum velit.</p>
            </div>

          </div>
        </div>

      {/* our team */}
      <h1>Our Team</h1>
      <div className='about-team'>
        <div className='about-member'>
          <div>
           <FaRegUserCircle size={100} id='icon' />
            <h3>member1</h3>
          </div>
          <div>
          <FaRegUserCircle size={100} id='icon' />
            <h3>member2</h3>
          </div>
          <div>
          <FaRegUserCircle size={100} id='icon' />
            <h3>member3</h3>
          </div>
          <div>
          <FaRegUserCircle size={100} id='icon' />
            <h3>member4</h3>
          </div>
        </div>

      </div>
    
    </>
    
  )
}

export default About