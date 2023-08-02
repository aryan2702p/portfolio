import React from 'react'
import IMG from '../../assets/portfolio.jpeg'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image"> <img src={IMG} alt="" /></div>
            <h3>This is Portfolio item title</h3>
           <div className="portfolio__item-cta"> <a href="/" className='btn'>Github</a>
            <a href="/" className='btn btn-primary' target='_blank'>live Dmeo</a>
         </div>
        </article>
        
      </div>

    </section>
  )
}

export default portfolio
