import React from 'react'
import './contact.css'
const Contact = () => {
  return (
    <>
    <h1>Contact us</h1>
        <div className='contact'>
            <form>
                <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br/>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/><br/>
            <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select><br/><br/>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style={{height:'170px'}}></textarea><br/>
        <input type="submit" value="Submit" id='btn-contact'></input>
            </form>
        </div>

        
    
    </>
  )
}

export default Contact