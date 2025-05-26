import React, { FC, ReactNode } from 'react'
import '../styles/layout.css';

import Modal from '@/shared/ui/modal/Modal';

type MenuItemLayoutProps = {
  closeModal: () => void;
  form: ReactNode;
}

const MenuItemLayout: FC<MenuItemLayoutProps> = ({ closeModal, form }) => {

  return (
    <Modal
      title='Create Menu Item'
      closeModal={closeModal}
    >
      { form }
    </Modal>
  )
}

export default MenuItemLayout