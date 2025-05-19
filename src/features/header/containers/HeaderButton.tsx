import Link from 'next/link'
import React from 'react'

import Button from '@/shared/ui/button/Button'
import { routes } from '@/shared/utils/routes'

type Props = {}

const HeaderButton = (props: Props) => {
  return (
    <Link href={ routes.loginRoute() }>
      <Button
        text='LOG IN'
        isDark
      />
    </Link>
  )
}

export default HeaderButton