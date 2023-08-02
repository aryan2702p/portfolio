import React from 'react'
import './testimonial.css'
import AVTR from '../../assets/testimonial.png'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';

const testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial__container"
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true }}
       >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit consequuntur molestiae excepturi laborum reprehenderit magni aperiam explicabo, tempora temporibus voluptate id ut repellat unde amet, dolor facere rerum aspernatur?</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit consequuntur molestiae excepturi laborum reprehenderit magni aperiam explicabo, tempora temporibus voluptate id ut repellat unde amet, dolor facere rerum aspernatur?</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit consequuntur molestiae excepturi laborum reprehenderit magni aperiam explicabo, tempora temporibus voluptate id ut repellat unde amet, dolor facere rerum aspernatur?</small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar"><img src={AVTR} alt="" />
          </div>
          <h5 className='client__name'>Ernest Achiever</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit consequuntur molestiae excepturi laborum reprehenderit magni aperiam explicabo, tempora temporibus voluptate id ut repellat unde amet, dolor facere rerum aspernatur?</small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default testimonial
