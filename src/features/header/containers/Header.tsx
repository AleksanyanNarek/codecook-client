import React from 'react'
import Layout from '../ui/layout'
import HeaderButton from './HeaderButton'

const Header = () => {
  return (
    <Layout
      action={<HeaderButton />}
    />
  )
}

export default Header