import React, { FC } from 'react'
import '../styles/menuList.css';

import { MenuItem } from '@/entities/menu/domain'
import Image from 'next/image';

type MenuListProps = {
  menuItems: MenuItem[];
}

const MenuList: FC<MenuListProps> = ({ menuItems }) => {
  return (
    <div className='menu_list'>
      {
        menuItems.map((menuItem) => (
          <div className='menuItem_card' key={ menuItem.id }>
            <div className='menuItem_img_wrapper'>
              <Image
                className='menuItem_img'
                src={ menuItem.imageUrl }
                alt='menu-item-image'
                fill
              />
            </div>
            <div className='menuItem_card_bottom'>
              <p>{ menuItem.name }</p>
              <p>
                <span className='price_val'>
                  { menuItem.price }
                </span>
                ֏
              </p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default MenuList