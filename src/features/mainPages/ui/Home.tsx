import React from 'react'
import '../styles/home.css';
import Image from 'next/image';

const Home = () => {
  return (
    <div className='home_wrapper'>
      <div className='home_image_wrapper'>
        <Image
          className='home_image'
          src='https://res.cloudinary.com/dvdek29md/image/upload/v1747697835/CodeCook/main/main-home-img-2_ocu2el.jpg'
          alt='home-image'
          fill
          priority
        />
      </div>
      <div className='home_content_wrapper'>
        <div className='home_content'>
          <h2 className='home_title'>The Art Of Making Food</h2>
          <p className='home_description'>
            At our restaurant, cooking is more than just preparing meals — it's an art form. From the freshest ingredients to the finest techniques, we craft every dish with care, creativity, and love. Whether you're here for a quick bite or a memorable dining experience, enjoy the perfect harmony of flavor, tradition, and innovation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home