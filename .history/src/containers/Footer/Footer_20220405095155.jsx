import React, {useState} from 'react'

import './Footer.scss'
import {AppWrapper, MotionWrap} from '../../wrapper'
import { images } from '../../constants'

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;

  const handleChangeInput = () => {}

  const handleSubmit = (e) => {
    e.preventDefault(); 
  }

  return (
    <>
      <h2 className='head-text'>take a coffee and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:hello@example.com" className="p-text">hello@example.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +1 (123) 457-624" className="p-text">+1 (123) 457-624</a>
        </div>
      </div>

      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input className="p-text" type="text" placeholder="Your Name" name={name} value={name} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <input className="p-text" type="email" placeholder="Your Email" name={email} value={email} onChange={handleChangeInput}/>
        </div>
        <div className="app__flex">
          <textarea
            className="p-text" placeholder="Your message" value={message} name={message} onChange={handleChangeInput}
          />
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : "Send Message"}</button>
      </div>
    </>
  )
}

export default AppWrapper(MotionWrap(Footer, 'app__footer'), 'contact', 'app__whitebg')