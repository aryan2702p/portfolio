import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { BsFillAwardFill } from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Ima" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsFillAwardFill />
              <h5>Experience</h5>
              <small>3+ Years Work</small>
            </article>
            <article className="about__card">
              <FaUsers />
              <h5>clients</h5>
              <small>10+ Clients</small>
            </article>
            <article className="about__card">
              <VscProject />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing
             elit. Corporis non, odio ullam quis, obcaecati, at
              tenetur molestiae labore laborum laboriosam enim et porro 
              accusantium alias deserunt magnam quas explicabo quasi!</p>
              <a href="#contact" className='btn btn'>Let's Talk</a>
        </div>
      </div>
    </section>

  )
}

export default about
