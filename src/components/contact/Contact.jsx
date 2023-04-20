import React from 'react'
import './Contact.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
const Contact = () => {
  return (
    <div className='contact-component'>
      <h2>Contact</h2>
      <h5>Reach out to me</h5>
      <div className="wrapper-C">
      <div className="contact">
      <BsFillTelephoneFill/>
      <h3>Phone: 604354163</h3>
      </div>
      <div className="contact">
      <AiOutlineMail/>
      <h3>email: mateusz.stolarczyk2@gmail.com</h3>
      </div>
      </div>




    </div>
  )
}

export default Contact