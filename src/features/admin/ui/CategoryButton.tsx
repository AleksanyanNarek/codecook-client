'use client'
import React, { useState } from 'react'
import Button from '@/shared/ui/button/Button'
import CategoryModal from '@/features/category/containers/CategoryModal'

const CategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => setIsOpen(false);

  return (
    <>
      <Button
        text='Create Category'
        isDark={ false }
        onclick={ () => setIsOpen(prev => !prev) }
      />
      { isOpen && <CategoryModal closeModal={ closeModal } /> }
    </>
  )
}

export default CategoryButton