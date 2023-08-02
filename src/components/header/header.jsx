import React from 'react'
import './header.css'
import CTA from './CTA'
import Headersocials from './headersocials'
import Me from '../../assets/me.jpg'
const header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Aryan Patel</h1>
            <h5 className="text-light">Developer</h5>
        <CTA />
        <Headersocials />

       <div className="me">
            <img src={Me} alt="Myimage" />
        </div>
        
        <a href="#contact" className="scroll__down">scroll down</a>
        </div>
    </header>
  )
};

export default header
