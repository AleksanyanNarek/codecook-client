import React, { FC, ReactNode } from 'react'
import '../styles/layout.css';
import Image from 'next/image';

type LayoutProps = {
    title: string;
    form: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, form }) => {
  return (
    <div className='auth_layout'>
      <div className='auth_image_wrapper'>
        <Image
          className='auth_image'
          src='https://res.cloudinary.com/dvdek29md/image/upload/v1747685605/CodeCook/main/main-home-img-3_cvadhm.jpg'
          alt='auth-image'
          fill
          priority
        />
      </div>
      <div className='auth_main_part'>
        <div className='auth_form_wrapper'>
          <h1 className='auth_title'>{title}</h1>
          {form}
        </div>
      </div>
    </div>
  )
}

export default Layout