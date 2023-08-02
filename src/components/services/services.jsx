import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>services</h2>
    <div className="container service__container">
      <article className="service">
       <div className="service__head">
       <h3>UI/UX Design</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> 
       </ul>
      </article>
      <article className="service">
       <div className="service__head">
       <h3>WEB DEVELOPMENT</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> 
       </ul>
      </article>
      <article className="service">
       <div className="service__head">



       <h3>CONTENT CREATION</h3>
       </div>

       <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon' />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </li> 
       </ul>
      </article>
    </div>

    </section>
  )
}

export default services
