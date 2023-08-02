import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {IoMdContact} from 'react-icons/io'
import {RiServiceLine} from 'react-icons/ri'
import {BsPersonWorkspace} from 'react-icons/bs'

const nav = () => {
  return (
    <div>
      <nav>
        
        <a href="#about"><AiOutlineHome /></a>
        <a href="#experience"><BiBook /> </a>
        <a href="#services"><RiServiceLine /> </a>
        <a href="#portfolio"><BsPersonWorkspace /></a>
        <a href="#contact"><IoMdContact /> </a>
      </nav>
    </div>
  )
}

export default nav
