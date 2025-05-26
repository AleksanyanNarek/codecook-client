import React from 'react'
import Layout from '../ui/Layout';
import HeaderButton from './HeaderButton';

import { getCurrentUser } from '@/entities/user';

const Header = async () => {
  const user = await getCurrentUser();

  return (
    <Layout
      action={ <HeaderButton user={ user } /> }
    />
  )
}

export default Header