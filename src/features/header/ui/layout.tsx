import React, { FC, ReactNode } from 'react'
import '../styles/layout.css';
import Image from 'next/image'
import LinkElement from '@/shared/ui/linkElement/LinkElement'

import { menuList } from '../utils/menuListData'

type LayoutProps = {
  action: ReactNode,
}

const Layout: FC<LayoutProps> = ({ action }) => {
  return (
    <header className='header_layout'>
      <div className='main_header'>
        <Image
          className='header_logo'
          src='https://res.cloudinary.com/dvdek29md/image/upload/v1747149878/CodeCook/main/white-logo_snf03h.png'
          width={ 160 }
          height={ 50 }
          alt='main-logo'
          priority
        />
        <div className='menus'>
          {
            menuList.map(({ text, url }) => (
              <LinkElement
                key={url}
                text={ text }
                url={ url }
              />
            ))
          }
        </div>
      </div>
      <div className='header_actions'>
        {action}
      </div>
    </header>
  )
}

export default Layout