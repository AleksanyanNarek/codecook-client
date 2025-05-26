import React, { FC, ReactNode } from 'react'
import '../styles/layout.css';

type LayoutProps = {
  categories: ReactNode;
  menuList: ReactNode;
}

const Layout: FC<LayoutProps> = ({ categories, menuList }) => {
  return (
    <div className='menus_layout'>
      {categories}
      {menuList}
    </div>
  )
}

export default Layout