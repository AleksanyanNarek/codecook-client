'use client'
import React, { useState } from 'react'
import Button from '@/shared/ui/button/Button'
import MenuItemModal from '@/features/menu/containers/MenuItemModal'

const MenuItemButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        text='Create Menu Item'
        isDark={ false }
        onclick={ () => setIsOpen(prev => !prev) }
      />
      { isOpen && <MenuItemModal closeModal={ closeModal } /> }
    </>
  )
}

export default MenuItemButton