import React from 'react'
import MenuPage from '@/features/menu/containers/MenuPage'

type MenuWrapperProps = {
  searchParams: Promise<{ category: string }>
}

export default async function MenuWrapper ({ searchParams }: MenuWrapperProps) {
  const { category } = await searchParams;

  return (
    <MenuPage selectedCategory={ category } />
  )
}