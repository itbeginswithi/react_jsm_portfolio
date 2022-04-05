import React from 'react'
import {BsTwitter, BsInstagram} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'

const socialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}

export default socialMedia