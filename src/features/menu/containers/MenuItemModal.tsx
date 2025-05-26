import React, { FC } from 'react'
import MenuItemLayout from '../ui/MenuItemLayout'
import CreateMenuItemForm from '../ui/CreateMenuItemForm';

type MenuItemModalProps = {
  closeModal: () => void;
}

const MenuItemModal: FC<MenuItemModalProps> = ({ closeModal }) => {
  return (
    <MenuItemLayout
      closeModal={ closeModal }
      form={ <CreateMenuItemForm closeModal={ closeModal } /> }
    />
  )
}

export default MenuItemModal