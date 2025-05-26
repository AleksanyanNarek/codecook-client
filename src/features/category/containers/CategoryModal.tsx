import React, { FC } from 'react'
import Layout from '../ui/Layout'
import CreateCategoryForm from '../ui/CreateCategoryForm';

type CategoryModalProps = {
  closeModal: () => void;
}

const CategoryModal: FC<CategoryModalProps> = ({ closeModal }) => {
  return (
    <Layout
      closeModal={ closeModal }
      form={ <CreateCategoryForm closeModal={ closeModal } /> }
    />
  )
}

export default CategoryModal