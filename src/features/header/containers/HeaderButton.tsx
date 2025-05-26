'use client'
import React, { FC, useState } from 'react'
import Link from 'next/link'

import Button from '@/shared/ui/button/Button'
import { routes } from '@/shared/utils/routes'
import { Roles, User } from '@/entities/user/domain'
import { logOutQuery } from '@/entities/authorization/api/authApi'

type HeaderButtonProps = {
  user: User | undefined;
}

const HeaderButton: FC<HeaderButtonProps> = ({ user }) => {
  const [currentUser, setCurrentUser] = useState<User | undefined>(user);

  const handleLogout = async () => {
    try {
      const { success } = await logOutQuery();

      if (!success) {
        throw new Error('Logout failed');
      }

      setCurrentUser(undefined);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (currentUser) {
    return (
      <>
        {
          currentUser.role === Roles.ADMIN && (
            <Link href={ routes.adminPanelRoute() }>
              <Button
                text='ADMIN PANEL'
                isDark
              />
            </Link>
          )
        }
        <Button
          text='LOG OUT'
          onclick={ handleLogout }
          isDark
        />
      </>
    )
  }

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