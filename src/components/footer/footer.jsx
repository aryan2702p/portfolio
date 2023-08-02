import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const footer = () => {
  return (
    <footer>
      <a href="# " className='footer__logo'>Aryan Patel</a>
      <ul className='permalinks'>
        <li>
          <a href="# ">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#portfolio">portfolio</a>
        </li>
        <li>
          <a href="#testimonial">testimonial</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        
      <a href="https://facebook.com"><FaFacebookF /></a>
      <a href="https://instagram.com"><FaInstagram /></a>
      <a href="https://facebook.com"><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Aryan Patel. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer
