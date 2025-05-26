import React from 'react'
import '../styles/layout.css';

import CategoryButton from './CategoryButton'
import MenuItemButton from './MenuItemButton';
import Link from 'next/link';
import { routes } from '@/shared/utils/routes';

const Layout = () => {
  return (
    <div className='admin_layout'>
      <div className='go_back'>
        <Link href={ routes.homeRoute() }>
          <p>{'<'} Go Back</p>
        </Link>

      </div>
      <CategoryButton />
      <MenuItemButton />
    </div>
  )
}

export default Layout