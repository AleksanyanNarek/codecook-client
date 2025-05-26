import React, { FC, ReactNode } from 'react'
import '../styles/layout.css';

import Modal from '@/shared/ui/modal/Modal';

type LayoutProps = {
  closeModal: () => void;
  form: ReactNode;
}

const Layout: FC<LayoutProps> = ({ closeModal, form }) => {

  return (
    <Modal
      title='Create Category'
      closeModal={closeModal}
    >
      { form }
    </Modal>
  )
}

export default Layout