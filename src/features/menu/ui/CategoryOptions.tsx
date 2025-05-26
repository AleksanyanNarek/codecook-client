import React, { FC } from 'react'
import '../styles/categoryOptions.css';

import { Category } from '@/entities/category/domain'
import { getAllCategoryQuery } from '@/entities/category/api/categoryApi';
import CategoryOption from './CategoryOption';
import { SuccessResponse } from '@/shared/utils/types';

type CategoryOptionsProps = {
  selectedCategory: string;
}

const CategoryOptions: FC<CategoryOptionsProps> = async ({ selectedCategory }) => {
  const categoriesData = await getAllCategoryQuery() as SuccessResponse<Category[]>;

  const categories = categoriesData.data;

  return (
    <div className='category_options'>
      {
        categories.map((category) => (
          <CategoryOption
            selectedCategory={ selectedCategory }
            category={ category }
            key={ category.id }
          />
        ))
      }
    </div>
  )
}

export default CategoryOptions